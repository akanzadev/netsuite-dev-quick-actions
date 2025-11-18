# Build Instructions

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Development Build

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

This will create a `dist/` folder with the compiled extension.

## Loading the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in the top right)
3. Click **"Load unpacked"**
4. Select the `dist/` folder from this project
5. The extension should now be loaded and active

## Testing

Navigate to any NetSuite record page (e.g., invoice, sales order, custom record) and you should see the action buttons appear in the page toolbar.

## Troubleshooting

### Extension not appearing

- Make sure you're on a NetSuite record page with a valid record ID
- Check the browser console for any errors
- Verify that the extension is enabled in `chrome://extensions/`

### Buttons not showing

- Refresh the NetSuite page after loading the extension
- Check that you have the necessary permissions in NetSuite
- Ensure you're not in an iframe context

### Build errors

- Delete `node_modules/` and `dist/` folders
- Run `npm install` again
- Try `npm run build` with a clean slate
