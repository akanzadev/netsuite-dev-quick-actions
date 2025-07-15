function injectScript(filename) {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL(`assets/${filename}`);
  script.onload = () => script.remove();
  (document.head || document.documentElement).appendChild(script);
}

// Evita duplicado
if (!window.__NS_DEV_TOOLS_LOADED__) {
  window.__NS_DEV_TOOLS_LOADED__ = true;

  injectScript("app.js");
}
