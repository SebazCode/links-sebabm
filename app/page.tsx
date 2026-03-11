import styles from "./page.module.css";
import ContainerCards from "@/components/ContainerCards";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <ThemeToggle />
      <main className={styles.main}>
        <ContainerCards />
        <Footer />
      </main>
    </div>
  );
}
