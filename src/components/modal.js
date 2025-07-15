/**
 * Modal component for the NetSuite extension
 * Provides a reusable modal dialog with customizable content
 */

import { overlayStyles, modalStyles, createRippleEffect } from './styles.js';

function showModal({
  title,
  bodyHTML,
  onConfirm,
  confirmText = "Accept",
  cancelText = "Cancel"
}) {
  const overlay = document.createElement("div");
  Object.assign(overlay.style, overlayStyles);

  const modal = document.createElement("div");
  Object.assign(modal.style, modalStyles);

  modal.innerHTML = `
    <h2 style="margin-top:0; font-size: 18px; margin-bottom: 15px; color: #333; cursor: move; user-select: none;">${title}</h2>
    <div style="margin-bottom: 24px; font-size: 14px; color: #444;">${bodyHTML}</div>
    <div style="text-align: right; display: flex; justify-content: flex-end; gap: 10px;">
        <button class="material-btn cancel-btn">${cancelText}</button>
        <button class="material-btn confirm-btn">${confirmText}</button>
    </div>
  `;

  // Drag logic
  setupDragLogic(modal);

  // Add ripple effect to buttons
  modal.querySelectorAll(".material-btn").forEach((btn) => {
    btn.addEventListener("click", function(e) {
      createRippleEffect(btn, e);
    });
  });

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Button actions
  modal.querySelector(".cancel-btn").onclick = () => document.body.removeChild(overlay);
  modal.querySelector(".confirm-btn").onclick = () => {
    if (onConfirm) onConfirm();
    document.body.removeChild(overlay);
  };
}

// Setup drag functionality for the modal
function setupDragLogic(modal) {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  const header = modal.querySelector("h2");
  header.addEventListener("mousedown", (e) => {
    isDragging = true;
    const rect = modal.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    modal.style.left = `${e.clientX - offsetX}px`;
    modal.style.top = `${e.clientY - offsetY}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "";
  });
}

export { showModal };