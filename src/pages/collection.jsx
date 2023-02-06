import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from './components/navbar'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <h1>Collection</h1>
      </main>
      <Footer />
    </>
  )
}
