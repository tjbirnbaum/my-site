import Link from 'next/link';
import styles from './Button.module.css'

export function BlueButton({buttonText, buttonLink}) {
    return (
        <button className={styles.blueButton}>
                    <Link href={buttonLink}>{buttonText}</Link>
                </button>
        );
    }

export function DarkBlueButton({buttonText, buttonLink}) {
    return (
    <button className={styles.darkButton}>
                <Link href={buttonLink}>{buttonText}</Link>
            </button>
    );
}