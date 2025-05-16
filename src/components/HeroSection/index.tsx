import { useEffect, useState } from 'react';
import styles from './HeroSection.module.scss';

export function HeroSection() {
  // inicia com null ou false, não acessa document ainda
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // só aqui tem acesso ao document (cliente)
    setIsDarkMode(document.body.classList.contains('dark'));

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains('dark'));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const filterStyle = {
    filter: 'invert(1) hue-rotate(180deg)',
    transition: 'filter 0.3s ease',
  };

  return (
    <div className={styles.heroSectionWrapper}>
      {/* informations */}
      <section className={styles.heroWrapper}>
        <img 
          src={
            isDarkMode 
              ? '/images/HeroSection/presentationLight.svg'  
              : '/images/HeroSection/presentationDark.svg'
          }
          alt="Presentation" 
        />
        
        <p style={{ color: isDarkMode ? 'white' : 'black' }}>
          An 18 years old brazilian ongoing 
          <br /> backend software engineer!
        </p>
      </section>
      
      {/* aside space shapes */}
      <img 
        src="/images/HeroSection/shape1.svg" 
        className={`${styles.shape} ${styles.shape1}`}
        style={!isDarkMode ? filterStyle : undefined}
      />
      
      <img 
        src="/images/HeroSection/shape2.svg" 
        className={`${styles.shape} ${styles.shape2}`}
        style={!isDarkMode ? filterStyle : undefined}
      />
    </div>
  );
}