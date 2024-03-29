import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

// import Components
import Button from "../components/button";
import BannerTop from "../components/banner_top";

// import Images
import nuitEtoile from "../images/tableaux/nuitEtoile.webp";
import pontNeuf from "../images/tableaux/pontNeuf.webp";
import coucherDeSoleilEragny from "../images/tableaux/coucherDeSoleilEragny.webp";
import appVR from "../images/app.webp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Découvrez • Une Journée Impressionnante</title>
        <meta name="description" content="Découvrez tous les détails derrière l'exposition immersive et interractive Une journée Impressionnante, l'agence qui en est la créatrice World Wide Museum et l'idée derrière sa réalisation. Une exposition immersive disponible sur ordinateur et sur casque de réalité virtuelle afin que vous puisiez en profiter même de chez vous !" />
        <meta name="keywords" content="impressionnisme, impressionniste, expositions, expositions interractives, musées, musée, réalité virtuelle, casque VR, casque de réalité virtuelle, 3D, exposition 3D, exposition immersive, agence, agence d'art, agence art, visite " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./images/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon/favicon-32x32.png"
        />
        <link rel="manifest" href="./images/favicon/site.webmanifest" />
      </Head>
      <main>
        <BannerTop name="Une Journée Impressionnante" image={nuitEtoile} />
        <div className="ariane">
          <Link href="/">Accueil</Link>
          <span> / </span>
          <Link href="/decouvrez">Découvrez</Link>
        </div>

        <section className="discover_infos">
          <div className="discover_infos_left">
            <h2>Présentation de notre Projet</h2>
            <p>
              Bienvenue chez World Wide Museum ! Nous sommes une agence web
              composée de 6 professionnels passionnés par la création
              d’expositions interactives. Avec une équipe équilibrée de 3
              développeurs et 3 créatifs, nous sommes prêts à vous offrir une
              expérience inoubliable pour vos expositions sur un thème donné.{" "}
              <br />
            </p>
            <p>
              Notre objectif est de fournir des solutions innovantes aux
              professionnels du monde des musées et des expositions qui
              souhaitent intégrer les nouvelles technologies à leur travail.
              Nous croyons que les expositions interactives sont la prochaine
              étape de l’industrie des musées, et nous sommes prêts à vous aider
              à en faire une réalité.
            </p>
            <p>
              Une Journée Impressionnante est une de nos expositions et se
              déroule du 31 Mars au 30 Avril.
              <br />
              Cette exposition est sur le thème de l’impressionnisme et propose
              à ses visiteurs une expérience unique et immersive tout au long
              d’une journée à travers les différents tableaux.
            </p>
            <Link
              href="https://worldwidemuseum.fr"
              className="link"
              target={"_blank"}
              rel="noreferrer noopener"
            >
              Découvrez notre agence →
            </Link>
          </div>
          <div className="discover_infos_right">
            <Image
              draggable="false"
              src={pontNeuf}
              alt=""
              width="auto"
              height="auto"
            />
            <Image
              draggable="false"
              src={coucherDeSoleilEragny}
              alt=""
              width="auto"
              height="auto"
            />
          </div>
        </section>

        <section className="discover_app">
          <div className="discover_app_left">
            <Image
              draggable="false"
              src={appVR}
              alt=""
              width="auto"
              height="auto"
            />
          </div>
          <div className="discover_app_right">
            <h2>Application</h2>
            <p>
              Nous proposons à nos visiteurs de pénétrer notre exposition à travers un casque de réalité virtuel ou à via leurs ordinateurs.
            </p>
            <p>
              Découvrez Une Journée Impressionnante de chez vous, et profitez d’une expérience inédite sans vous déplacer.
            </p>
            <Button
              linkBtn="https://expo.dayofimpressions.fr/"
              target="_blank"
              rel="noreferrer noopener"
            >
              DECOUVRIR
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
