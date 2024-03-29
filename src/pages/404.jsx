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
        <title>404 • Une Journée Impressionnante</title>
        <meta name="description" content="Il semblerait que vous soyez sur une page qui ne mène nulle part... Naviguez sur le site de l'exposition Une journée impressionnante et découvrez ce que vous y retrouverez lors de votre visite !" />
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
              <h1>404</h1>
              <h2>Désolé, il n’y a rien ici</h2>
              <p>
                {" "}
                La page que vous recherchez a peut-être été supprimée, son nom a
                changé ou est temporairement indisponible..
              </p>
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
