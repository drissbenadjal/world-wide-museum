import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  let id = router.query.id;
  if (id === undefined) id = 1;

  const [oeuvre, setOeuvre] = useState(null);

  const ariane = useRef(null);
  const idOeuvre = useRef(null);

  const fetchOeuvre = async () => {
    await fetch(
      "https://benadjal.butmmi.o2switch.site/api_resa_expo/tableaux/" + id
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.tableau === undefined) router.push("/404");
        else {
          setOeuvre(data.tableau);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (!id) return;
    fetchOeuvre();
  }, [id]);

  return (
    <>
      <Head>
        <title>Oeuvre • Une Journée Impressionnante</title>
        <meta name="description" content="Découvrez-en détails les informations sur les tableaux présents lors de l'exposition Une Journée Impressionnante. Un résumé de leur histoire mais aussi de leur rôle dans l'évolution de l'artiste qui en est l'auteur. L'occasion d'en apprendre plus avant de découvrir notre exposition immersive." />
        <meta name="keywords" content="impressionnisme, impressionniste, expositions, expositions interractives, musées, musée, réalité virtuelle, casque VR, casque de réalité virtuelle, 3D, exposition 3D, exposition immersive, oeuvre, tableaux, art, van Gogh, nuit etoilée" />
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
      <main className="oeuvrepage">
        <div className="ariane">
          <Link href="/">Accueil</Link>
          <span> / </span>
          <Link href="/collection">Collection</Link>
          <span> / </span>
          <Link href={"/oeuvre?id=" + id} key={idOeuvre} ref={ariane}>
            {oeuvre && oeuvre.nom_tableau}
          </Link>
        </div>
        {!oeuvre && (
          <section className="oeuvrepage_infos">
            <div className="oeuvrepage_infos_titre">
              <h1 className="skeleton"></h1>
              <h2 className="skeleton"></h2>
            </div>
            <div className="oeuvrepage_infos_details">
              <div className="oeuvrepage_infos_details_image skeleton"></div>
              <div className="oeuvrepage_infos_details_txt skeleton">
                <p></p>
                <p></p>
              </div>
            </div>
          </section>
        )}
        {oeuvre && (
          <section className="oeuvrepage_infos">
            <div className="oeuvrepage_infos_titre">
              <h1>{oeuvre.nom_tableau}</h1>
              <h2>{oeuvre.nom_peintre}</h2>
            </div>
            <div className="oeuvrepage_infos_details">
              <div className="oeuvrepage_infos_details_image">
                <Image
                  draggable="false"
                  src={`/images/tableaux/${oeuvre.image_tableau}.webp`}
                  alt=""
                  width="400"
                  height="400"
                />
              </div>
              <div className="oeuvrepage_infos_details_txt">
                {oeuvre.description_tableau.split(".").map((item, index) => {
                  if (
                    index ===
                    oeuvre.description_tableau.split(".").length - 1
                  )
                    return <p key={index}>{item}</p>;
                  else return <p key={index}>{item}.</p>;
                })}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
