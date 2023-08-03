import styles from '@components/Header.module.css'
import { Poppins } from 'next/font/google'

export default function Header({ title }) {
  return <h1 style={Poppins} className={styles.title}>{title}</h1>
}

