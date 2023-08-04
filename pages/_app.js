import '@styles/globals.css'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
 
const poppinsReg = Poppins({
  weight: ['400'],
  subsets: ['latin'],
});

function Application({ Component, pageProps }) {
  return (
  <main style={poppinsReg.style}>
    <Component {...pageProps} />
  </main>
  );
}

export default Application
