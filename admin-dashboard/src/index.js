import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const AppWithTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return <App setDarkMode={setDarkMode} darkMode={darkMode} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppWithTheme />);