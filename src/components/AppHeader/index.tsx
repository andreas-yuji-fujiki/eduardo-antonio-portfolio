// React
import { useEffect, useState } from "react";

// Icons
import { HiMenuAlt3 } from "react-icons/hi";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

// Styles
import styles from "./AppHeader.module.scss";

export function AppHeader() {
  const [themeBtnStyle, setThemeBtnStyle] = useState<"dark" | "light">("dark");

  function handleChangeTheme(theme: "dark" | "light") {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add("dark");
  }, []);

  return (
    <header className={styles.appHeaderWrapper}>
      {/* Title */}
      <h2>
        <a href="#home">edu.&lt;/&gt;</a>
      </h2>

      {/* Nav */}
      <div className={styles.buttons}>
        
        {/* desktop / tablet nav
        */}
        <nav>
          <a href="#home">
            <span>Home</span>
          </a>
          <a href="#projects">
            <span>Projects</span>
          </a>
          <a href="#tech">
            <span>Tech</span>
          </a>
          <a href="#hire-me" className={styles.highlited}>
            <span>Hire me!</span>
          </a>
        </nav>

        {/* Theme Toggle Button */}
        <button
          className={styles.themeBtn}
          onClick={() => {
            setThemeBtnStyle((prev) => {
              const newTheme = prev === "dark" ? "light" : "dark";
              handleChangeTheme(newTheme);
              return newTheme;
            });
          }}
        >
          {themeBtnStyle === "dark" ? (
            <FiSun className={styles.icon} size="28px" color="#fff" />
          ) : (
            <FiMoon className={styles.icon} size="28px" color="#000" />
          )}
        </button>

        {/* mobile nav - burger icon
        */}
        <button className={styles.mobileHamburguerBtn}>
          <HiMenuAlt3
            className={styles.icon}
            color="#fff"
            size="32px"
          />
        </button>
      </div>
    </header>
  );
}