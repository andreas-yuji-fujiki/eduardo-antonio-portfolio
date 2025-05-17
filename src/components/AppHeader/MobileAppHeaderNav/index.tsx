import { HiMenuAlt3 } from "react-icons/hi";
import styles from "./MobileAppHeaderNav.module.scss";

export function MobileAppHeaderNav() {
  return (
    <button className={styles.mobileHamburguerBtn}>
      <HiMenuAlt3 className={styles.icon} color="#fff" size="32px" />
    </button>
  );
}