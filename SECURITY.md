# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this extension, please report it by:

1. **Email**: Send details to the repository owner through GitHub
2. **GitHub Security**: Use the [Security Advisories](https://github.com/akanzadev/netsuite-dev-quick-actions/security/advisories/new) feature

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## Security Considerations

This extension:
- Only runs on NetSuite domains (`*.app.netsuite.com`)
- Does not collect or transmit any user data
- Does not make external API calls
- Requires user confirmation for destructive actions (delete)
- Uses NetSuite's native API functions (`nlapiDeleteRecord`, `nlapiSubmitField`, etc.)

## Best Practices

When using this extension:
- Always verify the record ID before deleting
- Test field updates on non-production environments first
- Be aware that actions are immediate and may not be easily reversible
- Keep the extension updated to the latest version

## Permissions

The extension requests minimal permissions:
- `activeTab`: To interact with the active NetSuite tab
- `scripting`: To inject the content script
- `host_permissions`: Limited to `*.app.netsuite.com` domains only

## Updates

Security updates will be released as soon as possible after discovery. Check the [releases page](https://github.com/akanzadev/netsuite-dev-quick-actions/releases) for updates.
