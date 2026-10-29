(() => {
  const choices = {
    editorial: "family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700",
    warm: "family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:ital,wght@0,400;0,500;0,600;1,400",
    modern: "family=Space+Grotesk:wght@400;500;600&family=Source+Sans+3:ital,wght@0,400;0,600;1,400"
  };
  const selected = new URLSearchParams(window.location.search).get("font");
  if (!Object.hasOwn(choices, selected)) return;
  document.documentElement.dataset.fontPreview = selected;
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "https://fonts.googleapis.com/css2?" + choices[selected] + "&display=swap";
  document.head.append(stylesheet);
})();
