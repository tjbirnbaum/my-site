import styles from '@components/Menu.module.css';
import Image from 'next/image';

export default function Menu() {
    return (
        <div className={styles.menu}>
            <Image src="C:\Users\TJ\Documents\GitHub\my-site\v2\images\TJ Birnbaum Multimedia Logo Tranparent-01 Wide.png" alt="TJ Birnbaum Multimedia" />
            <ul className={styles.menuList}>
                <li>About</li>
                <li>Thoughts</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}