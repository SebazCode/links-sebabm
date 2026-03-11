"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import styles from "./css/themeToggle.module.css";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`${styles.toggle} glass`}
            aria-label="Cambiar tema"
        >
            {theme === "dark" ? (
                <Moon size={20} className={styles.icon} />
            ) : (
                <Sun size={20} className={styles.icon} />
            )}
        </button>
    );
}
