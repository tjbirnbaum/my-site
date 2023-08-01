import Link from 'next/link';

export default function Button({buttonClass, buttonText, buttonLink}) {
    return <button className={buttonClass}>
                <Link href={buttonLink}>{buttonText}</Link>
            </button>
}