/**
 * NetSuite Record Management Buttons Extension
 * Main application file
 */

// Import components
import { addStyles } from "./components/styles.js";
import { createButtons } from "./components/buttons/index.js";
import { findButtonContainer } from "./components/utils.js";

(function () {
  "use strict";

  console.log("NetSuite management extension: Loaded and running...");

  // Prevent script execution in iframes to avoid common errors
  if (window.top !== window.self) {
    console.log("Extension: Stopped, running in an iframe.");
    return;
  }

  // Add global styles
  addStyles();

  try {
    // Get current record type and ID using NetSuite APIs (SuiteScript 1.0)
    const recordType = window.nlapiGetRecordType();
    console.log("Record type:", recordType);
    const recordId = window.nlapiGetRecordId();
    console.log("Record ID:", recordId);

    if (recordType && recordId) {
      console.log("Extension: Detected record", {
        type: recordType,
        id: recordId,
      });

      // Create container for our buttons
      const buttonWrapper = document.createElement("span");

      // Create all buttons
      const { relatedButton, deleteButton, updateButton } = createButtons(
        recordType,
        recordId
      );

      // Add buttons to container
      buttonWrapper.appendChild(relatedButton);
      buttonWrapper.appendChild(deleteButton);
      buttonWrapper.appendChild(updateButton);

      // Find a suitable container for the buttons
      const { container, selector } = findButtonContainer();

      if (container) {
        console.log(`Buttons inserted in standard container: ${selector}`);

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
      console.log("Extension: No NetSuite record found on this page.");
    }
  } catch (error) {
    // This error can occur if nlapi functions are not available (e.g., not a record page)
    console.log(
      "Extension: Could not initialize. Probably not a NetSuite record page.",
      error.name
    );
  }
})();
