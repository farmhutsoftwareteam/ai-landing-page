'use client';
import styles from '../../custom-css/landing.module.css';
import { VisionInput } from "../../components/ui/vision-input";
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [titleWidth, setTitleWidth] = useState(0);

    useEffect(() => {
        if (titleRef.current) {
            setTitleWidth(titleRef.current.offsetWidth);
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.alignWrapper}>
                <p className={styles.tagline}>
                    Ideas into Prototypes. 20x faster using plain English.
                </p>
                <h1 className={styles.title} ref={titleRef}>Juliet</h1>
                <p className={styles.subtitle}>
                    your trusted advisor & star programmer
                </p>

                <div style={{ width: titleWidth > 0 ? `${titleWidth}px` : '100%', marginTop: '8rem' }} className="mx-auto">
                    <VisionInput />
                </div>
            </div>
        </div>
    );
}