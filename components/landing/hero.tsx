import styles from '../../custom-css/landing.module.css';

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.alignWrapper}>
                <p className={styles.tagline}>
                    Ideas into Prototypes. 20x faster using plain English.
                </p>
                <h1 className={styles.title}>Juliet</h1>
                <p className={styles.subtitle}>
                    your trusted advisor & star programmer
                </p>
            </div>
        </div>
    );
}