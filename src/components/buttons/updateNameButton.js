/**
 * Update Name Button Component
 * Updates the name of the current NetSuite record in all forms
 */

import { showModal } from "../modal.js";
import { escapeHTML } from "../utils.js";

function createUpdateNameButton() {
  const button = document.createElement("button");
  button.innerHTML = "✏️ Update Name";
  button.title = "Update the name of this record in all forms";
  button.type = "button";
  button.className = "ns-extension-button update-name-button";

  button.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const labelSpan = document.querySelector(
      'div[data-nsps-id^="field_"] span.input.uir-field-input'
    );
    const currentName = labelSpan?.textContent?.trim() || "";

    const nameInputHTML = `
      <label style="display:block; margin-bottom: 6px;">New Name:</label>
      <input id="nameInput" type="text" value="${escapeHTML(currentName)}"
        placeholder="Enter new name"
        style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; font-size:13px;" />
    `;

    showModal({
      title: "Update Record Name",
      bodyHTML: nameInputHTML,
      confirmText: "Update",
      cancelText: "Cancel",
      onConfirm: () => {
        const nameInputEl = document.getElementById("nameInput");
        if (!nameInputEl) {
          alert(
            "An error occurred reading the name input. Was the modal closed?"
          );
          return;
        }

        const newName = nameInputEl.value.trim();
        if (!newName) {
          alert("Please enter a valid name.");
          return;
        }

        try {
          const rows = document.querySelectorAll('tr[id^="formrow"]');

          rows.forEach((row) => {
            const inputCell = row.querySelector('input[name^="formlabel"]');
            if (inputCell) {
              inputCell.value = newName;
              inputCell.dispatchEvent(new Event("change", { bubbles: true }));
            }
          });

          alert("Record name updated successfully. Please save the form to persist changes.");
        } catch (error) {
          console.error("Error updating name:", error);
          alert(`Error updating record name:\n\n${error.message || error}`);
        }
      },
    });
  };

  return button;
}

export { createUpdateNameButton };
