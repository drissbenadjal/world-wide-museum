import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// import styles
import styles from "@/styles/Home.module.css";

// import Components
import Button from "../components/button";

// import Images
import nuitEtoile from "../images/tableaux/nuitEtoile.webp";
import pontNeuf from "../images/tableaux/pontNeuf.webp";
import soleilLevant from "../images/tableaux/soleilLevant.webp";
import navHero from "../images/hero/nav__hero.webp";
import radialHero from "../images/hero/radial__hero.webp";

//import icons
import arrow from "../images/icons/arrow_white.svg";

export default function Home() {
  const [peintures, setPeintures] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPeintures = async () => {
    fetch("https://benadjal.butmmi.o2switch.site/api_resa_expo/tableaux")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPeintures(data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  };

  useEffect(() => {
    fetchPeintures();
  }, []);

  useEffect(() => {
    // Slider
    const gap = 32;

    const carouselContainer = document.querySelector(
      ".home__slider__container"
    );
    const carousel = document.querySelector(".home__slider");
    const next = document.querySelector(".home__slider__btn--right");
    const prev = document.querySelector(".home__slider__btn--left");

    next.addEventListener("click", (e) => {
      carouselContainer.scrollBy(width + gap, 0);
    });
    prev.addEventListener("click", (e) => {
      carouselContainer.scrollBy(-(width + gap), 0);
    });

    carouselContainer.addEventListener("scroll", () => {
      if (carouselContainer.scrollLeft != 0) {
        prev.disabled = false;
      } else {
        prev.disabled = true;
      }

      if (
        carouselContainer.offsetWidth + carouselContainer.scrollLeft >=
        carouselContainer.scrollWidth
      ) {
        next.disabled = true;
      } else {
        next.disabled = false;
      }
    });

    let width = carouselContainer.offsetWidth;
    window.addEventListener(
      "resize",
      (e) => (width = carouselContainer.offsetWidth)
    );
  });

  return (
    <>
      <Head>
        <title>Accueil • Une Journée Impressionnante</title>
        <meta name="description" content="Une Journée Impressionnante, l'exposition immersive sur le thème de l' l'impressionnisme à ne pas manquer ! Découvrez sur notre site de réservation les œuvres à retrouver, les informations essentielles, la réservation de vos places et bien plus encore. Rejoignez-nous vite et plongez au cœur d'une expérience inédite." />
        <meta name="keywords" content="impressionnisme, impressionniste, expositions, expositions interractives, musées, musée, réalité virtuelle, casque VR, casque de réalité virtuelle, 3D, exposition 3D, exposition immersive, agence, agence d'art, agence art, visite, exposition gratuite, exposition paris, oeuvre" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark"></meta>
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
        <section className="hero">
          <div className="hero-top">
            <span className="display3">Visite interactive</span>
            <span className="spacer"></span>
            <span className="display3">Compatible casque VR</span>
          </div>
          <h1>Entrez au cœur de l&apos;impressionnisme</h1>
          <Button linkBtn="/billeterie">Rejoindre l&apos;expérience</Button>
          <Image
            className="hero__bg"
            draggable="false"
            src={nuitEtoile}
            alt=""
            width="auto"
            height="auto"
          />
          <Image
            className="nav__hero"
            draggable="false"
            src={navHero}
            alt=""
            width="auto"
            height="auto"
          />
          <Image
            className="radial__hero"
            draggable="false"
            src={radialHero}
            alt=""
            width="auto"
            height="auto"
          />
        </section>
        <section className="home_infos">
          <div className="home_infos_left">
            <h2>VISITEZ UNE JOURNÉE IMPRESSIONNANTE</h2>
            <p>
              Une journée Impressionnante est une exposition sur le thème de
              l’impressionnisme durant laquelle le visiteur entre en immersion
              dans notre univers aux côtés des artistes les plus réputés du
              courant.
              <br />
              Du matin au soir, les jeux de lumière vous plongeront dans les
              tableaux et vous permettront de suivre le cours de notre journée
              impressionnante bercée par une bande-son créée pour sur mesure.
              <br />
              L’occasion idéale de vous retrouver en famille, entre amis et même
              en couple, afin de partager un moment privilégié au coeur du 19e
              siècle.
            </p>
          </div>
          <div className="home_infos_right">
            <Image
              draggable="false"
              src={nuitEtoile}
              alt=""
              width="auto"
              height="auto"
              className="nuitEtoile"
            />
            <Image
              draggable="false"
              src={pontNeuf}
              alt=""
              width="auto"
              height="auto"
              className="pontNeuf"
            />
            <Image
              draggable="false"
              src={soleilLevant}
              alt=""
              width="auto"
              height="auto"
              className="soleilLevant"
            />
          </div>
        </section>
        <section className="home_points">
          <div className="home_points_element">
            <div className="home_points_element_circle circle_one"></div>
            <h3>Une exposition éphémère</h3>
            <p>
              Seulement disponible du 31 Mars au 30 Avril, réservez vos billets
              rapidement et rendez-vous le temps d’un mois au coeur d’une
              expérience inoubliable.
            </p>
          </div>
          <div className="home_points_element">
            <div className="home_points_element_circle circle_two"></div>
            <h3>Au coeur de Champs-sur-marne</h3>
            <p>
              Retrouver notre exposition Une Journée Impressionnante en exclusivité au 2 rue Albert Einstein dans la ville de Champs-sur-Marne.{" "}
            </p>
          </div>
          <div className="home_points_element">
            <div className="home_points_element_circle circle_three"></div>
            <h3>Une expérience tout public</h3>
            <p>
              Notre exposition est accessible à tous, les plus grands comme les petits sont les bienvenus.{" "}
            </p>
          </div>
        </section>
        <section className="home_oeuvres">
          <h2>DÉCOUVRIR LES OEUVRES</h2>
          <div className="home__slider__wrapper">
            <div className="home__slider__container">
              <div className="home__slider">
                {
                  //si loading est true alors on affiche le skeleton
                  loading ? (
                    <>
                      <Link href={`/`} className="oeuvre-card skeleton"></Link>
                      <Link href={`/`} className="oeuvre-card skeleton"></Link>
                      <Link href={`/`} className="oeuvre-card skeleton"></Link>
                      <Link href={`/`} className="oeuvre-card skeleton"></Link>
                      <Link href={`/`} className="oeuvre-card skeleton"></Link>
                      <Link href={`/`} className="oeuvre-card skeleton"></Link>
                    </>
                  ) : (
                    peintures.map((peinture) => {
                      return (
                        <Link
                          href={`/oeuvre?id=${peinture.id_tableau}`}
                          key={peinture.id_tableau}
                          className="oeuvre-card"
                        >
                          <div className="oeuvre_infos">
                            <h3 className="display2">{peinture.nom_tableau}</h3>
                            <div className="spacer"></div>
                            <p className="display3">{peinture.nom_peintre}</p>
                          </div>
                          <Image
                            draggable="false"
                            src={`/images/tableaux/${peinture.image_tableau}.webp`}
                            alt=""
                            width="400"
                            height="400"
                          />
                        </Link>
                      );
                    })
                  )
                }
              </div>
            </div>
            <div className="home__slider__btns">
              <button className="home__slider__btn--left" disabled>
                <Image
                  draggable="false"
                  src={arrow}
                  alt=""
                  width="auto"
                  height="auto"
                />
              </button>
              <button className="home__slider__btn--right">
                <Image
                  draggable="false"
                  src={arrow}
                  alt=""
                  width="auto"
                  height="auto"
                />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
