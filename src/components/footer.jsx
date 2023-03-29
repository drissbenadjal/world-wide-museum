import Image from "next/image";
import Link from "next/link";

//images
import logo from "../images/logo.svg";
import logoBlue from "../images/logo_blue.svg";
import twitterLogo from "../images/icons/twitter.svg";
import instagramLogo from "../images/icons/instagram.svg";
import tiktokLogo from "../images/icons/tiktok.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer_top">
          <div className="footer_part1">
            <Link href="/">
              <Image src={logo} alt="accueil" width={100} height={100} />
            </Link>
          </div>
          <div className="footer_part2">
            <h3>L’EXPOSITION</h3>
            <ul>
              <li>
                <Link href="/decouvrez" className="link">
                  Découvrez
                </Link>
              </li>
              <li>
                <Link href="/collection" className="link">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/billeterie" className="link">
                  Billeterie
                </Link>
              </li>
              <li>
                <Link
                  href="https://expo-interactive.vercel.app/"
                  className={"link"}
                  target="_blank"
                >
                  Expo Interactive
                </Link>
              </li>
              <li>
                <Link
                  href="https://worldwidemuseum.fr/"
                  className="link"
                  target={"_blank"}
                >
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_part3">
            <h3>SUIVEZ-NOUS</h3>
            <div className="reseaux">
              <ul>
                <li>
                  <Link href="https://twitter.com/worldwidemuseum?s=11&t=Yu-v5yMFavxVFCb-5VbH-w">
                    <Image
                      src={twitterLogo}
                      alt="Twitter"
                      width={40}
                      height={40}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com/worldwide.museum?igshid=YmMyMTA2M2Y=">
                    <Image
                      src={instagramLogo}
                      alt="Instagram"
                      width={50}
                      height={50}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.tiktok.com/@worldwidemuseum?is_from_webapp=1&sender_device=pc">
                    <Image
                      src={tiktokLogo}
                      alt="TikTok"
                      width={45}
                      height={45}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>
            <Link href="/mentionslegales" className="link">
              MENTIONS LEGALES{" "}
            </Link>
          </p>
          <p>@2023 - World Wide Museum</p>
        </div>
      </footer>
    </>
  );
}
