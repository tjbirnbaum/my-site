import Link from 'next/link';
import styles from './Button.module.css'

export function BlueButton({buttonText, buttonLink}) {
    return (
        <button className="blueButton">
                    <Link href={buttonLink}>{buttonText}</Link>
                </button>
        );
    }

export function DarkBlueButton({buttonText, buttonLink}) {
    return (
    <button className="darkButton">
                <Link href={buttonLink}>{buttonText}</Link>
            </button>
    );
}