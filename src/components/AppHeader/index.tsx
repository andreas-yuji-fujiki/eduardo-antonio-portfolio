// components
import { ThemeToggleButton } from "./ThemeToggleButton";
import { MobileAppHeaderNav } from "./MobileAppHeaderNav";

// styles
import styles from "./AppHeader.module.scss";

// app header component
export function AppHeader() {
  
  return (
    <header 
    className={styles.AppHeaderWrapper} 
    style={{ backgroundColor: 'var(--background-color)' }}
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