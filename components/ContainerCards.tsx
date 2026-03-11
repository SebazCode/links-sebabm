import styles from "@/components/css/containerCards.module.css";
import CardLinks from "@/components/CardLinks";

const data = [
    {
        title: "Portfolio",
        url: "https://sebabm.cl",
    },
    {
        title: "Instagram",
        url: "https://instagram.com/sebabm.dev",
    },
    {
        title: "LinkedIn",
        url: "linkedin.com/in/sebastián-ignacio-benavides-martinez-816017340",
    },
    {
        title: "GitHub",
        url: "https://github.com/SebazCode",
    }
]

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
            </div>
        </section>
    );
}