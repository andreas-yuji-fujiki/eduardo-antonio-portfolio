"use client";
/* Imports
*/
  // components
  import { AppHeader } from "@/components/AppHeader";
  import { HeroSection } from "@/components/HeroSection";

  // styles
  import styles from "./Page.module.scss";
import { CustomButton } from "@/components/Global/CustomButton";
import { FaHome } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Home( ) {
  return (
    <section className={styles.heroContainer} id="home">
      <AppHeader />
      <HeroSection />
    </section>
  );
}