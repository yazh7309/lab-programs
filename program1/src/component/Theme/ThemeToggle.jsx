import { useState } from "react";
import "./App.jsx";
function App() {
  const [isDark, setIsDark] = useState(false);

  const lightTheme = {
    backgroundColor: "#ffffff",
    color: "#111827",
  };

  const darkTheme = {
    backgroundColor: "#0f172a",
    color: "#e6eef8",
  };

  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        transition: "background-color 250ms ease, color 250ms ease",
        ...currentTheme,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <h1>Theme Toggle Example</h1>

        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            padding: "10px 16px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            background: isDark ? "#1f2937" : "#f3f4f6",
            color: isDark ? "#e6eef8" : "#111827",
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>

        <div
          style={{
            padding: 20,
            borderRadius: 10,
            border: `1px solid ${
              isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)"
            }`,
          }}
        >
          <h2>Preview Area</h2>

          <p>
            This text and the page background change according to the selected
            theme.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
