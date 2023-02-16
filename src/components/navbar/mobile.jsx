import Button from "../button"
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useRef } from "react";

export const Mobilenavbar = () => {

    const router = useRouter();

    const burger = useRef(null);

    const handleBurger = () => {
        burger.current.classList.toggle('active');
    }


    return (
        <>
            <header className="burger" ref={burger}>
                <div className="top-header">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={100} height={100} />
                    </Link>
                    <button onClick={handleBurger}>Burger</button>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link href="/decouvrir" className={router.pathname == "/decouvrir" ? "nav-active link" : "link"}>Découvrir</Link>
                        </li>
                        <li>
                            <Link href="/collection" className={router.pathname == "/collection" ? "nav-active link" : "link"}>Collection</Link>
                        </li>
                        <li>
                            <Button linkbtn='/billeterie'>Billeterie</Button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )

}