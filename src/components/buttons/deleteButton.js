/**
 * Delete Button Component
 * Deletes the current NetSuite record
 */

import { showModal } from "../modal.js";
import { escapeHTML } from "../utils.js";

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
      bodyHTML: `Are you sure you want to delete this record?<br><strong>Type:</strong> ${escapeHTML(recordType)}<br><strong>ID:</strong> ${escapeHTML(String(recordId))}`,
      confirmText: "Yes, delete",
      cancelText: "Cancel",
      onConfirm: () => {
        try {
          window.nlapiDeleteRecord(recordType, recordId);
          // Use setTimeout to ensure alert is shown before redirect
          setTimeout(() => {
            window.location.href = "/app/center/card.nl";
          }, 100);
          alert("Record deleted successfully. Redirecting...");
        } catch (error) {
          console.error("Error deleting record:", error);
          alert(`Error deleting record:\n\n${error.message || error}`);
        }
      },
    });
  };

  return button;
}

export { createDeleteButton };
