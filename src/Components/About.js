import React from "react";

export default function About(props) {
  const isDark = props.mode === "dark";

  const cardStyle = {
    color: isDark ? "white" : "#1b1846",
    backgroundColor: isDark ? "#343a40" : "white",
    borderColor: isDark ? "#495057" : "#dee2e6",
  };

  const btnStyle = {
    ...cardStyle,
  };

  return (
    <div className="container my-4" style={{ color: cardStyle.color }}>
      <h3 className="mb-1">About TextUtils</h3>
      <p className="text-muted mb-4">
        A fast, lightweight text utility built with React.
      </p>

      <div className="accordion" id="accordionAbout">
        {/* Item 1 */}
        <div className="accordion-item" style={cardStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={btnStyle}
            >
              📝 What is TextUtils?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionAbout"
          >
            <div className="accordion-body" style={cardStyle}>
              TextUtils is a simple, browser-based text analysis tool built with{" "}
              <strong>React.js</strong>. It lets you transform and inspect text
              instantly — no account, no installation, no fuss. Just paste your
              text and start working.
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item" style={cardStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={btnStyle}
            >
              ✨ Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionAbout"
          >
            <div className="accordion-body" style={cardStyle}>
              <ul className="mb-0">
                <li>Convert text to UPPERCASE or lowercase</li>
                <li>Remove extra whitespace instantly</li>
                <li>Copy text to clipboard with one click</li>
                <li>Word, character, and sentence count</li>
                <li>Estimated reading time</li>
                <li>Dark mode support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accordion-item" style={cardStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={btnStyle}
            >
              🛠️ Tech Stack
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionAbout"
          >
            <div className="accordion-body" style={cardStyle}>
              <ul className="mb-0">
                <li>
                  <strong>React.js</strong> — UI & state management via Hooks
                </li>
                <li>
                  <strong>React Router v6</strong> — client-side routing
                </li>
                <li>
                  <strong>Bootstrap 5</strong> — responsive layout & components
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
