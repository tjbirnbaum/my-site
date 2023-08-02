import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@components/Button'
import Link from 'next/link'
import GalleryImage from "https://framer.com/m/Gallery-Image-7amP.js@cPePk6baE4FHXe4FNxbI"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Photographer. Filmmaker. Professional goofball." />
        <p className="description">Hi there. I'm TJ: camera nerd, dad-joke enthusiast, and ardent purveyor of all things even remotely related to art.</p>
        <p className="description">The best way to describe myself here is to simply say "I make stuff." 
        I'm a photographer, filmmaker, and writer with a more-than-passing interest in design, art, and coding. 
        And, instead of choosing to limit myself down to an unnessecary niche, 
        I've chosen to build my entire business on being an all-around creative professional.</p>
        <p className="description">So, I make stuff. What can I make for you?</p>
        <Button buttonClass="variant1" buttonLink='/posts/playing_with_react' buttonText="See my past work" />
        <Button buttonClass="variant2" buttonLink='/posts/playing_with_react' buttonText="Contact me" />
        <GalleryImage />
      
      </main>

      <Footer />
    </div>
  )
}
