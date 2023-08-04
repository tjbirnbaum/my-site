import { poppinsReg } from "./Fonts"
import styles from '@components/paragraph.module.css'

export default function Paragraph ({content}) {
    return (
        <p style={poppinsReg.style} className={styles.paragraph}>{content}</p>
    );
}