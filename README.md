# TextUtils ✦ React Text Analyzer

> A fast, lightweight text utility built with React — analyze, transform, and clean your text in real time.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📸 Preview

| Light Mode | Dark Mode | 404 Page |
|:---:|:---:|:---:|
| ![Home Page](./screenshots/home.png) | ![Dark Mode](./screenshots/dark.png) | ![404 Page](./screenshots/404.png) |

---

## ✨ Features

### ✏️ Text Transformations
| Feature | Description |
|---|---|
| 🔠 **Uppercase / Lowercase** | One-click case conversion |
| 🧹 **Remove Extra Spaces** | Strips and normalizes all whitespace |
| 🔍 **Find & Replace** | Replace all occurrences of any word or phrase instantly |

### 📊 Analysis & Insights
| Feature | Description |
|---|---|
| 🔢 **Word & Character Count** | Updates in real time as you type |
| 📝 **Sentence Count** | Detects sentences by punctuation |
| ⏱️ **Reading Time** | Estimates minutes to read based on word count |
| 📊 **Letter Frequency Chart** | Visual bar chart of every letter's frequency in your text |

### 🛠️ Utilities
| Feature | Description |
|---|---|
| 📋 **Copy to Clipboard** | Copy your full text with one click |
| ⬇️ **Download as .txt** | Export your text as a `.txt` file instantly |
| 🔊 **Text-to-Speech** | Have your text read aloud using the browser's Speech API |
| 🌙 **Dark Mode** | Toggleable dark theme, synced across all pages |

### 🔗 Navigation
| Feature | Description |
|---|---|
| **React Router v6** | Smooth client-side routing between Home and About |
| **Custom 404 Page** | Friendly error page for invalid routes with a back button |

---

## 🛠️ Tech Stack

- **Framework:** [React.js](https://reactjs.org/) with functional components and Hooks (`useState`, `useRef`)
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **Styling:** [Bootstrap 5](https://getbootstrap.com/)
- **APIs:** Web Speech API (Text-to-Speech), Clipboard API, Blob API (Download)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mzaq1559/TextUtils-React.git
   cd TextUtils-React
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

The optimized output will be in the `build/` directory, ready to deploy.

---

## 📁 Project Structure

```
TextUtils-React/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Top navigation with synced dark mode toggle
│   │   ├── TextForm.js     # Core text input, analysis, and all utilities
│   │   ├── About.js        # About page with accordion, synced to dark mode
│   │   └── NotFound.js     # Custom 404 page with back-to-home button
│   ├── App.js              # Root component with routing and alert system
│   └── index.js            # Entry point
├── screenshots/
│   ├── home.png
│   ├── dark.png
│   └── 404.png
└── README.md
```

---

## 🧪 How to Use

1. **Paste or type** any text into the input area on the Home page.
2. Use the **action buttons** to transform your text:
   - *Uppercase / Lowercase* — instant case conversion
   - *Remove Extra Spaces* — cleans up irregular spacing
   - *Copy Text* — copies to clipboard
   - *Clear* — wipes the textarea
3. Use **Find & Replace** to swap out any word or phrase across the entire text.
4. Click **Read Aloud** to have the browser speak your text. Click **Stop** to cancel.
5. Click **Download .txt** to save your text as a local file.
6. Click **Letter Frequency** to reveal a bar chart of letter distribution.
7. Check the **Text Summary** cards for word count, character count, sentence count, and estimated reading time — all updating live.
8. Toggle **Dark Mode** from the navbar for a different visual experience.

---

## 🌐 Routing Overview

| Route | Component | Description |
|---|---|---|
| `/` | `TextForm` | Main text analyzer (Home) |
| `/about` | `About` | About the application |
| `*` | `NotFound` | Custom 404 for unknown routes |

---

## 🌐 Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| Text-to-Speech | ✅ | ⚠️ Partial | ✅ | ✅ |
| Clipboard API | ✅ | ✅ | ✅ | ✅ |
| Download (.txt) | ✅ | ✅ | ✅ | ✅ |
| Letter Frequency | ✅ | ✅ | ✅ | ✅ |

> ⚠️ Text-to-Speech on Firefox may behave inconsistently depending on the operating system.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please make sure your code is clean and consistent with the existing style.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 👤 Author

**Muhammad Zaqawi**
- GitHub: [@Mzaq1559](https://github.com/Mzaq1559)

---

> *Built with ❤️ using React.js*
