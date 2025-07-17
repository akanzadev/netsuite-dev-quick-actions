/**
 * Delete Button Component
 * Deletes the current NetSuite record
 */

import { showModal } from "../modal.js";

function createDeleteButton(recordType, recordId) {
  const button = document.createElement("button");
  button.innerHTML = `🗑️ Delete (ID: ${recordId})`;
  button.title = "Delete this record";
  button.type = "button";
  button.className = "ns-extension-button delete-button";

  button.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    showModal({
      title: "Confirm Deletion",
      bodyHTML: `Are you sure you want to delete this record?<br><strong>Type:</strong> ${recordType}<br><strong>ID:</strong> ${recordId}`,
      confirmText: "Yes, delete",
      cancelText: "Cancel",
      onConfirm: () => {
        try {
          window.nlapiDeleteRecord(recordType, recordId);
          alert("Record deleted successfully.");
          window.location.href = "/app/center/card.nl";
        } catch (e) {
          console.error("Error deleting:", e);
          alert(`Error deleting record:\n\n${e.message}`);
        }
      },
    });
  };

  return button;
}

export { createDeleteButton };
