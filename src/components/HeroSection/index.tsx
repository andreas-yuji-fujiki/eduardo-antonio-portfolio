/* Imports
*/
  // components
  import { CustomButton } from '../Global/CustomButton';
  import { SocialButtons } from './SocialButtons';

  // zustand theme store
  import { useThemeStore } from '@/stores/useThemeStore';

  // icons
  import { FaGithub } from "react-icons/fa";

  // styles
  import styles from './HeroSection.module.scss';

// hero section component
export function HeroSection() {
  // verify if dark mode is enabled
  const theme = useThemeStore((state) => state.theme);
  const isDarkMode = theme === 'dark';

  // invert white from images to be black and black to be white
  const filterStyle = {
    filter: 'invert(1) hue-rotate(180deg)',
    transition: 'all 0.4s ease',
  };

  return (
    <>
      <div className={styles.heroSectionWrapper}>
        {/* informations */}
        <section className={styles.heroWrapper}>

          {/* presentation title */}
          <h1 className={`${styles.presentationTitle}`}>
            <span className={styles.hiIm}>
              Hi, I'm
            </span>
            <span className={styles.name}>
              Eduardo <br />
              Antonio
            </span>
          </h1>

          {/* desktop / tablets description */}
          <p
            className={`${styles.descriptionParagraph}`}
          >
            <span className={styles.notVisibleOnMobile}>
              An 18 years old Brazilian <br />
            </span> 
            {' '}
            ongoing software engineer!
          </p>
        </section>

        <div className={styles.SocialButtonsContainer}>
          <CustomButton variant='default' icon={<FaGithub/>} >
            Take a look at Github
          </CustomButton>
          <SocialButtons ghVisible={false}/>
        </div>
      </div>

      {/* aside shapes */}
      <div className={styles.shapesContainer}>
        <div className={styles.shapeImageWrapper}>
          <img
            src="/images/HeroSection/shape1.svg"
            className={`${styles.shape} ${styles.shape1}`}
            style={isDarkMode ? undefined : filterStyle}
          />
        </div>

        <div className={styles.shapeImageWrapper}>
          <img
            src="/images/HeroSection/shape2.svg"
            className={`${styles.shape} ${styles.shape2}`}
            style={isDarkMode ? undefined : filterStyle}
          />
        </div>
      </div>
    </>
  );
}
