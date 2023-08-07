import Head from "next/head";
import Menu from "@components/Menu";
import Header from "@components/Header";
import { poppinsReg } from '@components/Fonts'

const bodyFont = {
  fontFamily: {poppinsReg},
  fontWeight: '[400]'
}

export default function Page() {
    return (

        <div className='container'>
            <Head>
                <title>"About"</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Menu />
                <Header title="About the guy with the camera" />
                <div className='bodyContent'>
                    <p className={bodyFont}>Hi there. I'm TJ. And I like making things.</p>
                    <p className={bodyFont}>I'm an unbelievably Minnesotan photographer 
                    and filmmaker, on a mission to share the joy of being <b>alive </b> 
                     with the rest of the world.</p>
                </div>    
            </main>
        </div>
    )
}