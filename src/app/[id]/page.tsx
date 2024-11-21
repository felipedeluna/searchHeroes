"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import styles from "./page.module.css";
import { buscarHeroi, buscarQuadrinhosHeroi } from "@/services/marvelApi";
import { insertFavorito } from "@/utils/favorite";


export default function HeroPage() {
    const [heroi, setHeroi] = useState<any[]>([]);
    const [quadrinhosHeroi, setQuadrinhosHeroi] = useState<any[]>([]);
    const [favoritos, setFavoritos] = useState<number[]>(() => {
        if (typeof window !== "undefined") {
            const savedFavoritos = localStorage.getItem("favoritos");
            return savedFavoritos ? JSON.parse(savedFavoritos) : [];
        }
        return [];
    });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const pathname = usePathname()
    const id = pathname.split('/').pop();

    useEffect(() => {
    async function obterHeroi() {
        const dados = await buscarHeroi(id as string);
        setHeroi(dados);
    }
    obterHeroi();
    }, [id]);

    useEffect(() => {
    async function obterQuadrinhosHeroi() {
        const dados = await buscarQuadrinhosHeroi(id as string);
        setQuadrinhosHeroi(dados);
    }
    obterQuadrinhosHeroi();
    }, [id]);
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
        }
    }, [favoritos]);
    useEffect(() => {
        const savedFavoritos = localStorage.getItem("favoritos");
        if (savedFavoritos) {
            setFavoritos(JSON.parse(savedFavoritos));
        }
    }, []);
    
    function formatDate(dateString: string | undefined): string {
        if (!dateString) return " ";
        
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0"); // Obtém o dia com dois dígitos
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Obtém o mês (0-indexado, por isso +1)
        const year = date.getFullYear(); // Obtém o ano
        
        return `${day} / ${month} / ${year}`;
        }
    return (
    <div className={styles.backgroundHeroPage}>
    <div id="container">
        <header className={styles.header}>
        <Link href='/'>
        <Image
            src="/assets/logo/Group@3x.png"
            alt="Logo do Grupo"
            width={240}
            height={120}
            style={{ objectFit: "contain" }}
        />
        </Link>
        <div className={styles.searchInputContainer}>
            <Image
                src="/assets/busca/Lupa/Shape@1,5x.svg"
                alt="Logo do Grupo"
                width={20}
                height={20}
            />
            <input className={styles.searchInput} type="text" placeholder="Procure por herois"/>
        </div>
        </header>
        <main>
        <div className={styles.heroOverview}>
            <div className={styles.textBackgroundHeroOverview}>
                {heroi[0]?.name}
            </div> 
            <section className={styles.heroInformations}>
                <div className={styles.nameHero}>
                    <h1>{heroi[0]?.name}</h1>
                    <Image
                    src={
                        favoritos.includes(Number(id))
                            ? "/assets/icones/heart/Path.svg"
                            : isHovered
                            ? "/assets/icones/heart/Path Copy 7.svg"
                            : "/assets/icones/heart/PathCopy2@1,5x.svg"
                    }
                    alt="Logo do Grupo"
                    width={25}
                    height={25}
                    className={styles.favoriteIcon}
                    onClick={() => insertFavorito(Number(id), setFavoritos)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                </div>
                <p>{heroi[0]?.description}</p>
                <div className={styles.heroAppearances}>
                    <p>Quadrinhos</p>
                    <p>Filmes</p>
                    <div className={styles.heroAppearancesDiv}>
                        <Image
                        src="/assets/icones/book/Group@1,5x.svg"
                        alt="Logo do Grupo"
                        width={25}
                        height={25}/>
                        {heroi[0]?.comics.available ? heroi[0]?.comics.available : ' '}
                    </div>
                    <div className={styles.heroAppearancesDiv}>
                        <Image
                        src="/assets/icones/video/Shape@1,5x.svg"
                        alt="Logo do Grupo"
                        width={25}
                        height={25}/>
                        {heroi[0]?.series.available ? heroi[0]?.series.available : ' '}
                    </div>
                </div>
                <div>
                    Rating:
                    <Image
                        src="/assets/review/Group 4@1,5x.svg"
                        alt="rating"
                        width={80}
                        height={12}
                    />
                </div>
                <div>
                    Ultimo quadrinho: {formatDate(quadrinhosHeroi[0]?.modified)}
                </div>
            </section>
            <div className={styles.imageHeroOverview}>
                <Image
                    src={heroi[0]?.thumbnail?.path ? `${heroi[0].thumbnail.path}.jpg` : '/assets/card/hero.png'}
                    alt={heroi[0]?.name || 'Hero'}
                    width={400}
                    height={400}
                    style={{ objectFit: "contain" }}
                />
            </div>
            </div>
            <div>
                <h2>Ultimos quadrinhos</h2>
                <section className={styles.comicsSection}>
                {quadrinhosHeroi.map((quadrinho) => (
                    <div key={quadrinho.id}>
                        <Image
                            src={quadrinho?.thumbnail?.path ? `${quadrinho.thumbnail.path}.jpg` : '/assets/card/hero.png'}
                            alt={quadrinho?.name || 'Hero'}
                            width={150}
                            height={150}
                            style={{ objectFit: "contain" }}
                        />
                        {quadrinho.title}
                    </div>
                ))}
                </section>
            </div>
        </main>
    </div>
    <footer id="footer">
    </footer>
    </div>
    );
}