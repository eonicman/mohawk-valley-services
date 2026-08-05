// "Request a custom guide" modal for the standalone DIY pages. Category is
// read from #diy-grid's data-category attribute, so this works unmodified
// across every category's DIY page.

function openDIYModal() {
  document.getElementById("diyModalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
  const input = document.getElementById("diyProject");
  if (input) input.focus();
}

function closeDIYModal(event) {
  if (event && event.target !== event.currentTarget) return;
  document.getElementById("diyModalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeDIYModal();
});

function escapeHtml(s) {
  return (s || "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function submitDIYRequest(event) {
  event.preventDefault();
  const form = event.target;
  const btn = document.getElementById("diySubmitBtn");
  const originalText = btn.textContent;
  btn.textContent = "🔍 Searching…";
  btn.disabled = true;

  const grid = document.getElementById("diy-grid");
  const category = (grid && grid.dataset.category) || "";

  fetch("/api/diy-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      project: form.project.value,
      category,
      skill: form.skill.value,
      details: form.details.value,
      email: form.email.value,
      page: window.location.href,
    }),
  })
    .then((r) => r.json())
    .catch(() => ({ status: "new" }))
    .then((data) => {
      const body = document.getElementById("diyModalBody");
      if (data.status === "existing") {
        body.innerHTML = `
          <div class="diy-success">
            <div class="emoji">🎉</div>
            <h4>Good news — this one's already in our library!</h4>
            <p style="color:#555;font-size:.9rem;">Close this and look for "${escapeHtml(data.guide.project)}" in the guide list.</p>
          </div>`;
      } else {
        body.innerHTML = `
          <div class="diy-success">
            <div class="emoji">📤</div>
            <h4>Request submitted!</h4>
            <p style="color:#555;font-size:.9rem;">We'll build this guide and email it to you.</p>
          </div>`;
      }
    })
    .finally(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    });
}
