# Copilot Instructions for QR Code Project

## Project Overview

- This is a simple Node.js CLI tool that:
  1. Prompts the user for a URL using `inquirer`.
  2. Generates a QR code image from the URL using `qr-image`.
  3. Saves the user input to a text file using Node's `fs` module.

## Key Files

- `index.js`: Main entry point. Handles user input, QR code generation, and file writing.
- `package.json`: Lists dependencies (`inquirer`, `qr-image`).
- `URL.txt`: Output file for saving user input.
- `qr_img.png`: Output QR code image.

## Patterns & Conventions

- Uses CommonJS (`require`) or ES module (`import`) syntax, but keep it consistent. If using `import`, ensure `package.json` has `"type": "module"`.
- All user interaction and file operations are handled in `index.js`.
- Output files are written to the project root.
- No submodules or complex architecture; all logic is in a single file.

## Developer Workflows

- **Install dependencies:**
  ```sh
  npm install
  ```
- **Run the app:**
  ```sh
  node index.js
  ```
  Or, if using ES modules:
  ```sh
  node --experimental-modules index.js
  ```
- **Add new dependencies:**
  ```sh
  npm install <package>
  ```

## External Dependencies

- `inquirer`: For CLI prompts.
- `qr-image`: For QR code generation.
- `fs` (Node built-in): For file operations.

## Example Data Flow

1. Prompt user for URL →
2. Generate QR code from URL →
3. Save QR code as PNG and URL as TXT

## Special Notes

- If you see import errors, check module type in `package.json`.
- Keep all logic in `index.js` unless project is refactored.
- No tests or build scripts are present.

---

For questions about project structure or conventions, review `index.js` and this file.
