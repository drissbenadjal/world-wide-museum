import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

// import Components
import BannerTop from "../components/banner_top";

// import Images
import coucherDeSoleilEragny from "../images/tableaux/coucherDeSoleilEragny.webp";

export default function MentionsLegales() {
    return(
        <>
            <Head>
                <title>Mentions Légales • Une Journée Impressionnante</title>
                <meta name="description" content="Découvrez les conditions générales d'utilisation et les conditions générales de vente du site de réservation de votre exposition Une Journée Impressionnante." />
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
            <main className="mentionspage">
                <BannerTop name="Mentions Légales" image={coucherDeSoleilEragny} />
                <div className="ariane">
                    <Link href="/">Accueil</Link>
                    <span> / </span>
                    <Link href="/mentionslegales">Mentions Légales</Link>
                </div>
                <section className="mentionslegales_txt">
                    <h2>Conditions Générales d’Utilisation</h2>
                    <p>Les présentes conditions générales d’utilisation (CGU) ont pour objet l’encadrement juridique des modalités de mise à disposition du site et des services par Une Journée Impressionnante et de définir les conditions d’accès et d’utilisation des services par l’utilisateur. Les présentes CGU sont accessibles sur le site à la rubrique CGU.
                    <br /><br />
                    Toute inscription ou utilisation du site implique l’acceptation sans aucune réserve ni restriction des présentes CGU par l’utilisateur. Lors de l’inscription sur le site via le Formulaire d’inscription, chaque utilisateur accepte expressément les présentes CGU. En cas de non-acceptation des CGU stipulées dans le présent contrat, l’Utilisateur se doit de renoncer à l’accès des services proposés par notre site se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU.</p>

                    <h3>Mentions Légales</h3>
                    <h4>Editeur</h4>
                    <p>L’édition du site dayofimpressions.fr est assurée par l’association de loi 1901 Une Journée Impressionnante à but non lucratif (association déclarée à la préfecture de Melun sous le numéro W123456789).</p>
                    <ul>
                        <li><span>Président de l’exposition :</span> Driss Benadjal</li>
                        <li><span>Adresse email :</span> worlwidemuseum@gmail.com</li>
                        <li><span>Siège social :</span> 2 Rue Albert Einstein, 77420 Champs-sur-Marne</li>
                        <li><span>Numéro de téléphone :</span> 01 60 95 85 85</li>
                    </ul>

                    <h4>Hébergeur</h4>
                    <p>L’hébergeur du site dayofimpressions.fr est la société vercel.com</p>
                    <p><span>Siège social :</span> 340 S Lemon Ave #4133 Walnut, CA 91789.</p>

                    <h4>Habillage du site</h4>
                    <p>Création de l’habillage du site : Chaïma BENSABER</p>

                    <h3>Collecte de données</h3>
                    <p>Le site assure à l’Utilisateur une collecte et un traitement d’informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, modifiée par le RGPD au 25 mai 2014.<br />
                    En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l’Utilisateur dispose d’un droit d’accès, de rectification, de suppression, d’opposition et de portabilité de ses données personnelles. L’Utilisateur exerce ce droit </p>
                    <ul>
                        <li>par mail à l’adresse email worlwidemuseum@gmail.com ;</li>
                        <li>par courrier postal à l’adresse 2 Rue Albert Einstein, 77420 Champs-sur-Marne.</li>
                    </ul>
                    <ul>
                        <li><span>Délégué à la protection des données (DPO) :</span> Driss Benadjal</li>
                        <li><span>Adresse email :</span> worlwidemuseum@gmail.com</li>
                        <li><span>Adresse :</span> 2 Rue Albert Einstein, 77420 Champs-sur-Marne</li>
                    </ul>

                    <h3>Propriété intellectuelle</h3>
                    <p>Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l’objet d’une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d’auteur. L’Utilisateur doit solliciter l’autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s’engage à une utilisation des contenus du site dans un cadre strictement privé : toute utilisation à des fins commerciales et publicitaires est strictement interdite.
                    <br />
                    <br />
                    Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété intellectuelle.
                    <br />
                    Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source. Toute reproduction de ces images reste sous la responsabilité de l’Utilisateur.
                    Droits réservés : Claude Monet, Pierre Auguste Renoir, Camille PIssaro, Vincent Van Gogh
                    </p>
                    <br />
                    <br />
                    <p>Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site dayofimpressions.fr ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenu responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.</p>
                    <br /><br />
                    <p>Le site dayofimpressions.fr ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site. La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d’un tiers.</p>
                </section>
                <section className="cgv_txt">
                    <h2>Conditions Générales de Vente</h2>
                    <p>Les présentes conditions générales d’utilisation (CGU) ont pour objet l’encadrement juridique des modalités de mise à disposition du site et des services par Une Journée Impressionnante et de définir les conditions d’accès et d’utilisation des services par l’utilisateur.
                    <br /><br />
                    Toute utilisation du site implique l’acceptation sans aucune réserve ni restriction des présentes CGU par l’utilisateur. Lors de l’utilisation du site, chaque utilisateur accepte expressément les présentes CGU. En cas de non-acceptation des CGU stipulées dans le présent contrat, l’Utilisateur se doit de renoncer à l’accès des services proposés par le site. https://world-wide-museum.vercel.app/ se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU.</p>

                    <h3>Mentions Légales</h3>
                    <h4>Introduction</h4>
                    <p>Le présent document établit les conditions générales de vente (CGV) pour l’utilisation du site de réservation d’exposition gratuite https://world-wide-museum.vercel.app/. En accédant et en utilisant ce Site, vous acceptez ces CGV.</p>

                    <h4>Description du service</h4>
                    <p>Le Site permet aux utilisateurs de réserver une exposition gratuite pour leur entreprise, organisation ou événement. Les expositions peuvent être réservées pour une période de temps limitée.</p>

                    <h4>Conditions d’utilisation</h4>
                    <p>En utilisant le Site, vous acceptez de respecter toutes les lois et réglementations applicables. Vous ne pouvez pas utiliser le Site à des fins illégales ou pour perturber ou endommager le Site ou les serveurs qui hébergent le Site.</p>

                    <h4>Réservation d’exposition</h4>
                    <p>Pour réserver une exposition, vous devez fournir toutes les informations requises, notamment votre nom, votre entreprise/organisation, vos coordonnées et la période de temps souhaitée pour l’exposition. Toutes les réservations sont sujettes à disponibilité.</p>

                    <h4>Confirmation de la réservation</h4>
                    <p>Une fois que vous avez soumis votre demande de réservation, nous vous enverrons une confirmation par e-mail dans les plus brefs délais. La confirmation indiquera la période de temps réservée et toutes les informations pertinentes.</p>

                    <h4>Annulation de la réservation</h4>
                    <p>Si vous devez annuler votre réservation, vous devez nous en informer par e-mail dans les plus brefs délais. Nous ferons de notre mieux pour vous aider, mais nous ne pouvons pas garantir que nous pourrons annuler votre réservation en temps voulu.</p>

                    <h4>Responsabilités de l’utilisateur</h4>
                    <p>Vous êtes responsable de toutes les activités que vous effectuez sur le Site. Vous devez maintenir la confidentialité de vos informations de connexion et ne pas permettre à d’autres personnes d’utiliser votre compte. Vous êtes responsable de tout dommage causé par votre utilisation du Site.</p>

                    <h4>Propriété intellectuelle</h4>
                    <p>Le Site et son contenu, y compris les textes, images, graphismes, logos et autres éléments, sont protégés par des droits de propriété intellectuelle et sont la propriété du propriétaire du Site. Vous ne pouvez pas utiliser le contenu du Site sans notre autorisation préalable.</p>

                    <h4>Limitation de responsabilité</h4>
                    <p>Nous ne serons pas responsables de tout dommage indirect, spécial, accessoire, punitif, consécutif ou autre résultant de votre utilisation du Site ou de l’incapacité à utiliser le Site, même si nous avons été informés de la possibilité de tels dommages.</p>

                    <h4>Modification des CGV</h4>
                    <p>Nous nous réservons le droit de modifier ces CGV à tout moment. Si nous le faisons, nous vous en informerons en affichant les CGV mises à jour sur le Site. Votre utilisation continue du Site après la publication des CGV révisées signifie que vous acceptez les modifications.</p>

                    <h4>Loi applicable</h4>
                    <p>Ces CGV sont régies par les lois en vigueur dans votre pays de résidence ou d’activité, et tout litige découlant de ces CGV sera soumis aux tribunaux compétents de votre pays de résidence ou d’activité.</p>

                    <h4>Contact</h4>
                    <p>Si vous avez des questions ou des préoccupations concernant ces CGV ou le Site, veuillez nous contacter à l’adresse e-mail fournie sur le Site. Nous ferons de notre mieux pour vous répondre dans les plus brefs délais.</p>

                    <h4>Clause de non-renonciation</h4>
                    <p>Le fait de ne pas exercer ou de ne pas faire respecter un droit ou une disposition des présentes CGV ne constitue pas une renonciation à ce droit ou à cette disposition. Aucune renonciation à l’une des présentes CGV ne sera effective à moins qu’elle ne soit expressément stipulée comme telle.</p>

                    <h4>Divisibilité</h4>
                    <p>Si une disposition des présentes CGV est jugée invalide ou inapplicable, cette disposition sera limitée ou éliminée dans la mesure minimale nécessaire pour que les autres dispositions des présentes CGV restent en vigueur et effectives.</p>

                    <h4>Intégralité de l’accord</h4>
                    <p>Les présentes CGV constituent l’intégralité de l’accord entre vous et nous en ce qui concerne votre utilisation du Site et remplacent toutes les communications et propositions antérieures ou simultanées, qu’elles soient électroniques, orales ou écrites, entre vous et nous.</p>
                    <br /><br />
                    <p>Nous vous remercions d’avoir lu et accepté ces conditions générales de vente.</p>
                </section>
            </main>
        </>
    )
}