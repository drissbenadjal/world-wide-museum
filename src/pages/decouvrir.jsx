import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

// import Components
import Button from '../components/button'
import BannerTop from '../components/banner_top'

// import Images
import nuitEtoile from '../images/nuit-etoile.jpg'
import appVR from '../images/app.webp'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BannerTop name="WORLD WIDE MUSEUM" image={nuitEtoile} />
        <section className="discover_infos">
          <div className="discover_infos_left">
            <h2>Présentation du Projet</h2>
          </div>
          <div className="discover_infos_right">
            <p>Lorem ipsum dolor sit amet. Est rerum vero qui sequi nobis sed fugiat ratione. Et quia repellat aut mollitia neque aut accusamus ullam sit voluptas distinctio non accusantium dolor qui perferendis dolorem ea sint nihil.</p>
            <p>Eos incidunt placeat est aliquam sapiente quo ullam enim est animi minima ut deleniti voluptatem est vitae galisum non maxime omnis. Ut nostrum repellat sit nobis quia est adipisci voluptatem ab maiores eligendi aut molestiae reiciendis in atque quaerat quo omnis velit!</p>
          </div>
        </section>

        <section className="discover_univers">
          <h2>Notre univers</h2>
          <div className="discover_univers_contenu">
            <div className="discover_univers_contenu_left">
              <h3>La naissance de lidée</h3>
              <p>Lorem ipsum dolor sit amet. Est rerum vero qui sequi nobis sed fugiat ratione. Et quia repellat aut mollitia neque aut accusamus ullam sit voluptas.</p>
              <p>Lorem ipsum dolor sit amet. Est rerum vero qui sequi nobis sed fugiat ratione. Et quia repellat aut mollitia neque aut accusamus ullam sit voluptas.</p>
            </div>
            <div className="discovers_univers_contenu_right">
              <h3>Notre univers</h3>
              <p>Lorem ipsum dolor sit amet. Est rerum vero qui sequi nobis sed fugiat ratione. Et quia repellat aut mollitia neque aut accusamus ullam sit voluptas.</p>
              <p>Lorem ipsum dolor sit amet. Est rerum vero qui sequi nobis sed fugiat ratione. Et quia repellat aut mollitia neque aut accusamus ullam sit voluptas.</p>
            </div>
          </div>
        </section>

        <section className="discover_app">
          <div className="discover_app_left">
            <Image draggable="false" src={appVR} alt="" width="auto" height="auto" />
          </div>
          <div className="discover_app_right">
            <h2>Application</h2>
            <p>Lorem ipsum dolor sit amet. Est rerum vero qui sequi nobis sed fugiat ratione. Et quia repellat aut mollitia neque aut accusamus ullam sit voluptas.</p>
            <p>Lorem ipsum dolor sit amet. Est rerum vero qui sequi nobis sed fugiat ratione. Et quia repellat aut mollitia neque aut accusamus ullam sit voluptas.</p>
            <Button name="DECOUVRIR" linkbtn="/"></Button>
          </div>
        </section>
      </main>
    </>
  )
}
