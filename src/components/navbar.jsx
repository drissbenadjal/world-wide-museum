import Button from "./button"
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from 'next/router';

export default function NavBar() {

    const router = useRouter();

    return (
        <>
            <header>
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={100} height={100} />
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link href="/decouvrir" className={router.pathname == "/decouvrir" ? "nav-active link" : "link"}>Découvrir</Link>
                        </li>
                        <li>
                            <Link href="/collection" className={router.pathname == "/collection" ? "nav-active link" : "link"}>Collection</Link>
                        </li>
                        <li>
                            <Button name='Billeterie' linkbtn='/billeterie'></Button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}