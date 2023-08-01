import '@styles/globals.css'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
 
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

function Application({ Component, pageProps }) {
  return <><Component {...pageProps} />
  <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style></>
}

export default Application
