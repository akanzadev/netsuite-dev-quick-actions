# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-11-17

### Added
- Toggle button in popup to enable/disable extension
- Extension state persistence using Chrome storage
- Real-time button removal when extension is disabled
- Status badge showing active/inactive state
- Features list in popup UI

### Changed
- Improved popup UI with modern toggle switch
- Content script now checks extension state before injection
- Added storage permission to manifest

## [1.0.0] - 2025-11-17

### Added
- Initial release of NetSuite Dev Quick Actions extension
- Delete button to remove current NetSuite record
- View Related Records button to access system records and history
- Update Field button with searchable field selector
- Update Name button for custom field forms
- Material Design UI with ripple effects and animations
- Draggable modal dialogs
- XSS protection with HTML sanitization
- Pop-up blocker detection and user notification
- Duplicate initialization prevention
- Comprehensive error handling

### Security
- Added HTML escaping for all user-generated content
- Limited permissions to NetSuite domains only
- Added host_permissions for NetSuite URLs
- No external API calls or data collection

### Documentation
- Added BUILD.md with detailed build instructions
- Added SECURITY.md with security policy
- Added CONTRIBUTING.md for contributors
- Updated README.md with improved installation steps

### Fixed
- Vite configuration for proper content script bundling
- Alert timing issues with page redirects
- URL encoding for query parameters
- Error handling for NetSuite API failures

## [Unreleased]

### Planned
- Support for more NetSuite record types
- Bulk update operations
- Export record data feature
- Custom action shortcuts
- Keyboard shortcuts for quick actions

[1.1.0]: https://github.com/akanzadev/netsuite-dev-quick-actions/releases/tag/v1.1.0
[1.0.0]: https://github.com/akanzadev/netsuite-dev-quick-actions/releases/tag/v1.0.0
