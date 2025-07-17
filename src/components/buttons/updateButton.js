/**
 * Update Field Button Component
 * Updates a field in the current NetSuite record
 */

import { showModal } from "../modal.js";
import { getEditableFieldOptions } from "../utils.js";

function createUpdateButton(recordType, recordId) {
  const button = document.createElement("button");
  button.innerHTML = "✏️ Update Field";
  button.title = "Update a field in this record";
  button.type = "button";
  button.className = "ns-extension-button update-button";

  button.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const fields = getEditableFieldOptions();
    if (!fields.length) {
      alert("No editable fields found in this form.");
      return;
    }

    const selectHTML = `
      <label style="display:block; margin-bottom: 6px;">Search field:</label>
      <input type="text" id="fieldSearch" placeholder="Type part of the field name or ID"
        style="width:100%; padding:6px 10px; margin-bottom:10px; font-size:13px; border:1px solid #ccc; border-radius:4px;" />

      <label style="display:block; margin-bottom: 6px;">Select field to update:</label>
      <select id="fieldSelect" size="8"
        style="width:100%; padding:6px; font-size:13px; border:1px solid #ccc; border-radius:4px;">
        ${fields
          .map(
            ([id, label]) => `<option value="${id}">${label} (${id})</option>`
          )
          .join("")}
      </select>

      <label style="display:block; margin-top: 12px; margin-bottom: 6px;">New value:</label>
      <input id="fieldValueInput" type="text" placeholder="Enter new value"
        style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; font-size:13px;" />
    `;

    showModal({
      title: "Update Field",
      bodyHTML: selectHTML,
      confirmText: "Update",
      cancelText: "Cancel",
      onConfirm: () => {
        const fieldSelectEl = document.getElementById("fieldSelect");
        const fieldValueInputEl = document.getElementById("fieldValueInput");

        if (!fieldSelectEl || !fieldValueInputEl) {
          alert("An error occurred reading form fields. Was the modal closed?");
          return;
        }

        const selectedFieldId = fieldSelectEl.value;
        const value = fieldValueInputEl.value;

        const confirmMsg = `Confirm updating field "${selectedFieldId}" with value:\\n\\n"${value}"?`;
        if (!window.confirm(confirmMsg)) return;

        try {
          window.nlapiSubmitField(recordType, recordId, selectedFieldId, value);
          alert("Field updated successfully! Reloading...");
          let cleanUrl = window.location.pathname + "?id=" + recordId;
          const rectype = new URL(window.location.href).searchParams.get(
            "rectype"
          );
          if (rectype) cleanUrl += "&rectype=" + rectype;
          window.location.href = cleanUrl;
        } catch (error) {
          console.error("Error updating:", error);
          alert(`Error updating field:\n${error.message}`);
        }
      },
    });

    setTimeout(() => {
      const fieldSearchEl = document.getElementById("fieldSearch");
      const fieldSelectEl = document.getElementById("fieldSelect");

      if (!fieldSearchEl || !fieldSelectEl) return;

      const allOptions = Array.from(fieldSelectEl.options);

      fieldSearchEl.addEventListener("input", function () {
        const search = this.value.toLowerCase();

        allOptions.forEach((opt) => {
          const match = opt.textContent.toLowerCase().includes(search);
          opt.hidden = !match;
        });

        const visibleOptions = allOptions.filter((opt) => !opt.hidden);
        if (visibleOptions.length > 0) {
          visibleOptions[0].selected = true;
        }
      });

      fieldSearchEl.focus();
    }, 50);
  };

  return button;
}

export { createUpdateButton };
