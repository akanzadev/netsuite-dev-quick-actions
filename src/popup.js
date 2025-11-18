/**
 * Popup script for NetSuite Dev Quick Actions
 * Manages the extension's enabled/disabled state
 */

const STORAGE_KEY = 'nsDevExtensionEnabled';

// DOM Elements
const toggleSwitch = document.getElementById('toggleSwitch');
const statusBadge = document.getElementById('statusBadge');

// Initialize popup
async function initPopup() {
  const isEnabled = await getExtensionState();
  updateUI(isEnabled);
}

// Get current extension state from storage
async function getExtensionState() {
  try {
    const result = await chrome.storage.local.get(STORAGE_KEY);
    // Default to enabled if not set
    return result[STORAGE_KEY] !== false;
  } catch (error) {
    console.error('Error getting extension state:', error);
    return true;
  }
}

// Set extension state in storage
async function setExtensionState(enabled) {
  try {
    await chrome.storage.local.set({ [STORAGE_KEY]: enabled });
    
    // Notify all NetSuite tabs about the state change
    const tabs = await chrome.tabs.query({
      url: 'https://*.app.netsuite.com/*'
    });
    
    tabs.forEach(tab => {
      chrome.tabs.sendMessage(tab.id, {
        action: 'toggleExtension',
        enabled: enabled
      }).catch(() => {
        // Tab might not have content script loaded, ignore error
      });
    });
  } catch (error) {
    console.error('Error setting extension state:', error);
  }
}

// Update UI based on state
function updateUI(enabled) {
  if (enabled) {
    toggleSwitch.classList.add('active');
    statusBadge.classList.remove('inactive');
    statusBadge.classList.add('active');
    statusBadge.textContent = 'Active';
  } else {
    toggleSwitch.classList.remove('active');
    statusBadge.classList.remove('active');
    statusBadge.classList.add('inactive');
    statusBadge.textContent = 'Inactive';
  }
}

// Handle toggle click
toggleSwitch.addEventListener('click', async () => {
  const currentState = await getExtensionState();
  const newState = !currentState;
  
  await setExtensionState(newState);
  updateUI(newState);
});

// Initialize on load
initPopup();
