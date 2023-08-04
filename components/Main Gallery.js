import panorama from 'images/arizona/Grand Canyon Pano.jpg'
import icon from 'images/cathedral/Baptistry_2.10.1.png'
import cactus from 'images/arizona/Arizona Cactus.jpg'
import Image from 'next/image';
import styles from '@components/Main Gallery.module.css'

export default function HomeGallery() {
    return (
        <div className={styles.spacedGallery}>
        <Image
        className={styles.imageWide}
        src={panorama} />
        <Image
        className={styles.imageMed}
        src={icon}
        />
        <Image
        className={styles.imageMed}
        src={icon}
        />
        <Image
        className={styles.imageWide}
        src={cactus} />
        </div>
    );
}