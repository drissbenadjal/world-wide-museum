import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {

  const [peintres, setPeintres] = useState([])

  const fetchPeintres = async () => {
    fetch('https://benadjal.butmmi.o2switch.site/api_resa_expo/peintres').then((response) => {
      return response.json()
    }).then((data) => {
      setPeintres(data)
    })
  }

  useEffect(() => {
    fetchPeintres()
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>LE CHOIX DES ARTISTES</h2>
      {
        peintres.map((peintre) => {
          return (
            <>
            <div key={peintre.id_peintre}>
              <h3>{peintre.nom_peintre}</h3>
              <p>{peintre.description_peintre}</p>
            </div>
            </>
          )
        })
      }
    </>
  )
}
