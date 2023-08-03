import Link from 'next/link';
import styles from './Button.module.css'

export default function Button({buttonClass, buttonText, buttonLink}) {
    return <button className={styles.buttonClass}>
                <Link href={buttonLink}>{buttonText}</Link>
            </button>
}