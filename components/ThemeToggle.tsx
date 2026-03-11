"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import styles from "./css/themeToggle.module.css";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        if (theme === "light") setTheme("dark");
        else if (theme === "dark") setTheme("system");
        else setTheme("light");
    };

    return (
        <button
            onClick={toggleTheme}
            className={`${styles.toggle} glass`}
            aria-label={`Cambiar tema (actual: ${theme})`}
        >
            {theme === "light" && <Sun size={20} className={styles.icon} />}
            {theme === "dark" && <Moon size={20} className={styles.icon} />}
            {theme === "system" && <Laptop size={20} className={styles.icon} />}
        </button>
    );
}
