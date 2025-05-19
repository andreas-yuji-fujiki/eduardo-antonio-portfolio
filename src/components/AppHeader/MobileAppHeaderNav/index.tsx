// icons
import { HiMenuAlt3 } from "react-icons/hi";

// styles
import styles from "./MobileAppHeaderNav.module.scss";

// mobile app header nav
export function MobileAppHeaderNav() {

  return (
    <button className={styles.mobileHamburguerBtn}>
      <HiMenuAlt3 
        className={styles.icon} 
        color="var(--elements-color)" />
    </button>
  );
}