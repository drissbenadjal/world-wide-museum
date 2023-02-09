import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer_top">
                    <div className="footer_part1">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={100} height={100} />
                    </Link>
                    </div>
                    <div className="footer_part2">
                        <h3>LEXPOSITION</h3>
                        <ul>
                            <li>
                                <Link href="/collection" className="link">Collection</Link>
                            </li>
                            <li>
                                <Link href="/billeterie" className="link">Billeterie</Link>
                            </li>
                            <li>
                                <Link href="/faq" className="link">FAQ</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="link">Contactez-nous</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_part3">
                        <h3>SUIVEZ-NOUS</h3>
                        <div className="reseaux">
                            <ul>
                                <li>
                                    <Link href="/">
                                        <Image src="/instagram.png" alt="logo" width={100} height={100} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <Image src="/tiktok.png" alt="logo" width={100} height={100} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <Image src="/twitter.png" alt="logo" width={100} height={100} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p>
                        <Link href="/mentionslegales" className="link">MENTIONS LEGALES </Link>
                    </p>
                    <p>@2023 - World Wide Museum</p>
                </div>
            </footer>
        </>
    )
}