import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

//image
import logo from "../images/logo.svg";
import logoBlue from "../images/logo_blue.svg";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>403 • Une Journée Impressionnante</title>
        <meta name="description" content="Il semblerait que vous soyez sur une page qui ne vous est pas autorisée... Naviguez sur le site de l'exposition Une Journée Impressionnante et découvrez ce que vous y retrouverez lors de votre visite !" />
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
      <main className="notfound">
        <div className="notfound__container">
          <div className="notfound__content">
            <Image src={logo} alt="" width={500} height={500} />
            <div className="notfound__text">
              <h1>403</h1>
              <h2>Désolé, l’accès est interdit</h2>
              <p> Cette page n’est pas autorisé aux internautes..</p>
              <Link href="/" className="link">
                Retour à la page d’accueil
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
