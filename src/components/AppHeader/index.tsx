// react 
import { useEffect, useState } from "react";

// components
import { ThemeToggleButton } from "./ThemeToggleButton";
import { MobileAppHeaderNav } from "./MobileAppHeaderNav";

// styles
import styles from "./AppHeader.module.scss";

export function AppHeader() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkTheme(document.body.classList.contains('dark'));
    };

    // Verifica o tema ao montar
    checkTheme();

    // Observa mudanças na class do <body>
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect(); // limpa ao desmontar
  }, []);

  return (
    <header 
      className={styles.AppHeaderWrapper} 
      style={{ backgroundColor: isDarkTheme ? 'black' : 'white' }}
    >
      <div className={styles.AppHeaderContainer}>
        {/* Title */}
        <h2>
          <a href="#home">edu.&lt;/&gt;</a>
        </h2>

        {/* Nav */}
        <div className={styles.buttons}>
          <nav>
            <a href="#home"><span>Home</span></a>
            <a href="#projects"><span>Projects</span></a>
            <a href="#tech"><span>Tech</span></a>
            <a href="#hire-me" className={styles.highlited}><span>Hire me!</span></a>
          </nav>

          {/* Theme Toggle Button */}
          <ThemeToggleButton />

          {/* Mobile Nav */}
          <MobileAppHeaderNav />
        </div>
      </div>
    </header>
  );
}