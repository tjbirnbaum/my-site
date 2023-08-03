import '@styles/globals.css'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
 
const PoppinsReg = Poppins({
  weight: ['400'],
  subsets: ['latin'],
})

function Application({ Component, pageProps }) {
  return (
  <main style={PoppinsReg.style}>
    <Component {...pageProps} />
  </main>
  );
}

export default Application
