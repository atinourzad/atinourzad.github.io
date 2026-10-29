(() => {
  const duration = 5000;
  let highlighted = [];
  let timeout;

  function clearHighlight() {
    window.clearTimeout(timeout);
    highlighted.forEach(element => element.classList.remove("is-linked"));
    highlighted = [];
  }

  function highlightHash() {
    clearHighlight();
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); }
    catch { return; }
    const target = document.getElementById(id);
    if (!target || !target.matches(".research-row, .project-detail, .publication, .workshop-list > li")) return;
    highlighted = [target];
    const card = target.closest(".research-row");
    if (card && card !== target) highlighted.push(card);
    highlighted.forEach(element => element.classList.add("is-linked"));
    timeout = window.setTimeout(clearHighlight, duration);
  }

  window.addEventListener("hashchange", highlightHash);
  document.addEventListener("click", event => {
    const link = event.target.closest("a[href]");
    if (!link || event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const url = new URL(link.href, window.location.href);
    if (url.origin === window.location.origin &&
        url.pathname === window.location.pathname &&
        url.search === window.location.search &&
        url.hash === window.location.hash) highlightHash();
  });
  document.querySelectorAll(".research-row").forEach(card => {
    card.addEventListener("pointerleave", () => {
      if (highlighted.some(element => element === card || card.contains(element))) clearHighlight();
    });
  });
  highlightHash();
})();

(() => {
  const links = [...document.querySelectorAll('.header nav a[href^="#"]')];
  const sections = [...document.querySelectorAll("main > section[id]")];
  let scheduled = false;
  function updateSection() {
    scheduled = false;
    let current = "home";
    const threshold = Math.min(180, window.innerHeight * 0.25);
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= threshold) current = section.id;
    });
    links.forEach(link => {
      if (link.getAttribute("href") === "#" + current) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }
  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateSection);
  }
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("hashchange", scheduleUpdate);
  updateSection();
})();
