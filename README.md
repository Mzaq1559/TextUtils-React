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

| Feature | Description |
|---|---|
| 📊 **Text Analysis** | Instant word count, character count, and sentence estimation |
| 🔠 **Case Conversion** | One-click conversion to UPPERCASE or lowercase |
| 🧹 **Text Cleaning** | Strip extra whitespace and normalize spacing |
| ⏱️ **Reading Time** | Estimates how long it takes to read your text |
| 🌙 **Dark Mode** | Toggleable dark theme for comfortable use at any hour |
| 🔗 **Client-Side Routing** | Smooth navigation via React Router v6 |
| 🚫 **Custom 404 Page** | Friendly error page for invalid routes |

---

## 🛠️ Tech Stack

- **Framework:** [React.js](https://reactjs.org/) with functional components and Hooks
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **Styling:** [Bootstrap 5](https://getbootstrap.com/)
- **State Management:** `useState`, `useEffect`

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
│   │   ├── Navbar.js       # Top navigation with dark mode toggle
│   │   ├── TextForm.js     # Core text input and analysis component
│   │   ├── About.js        # About page
│   │   └── NotFound.js     # Custom 404 page
│   ├── App.js              # Root component with routing setup
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
   - *Uppercase* — converts all characters to capitals
   - *Lowercase* — converts all characters to small letters
   - *Remove Extra Spaces* — cleans up irregular whitespace
3. View the **text summary** below the input — word count, character count, and estimated reading time update instantly.
4. Toggle **Dark Mode** from the navbar for a different visual experience.
5. Visit the **About** page via the navbar to learn more about the app.

---

## 🌐 Routing Overview

| Route | Component | Description |
|---|---|---|
| `/` | `TextForm` | Main text analyzer (Home) |
| `/about` | `About` | About the application |
| `*` | `NotFound` | Custom 404 for unknown routes |

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
