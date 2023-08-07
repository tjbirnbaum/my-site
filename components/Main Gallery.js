import panorama from 'images/arizona/Grand Canyon Pano.jpg'
import icon from 'images/cathedral/Baptistry_2.10.1.png'
import cactus from 'images/arizona/Arizona Cactus.jpg'
import saintPaul from 'images/cathedral/Saint Paul Panorama.jpg'
import he1 from 'images/weddings/Hannah and Ethan/Hannah and Ethan_1.1.1.png'
import eli1 from 'images/weddings/Portraits 4.jpg'
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
        <Image
        className={styles.imageWide}
        src={saintPaul} />
        <Image
        className={styles.imageMed}
        src={he1} />
        <Image
        className={styles.imageMed}
        src={eli1} />
        </div>
        
    );
}