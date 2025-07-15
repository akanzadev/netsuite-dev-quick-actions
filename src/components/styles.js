/**
 * Styles module for the NetSuite extension
 * Contains all styling functions and constants
 */

// Button styles
const buttonStyles = {
  backgroundColor: "", // Set by caller
  color: "white",
  border: "none",
  padding: "6px 14px",
  borderRadius: "6px",
  fontSize: "13px",
  fontWeight: "bold",
  fontFamily: "Segoe UI, sans-serif",
  cursor: "pointer",
  marginRight: "8px",
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  transition: "box-shadow 0.2s ease-in-out"
};

// Modal overlay styles
const overlayStyles = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "9999",
  animation: "fadeIn 0.2s ease-in-out"
};

// Modal content styles
const modalStyles = {
  backgroundColor: "white",
  padding: "24px",
  borderRadius: "12px",
  maxWidth: "400px",
  width: "90%",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)",
  fontFamily: "Segoe UI, sans-serif",
  transform: "scale(0.95)",
  opacity: "0",
  animation: "materialFadeIn 0.2s ease forwards",
  position: "absolute" // To allow movement
};

// CSS animations
const animations = `
  @keyframes materialFadeIn {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes ripple-effect {
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }
`;

// Modal button styles
const modalButtonStyles = `
  .material-btn {
    position: relative;
    overflow: hidden;
    padding: 6px 16px;
    border: none;
    border-radius: 6px;
    background-color: #eee;
    color: #333;
    font-weight: bold;
    font-size: 13px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .material-btn.confirm-btn {
    background-color: #0d6efd;
    color: white;
  }

  .material-btn.cancel-btn {
    background-color: #dee2e6;
  }

  .material-btn:hover {
    filter: brightness(0.95);
  }

  .ripple {
    position: absolute;
    z-index: 1;
  }
`;

// Add styles to document
function addStyles() {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = animations + modalButtonStyles;
  document.head.appendChild(styleTag);
}

// Create ripple effect on element
function createRippleEffect(element, event) {
  const ripple = document.createElement("span");
  Object.assign(ripple.style, {
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    transform: "scale(0)",
    animation: "ripple-effect 0.6s linear",
    pointerEvents: "none",
    width: "100px",
    height: "100px",
    top: `${event.offsetY - 50}px`,
    left: `${event.offsetX - 50}px`
  });
  ripple.className = "ripple";
  element.appendChild(ripple);
  setTimeout(() => element.removeChild(ripple), 600);
}

export {
  buttonStyles,
  overlayStyles,
  modalStyles,
  addStyles,
  createRippleEffect
};