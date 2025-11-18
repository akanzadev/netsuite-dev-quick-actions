function injectScript(filename) {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL(`assets/${filename}`);
  script.onload = () => script.remove();
  (document.head || document.documentElement).appendChild(script);
}

// Check if extension is enabled before injecting
async function checkAndInject() {
  try {
    const result = await chrome.storage.local.get('nsDevExtensionEnabled');
    const isEnabled = result.nsDevExtensionEnabled !== false;
    
    if (isEnabled && !window.__NS_DEV_TOOLS_LOADED__) {
      window.__NS_DEV_TOOLS_LOADED__ = true;
      injectScript("app.js");
    }
  } catch (error) {
    console.error('Error checking extension state:', error);
  }
}

// Listen for toggle messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'toggleExtension') {
    if (message.enabled) {
      // Reload page to activate extension
      window.location.reload();
    } else {
      // Remove buttons if they exist
      const buttons = document.querySelectorAll('.ns-extension-button');
      buttons.forEach(btn => btn.parentElement?.remove());
    }
  }
});

// Initialize
checkAndInject();
