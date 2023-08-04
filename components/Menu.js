import styles from '@components/Menu.module.css';
import Image from 'next/image';
import logoImage from "/images/TJ Birnbaum Multimedia Logo Tranparent-01 Wide.png"
import { Poppins } from 'next/font/google';

const PoppinsReg = Poppins({
    weight: ['400'],
    subsets: ['latin'],
  })

  const imageStyle = {
    objectFit: 'contain'
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
                <li>About</li>
                <li>Thoughts</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}