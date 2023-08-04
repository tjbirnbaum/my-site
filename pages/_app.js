import '@styles/globals.css'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
 


function Application({ Component, pageProps }) {
  return (
  <main style={PoppinsReg.style}>
    <Component {...pageProps} />
  </main>
  );
}

export default Application
