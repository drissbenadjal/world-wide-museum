import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

// import Components
import BannerTop from "../components/banner_top";

// import Images
import soleilLevant from "../images/tableaux/soleilLevant.webp";

export default function Home() {
  const [peintres, setPeintres] = useState([]);
  const [peintures, setPeintures] = useState([]);
  const [loadingPeintre, setLoadingPeintre] = useState(true);
  const [loadingPeinture, setLoadingPeinture] = useState(true);

  const fetchPeintres = async () => {
    fetch("https://benadjal.butmmi.o2switch.site/api_resa_expo/peintres")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPeintres(data);
        setTimeout(() => {
          setLoadingPeintre(false);
        }, 500);
      });
  };

  const fetchPeintures = async () => {
    fetch("https://benadjal.butmmi.o2switch.site/api_resa_expo/tableaux")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPeintures(data);
        setTimeout(() => {
          setLoadingPeinture(false);
        }, 500);
      });
  };

  useEffect(() => {
    fetchPeintres();
  }, []);

  useEffect(() => {
    fetchPeintures();
  }, []);

  return (
    <>
      <Head>
        <title>Collection • Une Journée Impressionnante</title>
        <meta name="description" content="L'exposition immersive Une Journée Impressionnante vous permet via son site de réservation de découvrir un avant-goût des tableaux qu'elle met en avant ainsi que des artistes à l'honneur ! Une occasion de découvrir le mouvement impressionniste avant de vous créer des moments mémorables lors de votre visite." />
        <meta name="keywords" content="impressionnisme, impressionniste, expositions, expositions interractives, musées, musée, réalité virtuelle, casque VR, casque de réalité virtuelle, 3D, exposition 3D, exposition immersive, tableaux, van Gogh, peintures" />
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
        <BannerTop name="Découvrez notre collection" image={soleilLevant} />
        <div className="ariane">
          <Link href="/">Accueil</Link>
          <span> / </span>
          <Link href="/collection">Collection</Link>
        </div>
        <section className="collection_artists">
          <h2>Le choix des artistes</h2>
          <div className="collection_artists_list">
            {loadingPeintre ? (
              <>
                <div className="collection_artists_presentation">
                  <div className="skeleton collection_artists_presentation_image"></div>
                  <h3 className="skeleton"></h3>
                </div>
                <div className="collection_artists_presentation">
                  <div className="skeleton collection_artists_presentation_image"></div>
                  <h3 className="skeleton"></h3>
                </div>
                <div className="collection_artists_presentation">
                  <div className="skeleton collection_artists_presentation_image"></div>
                  <h3 className="skeleton"></h3>
                </div>
                <div className="collection_artists_presentation">
                  <div className="skeleton collection_artists_presentation_image"></div>
                  <h3 className="skeleton"></h3>
                </div>
              </>
            ) : (
              peintres.map((peintre) => {
                return (
                  <div
                    className="collection_artists_presentation"
                    key={peintre.id_peintre}
                  >
                    <Image
                      draggable="false"
                      src={`/images/peintres/${peintre.image_peintre}.webp`}
                      alt=""
                      width="200"
                      height="400"
                      className="collection_artists_presentation_image"
                    />
                    <h3>{peintre.nom_peintre}</h3>
                  </div>
                );
              })
            )}
          </div>
        </section>

        <section className="collection_paintings">
          <h2>Le choix des oeuvres</h2>
          <div className="collection_paintings_list">
            {loadingPeinture ? (
              <>
                <Link
                  href={`/`}
                  className="collection_paintings_list_element skeleton"
                >
                  <div className="collection_paintings_presentation">
                    <div className="skeleton collection_paintings_presentation_image"></div>
                    <div className="collection_paintings_presentation_txt">
                      <p className="skeleton"></p>
                      <h3 className="skeleton"></h3>
                      <span className="skeleton"></span>
                    </div>
                  </div>
                </Link>

                <Link
                  href={`/`}
                  className="collection_paintings_list_element skeleton"
                >
                  <div className="collection_paintings_presentation">
                    <div className="skeleton collection_paintings_presentation_image"></div>
                    <div className="collection_paintings_presentation_txt">
                      <p className="skeleton"></p>
                      <h3 className="skeleton"></h3>
                      <span className="skeleton"></span>
                    </div>
                  </div>
                </Link>

                <Link
                  href={`/`}
                  className="collection_paintings_list_element skeleton"
                >
                  <div className="collection_paintings_presentation">
                    <div className="skeleton collection_paintings_presentation_image"></div>
                    <div className="collection_paintings_presentation_txt">
                      <p className="skeleton"></p>
                      <h3 className="skeleton"></h3>
                      <span className="skeleton"></span>
                    </div>
                  </div>
                </Link>

                <Link
                  href={`/`}
                  className="collection_paintings_list_element skeleton"
                >
                  <div className="collection_paintings_presentation">
                    <div className="skeleton collection_paintings_presentation_image"></div>
                    <div className="collection_paintings_presentation_txt">
                      <p className="skeleton"></p>
                      <h3 className="skeleton"></h3>
                      <span className="skeleton"></span>
                    </div>
                  </div>
                </Link>

                <Link
                  href={`/`}
                  className="collection_paintings_list_element skeleton"
                >
                  <div className="collection_paintings_presentation">
                    <div className="skeleton collection_paintings_presentation_image"></div>
                    <div className="collection_paintings_presentation_txt">
                      <p className="skeleton"></p>
                      <h3 className="skeleton"></h3>
                      <span className="skeleton"></span>
                    </div>
                  </div>
                </Link>

                <Link
                  href={`/`}
                  className="collection_paintings_list_element skeleton"
                >
                  <div className="collection_paintings_presentation">
                    <div className="skeleton collection_paintings_presentation_image"></div>
                    <div className="collection_paintings_presentation_txt">
                      <p className="skeleton"></p>
                      <h3 className="skeleton"></h3>
                      <span className="skeleton"></span>
                    </div>
                  </div>
                </Link>
              </>
            ) : (
              peintures.map((peinture) => {
                return (
                  <Link
                    href={`/oeuvre?id=${peinture.id_tableau}`}
                    className="collection_paintings_list_element"
                    key={peinture.id_tableau}
                  >
                    <div
                      className="collection_paintings_presentation"
                      key={peinture.id_tableau}
                    >
                      <Image
                        draggable="false"
                        src={`/images/tableaux/${peinture.image_tableau}.webp`}
                        alt=""
                        width="400"
                        height="200"
                      />
                      <div className="collection_paintings_presentation_txt">
                        <p>{peinture.date_tableau.split("-")[0]}</p>
                        <h3>
                          {peinture.nom_peintre}, {peinture.nom_tableau}
                        </h3>
                        <span className="collection_paintings_presentation_more">
                          <span>En savoir plus </span>
                          <span className="collection_paintings_presentation_more_icon">
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </section>
      </main>
    </>
  );
}
