import styles from '@components/Header.module.css'
import { Poppins } from 'next/font/google'

const PoppinsBold = Poppins({
  weight: ['800'],
  subsets: ['latin'],
})

export default function Header({ title }) {
  return <h1 style={PoppinsBold.style} className={styles.title}>{title}</h1>
}

