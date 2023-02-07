import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// import styles
import styles from '@/styles/Home.module.css'


// import Components
import Button from './components/button'


// import Images
import nuitEtoile from '../images/nuit-etoile.jpg'
import pontNeuf from '../images/pont-neuf.jpg'
import soleilLevant from '../images/soleil-levant.jpg'

export default function Home() {

  const [peintures, setPeintures] = useState([])

  const fetchPeintures = async () => {
    fetch('https://benadjal.butmmi.o2switch.site/api_resa_expo/tableaux').then((response) => {
      return response.json()
    }).then((data) => {
      setPeintures(data)
    })
  }

  useEffect(() => {
    fetchPeintures()
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className='hero'>
          <div className='hero-top'>
            <span className='display3'>Visite interactive</span>
            <span className='spacer'></span>
            <span className='display3'>Compatible casque VR</span>
          </div>
          <h1>Entrez au coeur de limpressionnisme</h1>
          <Button name="Rejoindre lexpérience" linkbtn="./billeterie"></Button>
        </section>
        <section className='home_infos'>
          <div className="home_infos_left">
            <h2>VISITEZ LE WORLD WIDE MUSEUM</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo voluptatem qui atque quam quaerat consequatur blanditiis hic vitae aperiam corporis provident, quo eum ullam veritatis eligendi eaque ex tempora placeat, unde, omnis maiores modi repudiandae quia. Similique, inventore incidunt in facilis nemo commodi suscipit fuga ipsum tempora excepturi ipsam omnis a aperiam? Laudantium numquam ad omnis officia ipsa magni debitis hic velit itaque corrupti cum, non unde adipisci nostrum maxime perspiciatis aliquid similique, dolorum officiis maiores inventore minima autem? Velit illum at maiores sed accusantium dolorum voluptate unde possimus quo magni commodi animi doloremque distinctio reiciendis, obcaecati magnam. Sint?</p>
          </div>
          <div className='home_infos_right'>
            <Image draggable="false" src={nuitEtoile} alt="" width={500} />
            <Image draggable="false" src={pontNeuf} alt="" width={500} />
            <Image draggable="false" src={soleilLevant} alt="" width={500} />
          </div>
        </section>
        <section>
          <h2>DÉCOUVRIR LES OEUVRES</h2>
          {
            peintures.map((peinture) => {
              return (
                <>
                  <Link href={`/tableau/${peinture.id_tableau}`} key={peinture.id_tableau}>
                    <h3>{peinture.nom_tableau}</h3>
                    <p>{peinture.nom_peintre}</p>
                  </Link>
                </>
              )
            })
          }
        </section>
      </main>
    </>
  )
}