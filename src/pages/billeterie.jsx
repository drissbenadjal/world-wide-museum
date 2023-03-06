import { useState, useEffect, useRef } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Button from "../components/button";

// Import Images
import nuitEtoile from "../images/tableaux/nuitEtoile.webp";
import minusBtn from "../images/icons/minus__button.svg";
import plusBtn from "../images/icons/plus__button.svg";

export default function Home() {
  const [place, setPlace] = useState(1);
  const [textPlace, setTextPlace] = useState();

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
    // date_hour.current.addEventListener("input", (e) => {
    //   if (e.target.value == "") {
    //     e.target.nextElementSibling.innerHTML =
    //       "Veuillez sélectionner une heure";
    //   } else {
    //     e.target.nextElementSibling.innerHTML = "";
    //   }
    //   if (
    //     e.target.value != "10:00:00" &&
    //     e.target.value != "11:00:00" &&
    //     e.target.value != "12:00:00" &&
    //     e.target.value != "13:00:00" &&
    //     e.target.value != "14:00:00" &&
    //     e.target.value != "15:00:00" &&
    //     e.target.value != "16:00:00" &&
    //     e.target.value != "17:00:00"
    //   ) {
    //     e.target.nextElementSibling.innerHTML =
    //       "Veuillez sélectionner une heure valide";
    //   } else {
    //     e.target.nextElementSibling.innerHTML = "";
    //   }
    // });
  }, []);

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

    // if (
    //   e.target.value != "10:00:00" &&
    //   e.target.value != "11:00:00" &&
    //   e.target.value != "12:00:00" &&
    //   e.target.value != "13:00:00" &&
    //   e.target.value != "14:00:00" &&
    //   e.target.value != "15:00:00" &&
    //   e.target.value != "16:00:00" &&
    //   e.target.value != "17:00:00"
    // ) {
    //   setErrorMessage("Veuillez sélectionner une heure valide");
    //   return;
    // }

    const date_reservation =
      date_day.current.value + " " + date_hour.current.value;

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
        console.log(data);
        if (data.status === "success") {
          prenom_reservation.current.value = "";
          nom_reservation.current.value = "";
          email_reservation.current.value = "";
          console.log(data.message);
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="billeterie">
        <h1 className="display2 billeterie__head">
          Plus qu’une étape avant de rejoindre l’expérience...
        </h1>
        <div className="billeterie__content">
          <div className="billeterie__left">
            <Image
              draggable="false"
              src={nuitEtoile}
              className="billeterie_img"
              alt=""
              width="250"
              height="250"
            />
            <div>
              <h3>Nom de l&apos;exposition</h3>
              <div className="expo__date">Du 10 mars au 10 avril 2023</div>
              <div className="placeSelector">
                <button onClick={() => handleMinus()} id="minusBtn">
                  <Image
                    draggable="false"
                    src={minusBtn}
                    alt=""
                    width="33"
                    height="33"
                  />
                </button>
                <div className="place">
                  <span>{textPlace}</span>
                </div>
                <button onClick={() => handlePlus()} id="plusBtn">
                  <Image
                    draggable="false"
                    src={plusBtn}
                    alt=""
                    width="33"
                    height="33"
                  />
                </button>
              </div>
            </div>
          </div>
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
                    ref={date_day}
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
                  value={place}
                />
                {errorMessage ? <p className="error">{errorMessage}</p> : ""}
              </div>
            </div>
            <input
              type="submit"
              value="Confirmer la réservation"
              className="btn"
            />
          </form>
        </div>
      </main>
    </>
  );
}
