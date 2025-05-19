// icons
import { FiMoon, FiSun } from "react-icons/fi";

// theme zustand store & hook to apply the theme
import { useThemeStore } from "@/stores/useThemeStore";
import { useApplyUserTheme } from "@/hooks/useApplyUserTheme";

// styles
import styles from "./ThemeToggleButton.module.scss";

// theme toggle button component
export function ThemeToggleButton() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useApplyUserTheme(); // applying the class on document body

  return (
    <button className={styles.themeBtn} onClick={toggleTheme}>
      {theme === "dark" ? (
        <FiSun className={styles.icon} color="var(--elements-color)" />
      ) : (
        <FiMoon className={styles.icon} color="var(--elements-color)" />
      )}
    </button>
  );
}