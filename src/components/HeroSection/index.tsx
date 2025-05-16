/* Imports
*/
    // styles
    import styles from './HeroSection.module.scss'

export function HeroSection( ) {
    return (
        <section className={styles.heroWrapper}>
            <h1>
                <span>
                    Hello There
                </span>
                <span>
                    I'm Eduardo Antonio!
                </span>
            </h1>
        </section>
    );
};