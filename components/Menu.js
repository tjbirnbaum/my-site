import styles from '@components/Menu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logoImage from "/images/TJ Birnbaum Multimedia Logo Tranparent-01 Wide.png"
import { Poppins } from 'next/font/google';

const PoppinsReg = Poppins({
    weight: ['500'],
    subsets: ['latin'],
  })

  const imageStyle = {
    objectFit: 'contain'
  }

  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  }

export default function Menu() {
    return (
        <div style={PoppinsReg.style} className={styles.menu}>
            <Image
            src={logoImage}
            width={150}
            height={50}
            style={imageStyle}
            alt="TJ Birnbaum Multimedia" />
            <ul className={styles.menuList}>
                <li className='styles.menuItem'><Link style={linkStyle} href='pages/about.js'>About</Link></li>
                <li className='styles.menuItem'><Link style={linkStyle} href='pages/blog.js'>Thoughts</Link></li>
                <li className='styles.menuItem'>Work</li>
                <li className='styles.menuItem'>Contact</li>
            </ul>
        </div>
    );
}