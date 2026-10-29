(() => {
  const fonts = ["Instrument Serif", "Manrope", "Fraunces", "Inter", "Space Grotesk", "Source Sans 3"];
  const status = document.getElementById("font-status");
  Promise.all(fonts.map(name => document.fonts.load('16px "' + name + '"')))
    .then(results => {
      status.textContent = results.every(result => result.length > 0)
        ? "All six preview fonts are loaded."
        : "Some fonts could not load. Connect to the internet and refresh to see the intended samples.";
    })
    .catch(() => { status.textContent = "Preview fonts could not load; fallback fonts are shown. Connect to the internet and refresh."; });
})();