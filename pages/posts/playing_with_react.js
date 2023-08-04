import Head from 'next/head'
import { poppinsReg } from '@components/Fonts'
import { poppinsBold } from '@components/Fonts'

export default function Post() {
    return (
    <div>
        <h1 style={poppinsBold.style}>I'm playing around with React today!</h1>
        <p style={poppinsReg.style} className='blogContent'>This here is a wonderful thing. React! Next.js! All these things, and so much more, being used for my own personal projects!</p>
    </div>    
    );
}