import styles from '@components/Menu.module.css'

export default function Menu() {
    return (
        <div className={styles.menu}>
            <img src="" alt="TJ Birnbaum Multimedia"></img>
            <ul className={styles.menuList}>
                <li>About</li>
                <li>Thoughts</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}