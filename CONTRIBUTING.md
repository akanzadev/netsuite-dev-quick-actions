# Contributing to NetSuite Dev Quick Actions

Thank you for considering contributing to this project! 🎉

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/akanzadev/netsuite-dev-quick-actions/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your NetSuite version and browser version

### Suggesting Features

1. Check existing [Issues](https://github.com/akanzadev/netsuite-dev-quick-actions/issues) for similar suggestions
2. Create a new issue with:
   - Clear description of the feature
   - Use case and benefits
   - Possible implementation approach

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly in a NetSuite environment
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/netsuite-dev-quick-actions.git

# Install dependencies
npm install

# Build the extension
npm run build

# Load the extension in Chrome from the dist/ folder
```

## Code Style

- Use ES6+ features
- Add comments for complex logic
- Follow existing code structure
- Keep functions small and focused
- Use meaningful variable names

## Testing Checklist

Before submitting a PR, ensure:

- [ ] Code builds without errors (`npm run build`)
- [ ] Extension loads in Chrome without errors
- [ ] Tested on at least one NetSuite record type
- [ ] No console errors in browser
- [ ] Destructive actions (delete) show confirmation
- [ ] UI elements render correctly
- [ ] Code follows existing patterns

## Questions?

Feel free to open an issue for discussion or reach out to [@akanzadev](https://github.com/akanzadev).

Thank you for contributing! 🚀
