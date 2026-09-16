import styles from "@/components/css/containerCards.module.css";
import CardLinks from "@/components/CardLinks";
import CardCopy from "@/components/CardCopy";

const data = [
    {
        title: "Portafolio",
        url: "https://sebabm.cl",
    },
    {
        title: "Instagram Fútbol",
        url: "https://instagram.com/sebabmfutbol",
    },
    {
        title: "BMencial",
        url: "https://instagram.com/bmencial",
    },
    {
        title: "TikTok Fútbol",
        url: "https://tiktok.com/@sebabmfutbol",
    },
    {
        title: "YouTube Fútbol",
        url: "https://youtube.com/@sebabmfutbol",
    },
];

export default function ContainerCards() {
    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Seba BM</h1>
                <p className={styles.description}>Desarrollador Fullstack | Estudiante de Ingeniería en Civil en Computación</p>
            </header>
            <div className={styles.linksList}>
                {data.map((item, index) => (
                    <CardLinks key={index} title={item.title} url={item.url} />
                ))}
                <CardCopy
                    title="Contáctame"
                    value="sebastian.benavides.m20@gmail.com"
                />
            </div>
        </section>
    );
}