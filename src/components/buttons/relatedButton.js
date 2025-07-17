/**
 * Related Records Button Component
 * Shows related records for the current NetSuite record
 */

import { showModal } from "../modal.js";

function createRelatedButton(recordType, recordId) {
  const button = document.createElement("button");
  button.innerHTML = "🔗 View Related";
  button.title = "View system records and history for this record";
  button.type = "button";
  button.className = "ns-extension-button related-button";

  button.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const currentUrl = new URL(window.location.href);
    const rectype = currentUrl.searchParams.get("rectype");

    const recordTypeToUrlParam = {
      invoice: { param: "custinvc", label: "Invoice" },
      creditmemo: { param: "custcred", label: "Credit Memo" },
      customerpayment: { param: "custpymt", label: "Payment" },
      salesorder: { param: "salesord", label: "Sales Order" },
      purchaseorder: { param: "purchord", label: "Purchase Order" },
      vendorbill: { param: "vendbill", label: "Bill" },
      vendorpayment: { param: "vendpymt", label: "Bill Payment" },
      journalentry: { param: "journal", label: "Journal" },
      itemreceipt: { param: "itemrcpt", label: "Item Receipt" },
      itemfulfillment: { param: "itemship", label: "Item Fulfillment" },
    };

    let url = null;
    if (rectype) {
      url = `/core/pages/childrecords.nl?id=${recordId}&t=CustomRecordEntry&rectype=${rectype}`;
    } else if (recordTypeToUrlParam[recordType]) {
      const m = recordTypeToUrlParam[recordType];
      url = `/app/accounting/transactions/payments.nl?id=${recordId}&label=${m.label}&type=${m.param}&alllinks=T`;
    } else {
      url = `/app/system/nlnotes.nl?type=${recordType}&id=${recordId}`;
    }

    showModal({
      title: "View Related Records",
      bodyHTML: `Related records and history will open:<br><code>${url}</code>`,
      confirmText: "Open",
      onConfirm: () => window.open(url, "_blank"),
    });
  };

  return button;
}

export { createRelatedButton };
