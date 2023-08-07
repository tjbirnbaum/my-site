import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Menu from '@components/Menu'
import { poppinsReg } from '@components/Fonts'
import Link from 'next/link'

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
        <Header title="Welcome to my digital garden" />
        <div className='bodyContent'>
          <p className={bodyFont}>
          Outside of my life behind the camera, I find myself exploring a billion different subjects,
          reading and practicing countless things that interest my ever-wandering mind.</p>
          <p className='bodyContent'>Because of this, a straightforward blog won't cut it.
          Besides, the standard blog layout of weekly marketing posts is boring, anyway.
          </p>
          <p className='bodyContent'>Enter: <b>the digital garden.</b> Like a blog,
          but way more esoteric. And also way more fun. <Link href={pages/posts/digital_gardening.mdx}>Check it out!</Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
