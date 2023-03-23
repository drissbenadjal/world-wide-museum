import Button from "../button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

//image
import logo from "../../images/logo.svg";
import logoBlue from "../../images/logo_blue.svg";

export const Mobilenavbar = () => {
  const router = useRouter();

  const burger = useRef(null);
  const burgerIcon = useRef(null);

  const handleBurger = () => {
    burger.current.classList.toggle("active");
    burgerIcon.current.classList.toggle("active");
  };

  return (
    <>
      <header className="burger" ref={burger}>
        <div className="top-header">
          <Link href="/">
            <Image src={logo} alt="accueil" width={44} height={44} />
          </Link>
          <button onClick={handleBurger}>
            <div className="burgerIcon" ref={burgerIcon}></div>
            <span className="sr-only">Menu de navigation</span>
          </button>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                href="/decouvrir"
                onClick={handleBurger}
                className={
                  router.pathname == "/decouvrir" ? "nav-active link" : "link"
                }
              >
                Découvrir
              </Link>
            </li>
            <li>
              <Link
                href="/collection"
                onClick={handleBurger}
                className={
                  router.pathname == "/collection" ? "nav-active link" : "link"
                }
              >
                Collection
              </Link>
            </li>
            <li>
              <Button linkBtn="/billeterie" onClick={handleBurger}>
                Billeterie
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
