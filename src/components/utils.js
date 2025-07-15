/**
 * Utility functions for the NetSuite extension
 */

// Find label for input/select/textarea using 'label[for]' or nearby classes
function findLabelForField(id) {
  const labelEl =
    document.querySelector(`label[for="${id}"]`) ||
    document.querySelector(`#${id}_fs_lbl`) ||
    document.querySelector(`#${id}_fs_lbl_uir_label`);
  return labelEl?.textContent?.trim()?.replace(/[:*]/g, "") || "";
}

// Find label text in readonly-type divs
function findLabelNear(el) {
  const labelSpan =
    el.querySelector(".uir-label-span, .uir-label") ||
    el.closest("tr")?.querySelector(".uir-label");
  return labelSpan?.textContent?.trim()?.replace(/[:*]/g, "") || "";
}

// Get all editable fields from the current form
function getEditableFieldOptions() {
  const validFields = new Map();

  // 1. Fields with visible IDs (inputs, selects, textareas)
  const inputs = document.querySelectorAll(
    "input[id], select[id], textarea[id]"
  );
  inputs.forEach((el) => {
    const id = el.id;
    if (!id || id.startsWith("inpt_") || id.includes("$")) return;

    const label = findLabelForField(id);
    validFields.set(id, label || id);
  });

  // 2. Read-only fields or text-rendered fields
  const readonlyFields = document.querySelectorAll(
    "div.uir-field-wrapper[data-field-name]"
  );
  readonlyFields.forEach((wrapper) => {
    const fieldId = wrapper.getAttribute("data-field-name");
    if (!fieldId || validFields.has(fieldId)) return;

    const label =
      wrapper.getAttribute("data-nsps-label") || findLabelNear(wrapper);
    validFields.set(fieldId, label || fieldId);
  });

  return Array.from(validFields.entries()); // [[id, label], ...]
}

// Find a suitable container for buttons
function findButtonContainer() {
  const possibleContainers = [
    "tr.uir-buttons", // Main button row
    "#spn_ACTIONTYPE_MENU", // Action menu container
    ".uir-page-title-firstline .uir-button-menu-container", // Button container in title bar
    "#div__labtab", // Main tab container
    ".uir-page-title-firstline > table > tbody > tr > td:last-child" // Last cell in title row
  ];

  for (const selector of possibleContainers) {
    const container = document.querySelector(selector);
    if (container) {
      return { container, selector };
    }
  }

  return { container: null, selector: null };
}

export {
  findLabelForField,
  findLabelNear,
  getEditableFieldOptions,
  findButtonContainer
};