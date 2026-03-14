import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(props) {
  const isDark = props.mode === "dark";

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "70vh",
        color: isDark ? "white" : "#1b1846",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: "bold", lineHeight: 1 }}>
        404
      </h1>
      <h4 className="mt-2 mb-3">Page Not Found</h4>
      <p className="text-muted mb-4" style={{ maxWidth: "400px" }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        ← Back to Home
      </Link>
    </div>
  );
}
