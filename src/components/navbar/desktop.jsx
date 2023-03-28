import Button from "../button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

//image
import logo from "../../images/logo.svg";
import logoBlue from "../../images/logo_blue.svg";

export const Desktopnavbar = () => {
  const router = useRouter();

  useEffect(() => {
    //verifier quand on scroll si on est sur la page
    document.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        document.querySelector("header").classList.add("nav-scroll");
      } else {
        document.querySelector("header").classList.remove("nav-scroll");
      }
    });
  }, []);

  return (
    <>
      <header>
        <Link href="/">
          <Image src={logo} alt="accueil" width={44} height={44} />
        </Link>
        <nav>
          <ul>
            <li>
              <Link
                href="/decouvrir"
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
                className={
                  router.pathname == "/collection" ? "nav-active link" : "link"
                }
              >
                Collection
              </Link>
            </li>
            <li>
              <Link
                href="https://expo-interactive.vercel.app/"
                className={"link"}
              >
                Expo Interactive
              </Link>
            </li>
            <li>
              <Button linkBtn="/billeterie">Billeterie</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
