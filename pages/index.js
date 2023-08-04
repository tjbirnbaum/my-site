import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Menu from '@components/Menu'
import { poppinsReg } from '@components/Fonts'
import Link from 'next/link'
import HomeGallery from '@components/Main Gallery'

const bodyFont = {
  fontFamily: {poppinsReg},
  fontWeight: '[400]'
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <Header title="Photographer. Filmmaker. Professional goofball." />
        <div className='bodyContent'>
          <p className={bodyFont}>Hi there. I'm TJ: camera nerd, dad-joke enthusiast, and ardent purveyor of all things even remotely related to art."</p>
          <p className={bodyFont}>The best way to describe myself here is to simply say " + '"I make stuff." ' + "I am a photographer, filmmaker, and writer with a more-than-passing interest in design, art, and coding. And, instead of choosing to limit myself down to an unnessecary niche, I've chosen to build my entire business on being an all-around creative professional."</p>
          <p className={bodyFont}>So, I make stuff. What can I make for you?"</p>
        </div>
        <div id='buttons'>
          <button className='blueButton' href='/posts/playing_with_react'>What I'm up to</button>
          <button className='darkButton' href='/posts/playing_with_react'>What I'm up to</button>

         </div>
        <div className='bodyContent'>
          <HomeGallery />
        </div>
      
      </main>

      <Footer />
    </div>
  )
}
