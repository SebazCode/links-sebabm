import styles from "@/components/css/cardLink.module.css";

export default function CardLinks({ title, url }: { title: string, url: string }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={`${styles.container} glass`}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.url}>{url}</p>
        </a>
    );
}