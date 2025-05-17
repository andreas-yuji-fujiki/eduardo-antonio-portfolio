// zustand theme store
import { useThemeStore } from '@/stores/useThemeStore';

// styles
import styles from './HeroSection.module.scss';

// hero section component
export function HeroSection() {

  // verify if dark mode is enabled
  const theme = useThemeStore((state) => state.theme);
  const isDarkMode = theme === "dark";

  // invert white from images to be black and black to be white
  const filterStyle = {
    filter: 'invert(1) hue-rotate(180deg)',
    transition: 'filter 0.3s ease',
  };

  return (
    <div className={styles.heroSectionWrapper}>
      {/* informations */}
      <section className={styles.heroWrapper}>
        <img 
          src={'/images/HeroSection/eduardoPresentation.svg'}
          style={ isDarkMode ? undefined : filterStyle}
          alt="Presentation" 
        />
        
        <p style={ { color: 'var(--text-color)' } }>
          An 18 years old brazilian ongoing 
          <br /> backend software engineer!
        </p>
      </section>
      
      {/* aside shapes */}
      <img 
        src="/images/HeroSection/shape1.svg" 
        className={`${styles.shape} ${styles.shape1}`}
        style={isDarkMode ? undefined : filterStyle}
      />
      
      <img 
        src="/images/HeroSection/shape2.svg" 
        className={`${styles.shape} ${styles.shape2}`}
        style={isDarkMode ? undefined : filterStyle}
      />
    </div>
  );
}