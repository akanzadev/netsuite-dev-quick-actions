/**
 * NetSuite Record Management Buttons Extension
 * Main application file
 */

// Import components
import { addStyles as addGlobalStyles } from "./components/styles.js";
import { createButtons } from "./components/buttons/index.js";
import { findButtonContainer } from "./components/utils.js";

(function () {
  "use strict";

  console.info("NetSuite management extension: Loaded and running...");

  // Prevent script execution in iframes to avoid common errors
  if (window.top !== window.self) {
    console.info("Extension: Stopped, running in an iframe.");
    return;
  }

  // Check if already initialized to prevent duplicate execution
  if (window.__NS_DEV_EXTENSION_INITIALIZED__) {
    console.info("Extension: Already initialized, skipping.");
    return;
  }
  window.__NS_DEV_EXTENSION_INITIALIZED__ = true;

  addGlobalStyles();

  try {
    const recordType = window.nlapiGetRecordType();
    const recordId = window.nlapiGetRecordId();

    const isCustomFieldForm = window.location.pathname.includes(
      "/app/common/custom/custfieldform.nl"
    );

    if ((recordType && recordId) || isCustomFieldForm) {
      const buttonWrapper = document.createElement("span");

      const { relatedButton, deleteButton, updateButton, updateNameButton } =
        createButtons(recordType, recordId, isCustomFieldForm);

      if (!isCustomFieldForm) {
        buttonWrapper.appendChild(relatedButton);
        buttonWrapper.appendChild(deleteButton);
        buttonWrapper.appendChild(updateButton);
      } else {
        buttonWrapper.appendChild(updateNameButton);
      }

      // Find a suitable container for the buttons
      const { container, selector } = findButtonContainer();

      if (container) {
        // If container is a table row (TR), we need to insert a cell (TD)
        if (container.tagName === "TR") {
          const newCell = document.createElement("td");
          newCell.style.paddingLeft = "10px";
          newCell.appendChild(buttonWrapper);
          container.appendChild(newCell);
        } else {
          // For other container types (DIV, SPAN, etc.)
          container.appendChild(buttonWrapper);
        }
      } else {
        console.warn(
          "No standard button container found. Using fallback (body.prepend)."
        );
        // As fallback, insert at the top of document body
        document.body.prepend(buttonWrapper);
      }
    } else {
      console.info("Extension: No NetSuite record found on this page.");
    }
  } catch (error) {
    // This error can occur if nlapi functions are not available (e.g., not a record page)
    console.warn(
      "Extension: Could not initialize. Probably not a NetSuite record page.",
      error.message
    );
    // Don't show error to user as this is expected on non-record pages
  }
})();
