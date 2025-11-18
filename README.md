# NetSuite Quick Actions for Developers

**Quick access to essential developer actions on NetSuite records**: delete records, view related records, and update fields with ease.

![screenshot](preview.png)

## 🚀 Features

- 🗑️ **Delete** the current NetSuite record in one click
- 🔗 **View related records** quickly (linked transactions or entities)
- ✏️ **Update record fields** manually or via predefined logic
- 🔄 **Update field names** in custom field forms
- ⚙️ **Enable/Disable toggle** to control extension activation
- 🎨 Designed specifically for SuiteScript developers and technical admins

## 📦 Installation

### For Users

1. Download the latest release from the [Releases](https://github.com/akanzadev/netsuite-dev-quick-actions/releases) page
2. Go to `chrome://extensions` in your browser
3. Enable **Developer mode** (toggle in the top right)
4. Click on **"Load unpacked"** and select the `dist/` folder
5. You're good to go!

### For Developers

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run build` to build the extension
4. Follow the user installation steps above

> See [BUILD.md](BUILD.md) for detailed build instructions and troubleshooting.

## 🧠 Why this extension?

NetSuite can be slow and repetitive during development and testing.  
This extension was created to simplify the life of developers by adding buttons and shortcuts directly on record pages.

**New in v1.1**: Click the extension icon in your browser toolbar to enable/disable the quick action buttons without uninstalling the extension!

## 🛠️ Tech Stack

- Chrome Extension (Manifest v3)
- JavaScript / Vite / HTML
- Injected UI using DOM manipulation

## 📸 Demo

![NetSuite Dev Extension Demo](demo.gif)

## 🧑‍💻 Author

Developed by [@akanzadev](https://github.com/akanzadev) — feel free to contribute, fork, or suggest ideas.

## 📄 License

[MIT License](LICENSE)
