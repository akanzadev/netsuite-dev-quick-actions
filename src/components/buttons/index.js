/**
 * Button components index
 * Exports all button creation functions
 */

import { createRelatedButton } from "./relatedButton.js";
import { createDeleteButton } from "./deleteButton.js";
import { createUpdateButton } from "./updateButton.js";
import { createUpdateNameButton } from "./updateNameButton.js";

import { buttonStyles } from "../styles.js";

// Apply styles to a button
function applyButtonStyles(button, color) {
  Object.assign(button.style, { ...buttonStyles, backgroundColor: color });

  // Add ripple effect
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    ripple.style.pointerEvents = "none";
    ripple.style.width = ripple.style.height =
      Math.max(button.offsetWidth, button.offsetHeight) + "px";
    ripple.style.left = e.offsetX - button.offsetWidth / 2 + "px";
    ripple.style.top = e.offsetY - button.offsetHeight / 2 + "px";
    ripple.style.transform = "scale(0)";
    ripple.style.opacity = "1";
    ripple.style.transition = "transform 0.4s ease-out, opacity 0.8s ease-out";
    button.appendChild(ripple);

    requestAnimationFrame(() => {
      ripple.style.transform = "scale(2.5)";
      ripple.style.opacity = "0";
    });

    setTimeout(() => {
      button.removeChild(ripple);
    }, 800);
  });

  // Shadow effect on hover
  button.addEventListener("mouseenter", () => {
    button.style.boxShadow = "0 3px 6px rgba(0,0,0,0.2)";
  });
  button.addEventListener("mouseleave", () => {
    button.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
  });

  return button;
}

// Create all buttons for the extension
function createButtons(recordType, recordId, isNotRecord = false) {
  if (!isNotRecord) {
    const relatedButton = createRelatedButton(recordType, recordId);
    applyButtonStyles(relatedButton, "#0d6efd");

    const deleteButton = createDeleteButton(recordType, recordId);
    applyButtonStyles(deleteButton, "#dc3545");

    const updateButton = createUpdateButton(recordType, recordId);
    applyButtonStyles(updateButton, "#198754");

    return {
      relatedButton,
      deleteButton,
      updateButton,
    };
  } else {
    const updateNameButton = createUpdateNameButton();
    applyButtonStyles(updateNameButton, "#ffc107");

    return {
      updateNameButton,
    };
  }
}

export { createButtons };
