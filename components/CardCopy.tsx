"use client";

import { useState } from "react";
import styles from "@/components/css/cardLink.module.css";

interface CardCopyProps {
    title: string;
    value: string;
}

export default function CardCopy({ title, value }: CardCopyProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            className={`${styles.container} glass`}
            style={{
                cursor: "pointer",
                font: "inherit",
                appearance: "none",
                textAlign: "center"
            }}
        >
            <h2 className={styles.title} style={{ color: copied ? "var(--primary)" : "inherit" }}>
                {copied ? "¡Correo Copiado!" : title}
            </h2>
            <p className={styles.url}>{value}</p>
        </button>
    );
}
