# 📋 Asset QR Gen (PWA)

An in-house, portable Progressive Web App designed to generate standardized QR codes for hardware asset tracking. This tool works offline and is optimized for installation on **Android** and **iOS** devices.

## 🚀 Features

* **Standardized Data:** Enforces a specific format for Make, Model, OS, Specs, and Serial Numbers to ensure documentation consistency.
* **Dynamic Dropdowns:** Pre-configured options for major manufacturers (Dell, HP, Lenovo, Apple) and device specifications.
* **Validation:** Prevents the generation of QR codes with missing data fields.
* **Multi-Format Export:** Download tags as **PNG** (for digital logs) or **PDF** (for high-resolution printing).
* **PWA Enabled:** Can be "installed" as a native-feeling app on mobile devices.
* **Offline Support:** Works in warehouses or remote locations without an active internet connection.
* **Debug Mode:** Includes a randomizer button for quick testing of label layouts.

---

## 🛠 Tech Stack

* **Core:** HTML5, CSS3, JavaScript (ES6)
* **QR Engine:** [QR-Code-Styling](https://www.google.com/search?q=https://github.com/SumiMakito/qr-code-styling) (High-fidelity vector generation)
* **PWA:** Service Workers & Web App Manifest
* **Hosting:** GitHub Pages (SSL required for PWA installation)

---

## 📂 Project Structure

```text
├── index.html        # Main Application UI & Logic
├── manifest.json     # PWA Configuration (App icons, colors, display mode)
├── sw.js             # Service Worker (Handles offline caching)
└── README.md         # Documentation

```

---

## 📲 Installation Instructions

### For iOS (iPhone/iPad)

1. Open the hosted URL in **Safari**.
2. Tap the **Share** button (square with arrow).
3. Scroll down and select **"Add to Home Screen"**.
4. Launch the app from your home screen.

### For Android

1. Open the hosted URL in **Chrome**.
2. A prompt should appear: "Add Asset QR to Home Screen."
3. If no prompt appears, tap the **three dots** (top right) and select **"Install App"**.

---

## 📊 Data Schema

The QR code encodes data in a pipe-delimited format for easy parsing into Excel or databases:

`MAKE:[Make]||MOD:[Model]||OS:[OS]||SN:[Serial]||CPU:[CPU]||SSD:[Disk]||RAM:[RAM]||COND:[Condition]||BY:[User]`

---

## 🔧 Maintenance & Development

### Adding New Manufacturers

To add more brands, locate the `<select id="make">` section in `index.html` and add a new option:

```html
<option value="Microsoft">Microsoft</option>

```

### Removing Test Mode

Before deploying to a production environment, comment out or remove the following sections:

1. **HTML:** The `<button class="btn-test">` tag.
2. **JS:** The `randomizeData()` function inside the script block.

---

## ⚠️ Troubleshooting

* **404 Not Found (GitHub Pages):** Ensure your main file is named exactly `index.html` (all lowercase) and is located in the root directory.
* **PWA Not Installing:** Ensure you are accessing the site via **HTTPS**. Service workers will not register over unencrypted connections.
* **QR Code Not Scanning:** If the QR code is too "dense," try shortening the input text or increasing the physical size of the printed label.

---

## 📄 License

This project is open-source and intended for internal organizational use.

---

