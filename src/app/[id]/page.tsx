"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'
import styles from "./page.module.css";
import { buscarHeroi } from "@/services/marvelApi";


export default function HeroPage() {
    const [heroi, setHeroi] = useState<any[]>([]);
    const [favoritos, setFavoritos] = useState<any[]>([]);

    const pathname = usePathname()
    const id = pathname

  // Busca inicial dos herois
    useEffect(() => {
    async function obterHerois() {
        const dados = await buscarHeroi(id as string);
        setHeroi(dados);
    }
    obterHerois();
    }, [id]);

    console.log(heroi)

    return (
    <div id="container">
        <header className={styles.header}>
        <Image
            src="/assets/logo/Group@3x.png"
            alt="Logo do Grupo"
            width={340}
            height={120}
            style={{ objectFit: "contain" }}
        />
        <div id="searchInputContainer">
            <Image
                src="/assets/busca/Lupa/Shape@1,5x.svg"
                alt="Logo do Grupo"
                width={20}
                height={20}
            />
            <input id="searchInput" type="text" placeholder="Procure por herois"/>
        </div>
        </header>
        <main>
        <div>
        <h1>{heroi[0]?.name}</h1>
        <p>{heroi[0]?.description}</p>
        </div>
        </main>
    </div>
    );
}