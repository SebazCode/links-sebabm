import Link from "next/link";
import styles from "./not-found.module.css";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <ThemeToggle />

            <main className={`${styles.content} glass`}>
                <h1 className={styles.errorNumber}>404</h1>
                <h2 className={styles.title}>Página no encontrada</h2>
                <p className={styles.description}>
                    El enlace que buscas ya no existe o ha sido movido :)
                </p>

                <Link href="/" className={styles.button}>
                    Volver al inicio
                </Link>
            </main>

            <Footer />
        </div>
    );
}
