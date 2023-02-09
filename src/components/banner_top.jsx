import Image from 'next/image'

export default function BannerTop(props) {
    return (
        <section className="banner__top">
            <Image draggable="false" src={props.image} alt="" width="auto" height="auto" />
            <h1>{props.name}</h1>
        </section>
    )
}