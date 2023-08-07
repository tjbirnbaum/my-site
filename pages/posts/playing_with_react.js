import Head from 'next/head'
import Menu from '@components/Menu';
import Header from '@components/Header';
import { poppinsReg } from '@components/Fonts'
import { poppinsBold } from '@components/Fonts'

export default function Post() {
    return (

    <div className='container'>
        <Head>
            <title>"Playing with React"</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
        <Menu />
        <Header title="Playing around with React" />
            <div className='bodyContent'>
                <p style={poppinsReg.style} className='blogContent'>This here is a wonderful thing. React! Next.js! All these things, and so much more, being used for my own personal projects!</p>
            </div>
        </main>
    </div>    
    );
}