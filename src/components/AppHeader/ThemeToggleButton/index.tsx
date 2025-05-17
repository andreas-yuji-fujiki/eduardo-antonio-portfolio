// react
import { useEffect, useState } from "react";

// icons
import { FiMoon, FiSun } from "react-icons/fi";

// styles
import styles from "./ThemeToggleButton.module.scss";

export function ThemeToggleButton() {
  // theme state
  const [theme, setTheme] = useState<"dark" | "light">("light");

  // apply theme
  function applyTheme(theme: "dark" | "light") {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }

  // apply theme observer
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // toggle theme
  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <button className={styles.themeBtn} onClick={toggleTheme}>
      {theme === "dark" ? (
        <FiSun className={styles.icon} size="28px" color="#fff" />
      ) : (
        <FiMoon className={styles.icon} size="28px" color="#000" />
      )}
    </button>
  );
};