import { useState, useEffect, useRef } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Button from "../components/button";
import { Popup } from "../components/Popup/Popup";

// Import Images
import nuitEtoile from "../images/tableaux/nuitEtoile.webp";
import minusBtn from "../images/icons/minus__button.svg";
import plusBtn from "../images/icons/plus__button.svg";

export default function Home() {
  const [place, setPlace] = useState(1);
  const [textPlace, setTextPlace] = useState();
  const [popup, setPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState();
  const [popupDate, setPopupDate] = useState();
  const [sendLoad, setSendLoad] = useState(false);

  const handlePlus = () => {
    if (place >= 10) {
      setPlace(10);
    } else {
      setPlace(place + 1);
    }
  };

  const handleMinus = () => {
    if (place <= 1) {
      setPlace(1);
    } else {
      setPlace(place - 1);
    }
  };

  useEffect(() => {
    if (place == 1) {
      setTextPlace(place + " place");
    } else {
      setTextPlace(place + " places");
    }
  }, [place]);

  const form = useRef();
  const prenom_reservation = useRef();
  const nom_reservation = useRef();
  const email_reservation = useRef();
  const place_reservation = useRef();
  const date_day = useRef();
  const date_hour = useRef();

  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // Form verification and error message
  useEffect(() => {
    prenom_reservation.current.addEventListener("input", (e) => {
      if (e.target.value.length < 2) {
        e.target.nextElementSibling.innerHTML =
          "Ce champ ne peut pas être vide";
      } else {
        e.target.nextElementSibling.innerHTML = "";
      }
    });
    nom_reservation.current.addEventListener("input", (e) => {
      if (e.target.value.length < 2) {
        e.target.nextElementSibling.innerHTML =
          "Ce champ ne peut pas être vide";
      } else {
        e.target.nextElementSibling.innerHTML = "";
      }
    });
    email_reservation.current.addEventListener("input", (e) => {
      if (!regex.test(e.target.value)) {
        e.target.nextElementSibling.innerHTML =
          "L'adresse email n'est pas valide";
      } else {
        e.target.nextElementSibling.innerHTML = "";
      }
    });
    date_day.current.addEventListener("input", (e) => {
      if (e.target.value == "") {
        e.target.nextElementSibling.innerHTML =
          "Veuillez sélectionner une date";
      } else {
        e.target.nextElementSibling.innerHTML = "";
      }
    });
  }, []);

  const today = new Date();
  const todayFormated = today.toISOString().split("T")[0];

  const startDate = new Date(2023, 2, 31);
  const startDateFormated = startDate.toISOString().split("T")[0];

  const endDate = new Date(2023, 3, 31);
  const endDateFormated = endDate.toISOString().split("T")[0];

  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //verifier que les champs sont remplis
    if (
      prenom_reservation.current.value.length < 2 ||
      nom_reservation.current.value.length < 2 ||
      !regex.test(email_reservation.current.value) ||
      date_day.current.value == "" ||
      date_hour.current.value == ""
    ) {
      setErrorMessage("Veuillez remplir tous les champs");
      return;
    }

    const date_reservation =
      date_day.current.value + " " + date_hour.current.value;

    setSendLoad(true);
    fetch("https://benadjal.butmmi.o2switch.site/api_resa_expo/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prenom_reservation: prenom_reservation.current.value,
        nom_reservation: nom_reservation.current.value,
        email_reservation: email_reservation.current.value,
        date_reservation: date_reservation,
        place_reservation: place_reservation.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          prenom_reservation.current.value = "";
          nom_reservation.current.value = "";
          email_reservation.current.value = "";
          setPopupMessage("Votre réservation a bien été confirmé");

          let hour = date_reservation.split(" ")[1];
          hour = hour.split(":")[0] + "h" + hour.split(":")[1];
          const optionsDate = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          };
          let Date_reservation = new Date(date_reservation);
          Date_reservation = Date_reservation.toLocaleDateString(
            "fr-FR",
            optionsDate
          );
          setPopupDate(Date_reservation + " à " + hour);
          setPopup(true);
        } else {
          setErrorMessage(data.message);
        }
        setSendLoad(false);
      })
      .catch((err) => console.log(err));
  };

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <>
      <Head>
        <title>Billeterie • Une Journée Impressionnante</title>
        <meta
          name="description"
          content="Réservez vite vos places pour l'exposition Une Journée Impressionnante, l'occasion de découvrir en famille, seul ou entre amis l'art impressionniste de manière originale et inédite à l'aide d'un casque VR ! Nous vous promettons des souvenirs inoubliables et mémorables. A bientôt chez Une Journée Impressionnante !"
        />
        <meta
          name="keywords"
          content="impressionnisme, impressionniste, expositions, expositions interractives, musées, musée, réalité virtuelle, casque VR, casque de réalité virtuelle, 3D, exposition 3D, exposition immersive, billeterie, places, réservation, réservation exposition, réservation musée, exposition gratuite"
        />
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
      <main className="billeterie">
        {popup && (
          <Popup
            popupDate={popupDate}
            message={popupMessage}
            onClick={() => closePopup()}
          />
        )}
        {sendLoad && <Popup type="load" />}
        <div className="ariane">
          <Link href="/">Accueil</Link>
          <span> / </span>
          <Link href="/billeterie">Billeterie</Link>
        </div>
        <h1 className="display2 billeterie__head">
          Plus qu’une étape avant de rejoindre l’expérience...
        </h1>
        <div className="billeterie__content">
          <div className="billeterie__left">
            <div className="billeterie__left-first">
              <Image
                draggable="false"
                src={nuitEtoile}
                className="billeterie_img"
                alt=""
                width="250"
                height="250"
              />
              <div className="billeterie__left_informations">
                <h2>Une Journée Impressionnante</h2>
                <div className="expo__date">
                  <p>Du 31 mars au 30 avril 2023</p>
                  <p className="expo__date_grey">Retrouvez nous de 10h à 18h</p>
                </div>
                <div className="placeSelector">
                  <button onClick={() => handleMinus()} id="minusBtn">
                    <Image
                      draggable="false"
                      src={minusBtn}
                      alt="retirer une place"
                      width="44"
                      height="44"
                    />
                  </button>
                  <div className="place">
                    <span>{textPlace}</span>
                  </div>
                  <button onClick={() => handlePlus()} id="plusBtn">
                    <Image
                      draggable="false"
                      src={plusBtn}
                      alt="ajouter une place"
                      width="44"
                      height="44"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="billeterie__left-second">
              <ul>
                <li>Adresse : 2 Rue Albert Einstein, 77420 Champs-sur-Marne</li>
                <li>Possibilité de réserver jusqu’à 10 places</li>
                <li>Temps de visite estimé : 30 minutes</li>
              </ul>
            </div>
          </div>
          <div className="billeterie__right">
            <form onSubmit={(e) => handleSubmit(e)} ref={form}>
              <div className="form_parts">
                <div className="form_part1">
                  <div className="field">
                    <label className="display3" htmlFor="prenom_reservation">
                      Prénom <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="prenom_reservation"
                      id="prenom_reservation"
                      placeholder="Saisissez votre prénom"
                      aria-required="true"
                      ref={prenom_reservation}
                    />
                    <small></small>
                  </div>
                  <div className="field">
                    <label className="display3" htmlFor="nom_reservation">
                      Nom <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="nom_reservation"
                      id="nom_reservation"
                      placeholder="Saisissez votre nom"
                      aria-required="true"
                      ref={nom_reservation}
                    />
                    <small></small>
                  </div>
                  <div className="field">
                    <label className="display3" htmlFor="email_reservation">
                      Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      name="email_reservation"
                      id="email_reservation"
                      placeholder="exemple@gmail.com"
                      aria-required="true"
                      ref={email_reservation}
                    />
                    <small></small>
                  </div>
                </div>
                <div className="form_part2">
                  <div className="field">
                    <label className="display3" htmlFor="date_day">
                      Date <span>*</span>
                    </label>
                    <input
                      type="date"
                      name="date_day"
                      id="date_day"
                      placeholder="Sélectionner une date"
                      aria-required="true"
                      ref={date_day}
                      min={
                        today > startDate ? todayFormated : startDateFormated
                      }
                      max={endDateFormated}
                    />
                    <small></small>
                  </div>
                  <div className="field">
                    <label className="display3" htmlFor="date_hour">
                      Horaire <span>*</span>
                    </label>
                    {/* <input type="date" name="date" id="date" placeholder="Sélectionner une date" /> */}
                    <select name="date_hour" id="date_hour" ref={date_hour}>
                      <option value="">Sélectionner un créneau</option>
                      <option value="10:00:00">10:00 - 11:00</option>
                      <option value="11:00:00">11:00 - 12:00</option>
                      <option value="12:00:00">12:00 - 13:00</option>
                      <option value="13:00:00">13:00 - 14:00</option>
                      <option value="14:00:00">14:00 - 15:00</option>
                      <option value="15:00:00">15:00 - 16:00</option>
                      <option value="16:00:00">16:00 - 17:00</option>
                      <option value="17:00:00">17:00 - 18:00</option>
                    </select>
                    <small></small>
                  </div>
                  <input
                    type="hidden"
                    ref={place_reservation}
                    name="place_reservation"
                    id="place_reservation"
                    aria-required="true"
                    value={place}
                  />
                  {errorMessage ? <p className="error">{errorMessage}</p> : ""}
                </div>
              </div>
              <div className="price">
                <div className="price_places">
                  <h3>Place(s)</h3>
                  <h3>0,00€</h3>
                </div>
                <div className="price_taxes">
                  <h3>Taxes</h3>
                  <h3>--</h3>
                </div>
                <div className="price_total">
                  <h3>Total</h3>
                  <h3>0,00€</h3>
                </div>
              </div>
              <div className="submit_reserv">
                <input
                  type="submit"
                  value="Confirmer la réservation"
                  className="btn"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
