"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import ToggleButton from "@/components/ToggleButton";
import Card from "@/components/Card";
import { buscarHerois } from "@/services/marvelApi";

export default function Home() {
  const [herois, setHerois] = useState<any[]>([]);
  const [favoritos, setFavoritos] = useState<any[]>([]);
  const [pesquisa, setPesquisa] = useState<string>("");

  // Busca inicial dos herois
  useEffect(() => {
    async function obterHerois() {
      const dados = await buscarHerois();
      setHerois(dados);
    }
    obterHerois();
  }, []);

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
        <h1>EXPLORE O UNIVERSO</h1>
        <h5>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve</h5>
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
        <section className={styles.mainHeader}>
          <h3>
            Encontrados {herois.length} heróis
          </h3>
          <div className={styles.mainToggle}>
            <div className={styles.mainToggleText}>
              <Image
                src="/assets/icones/heroi/noun_Superhero_2227044@1,5x.svg"
                alt="Logo do Grupo"
                width={15}
                height={25}
              />
              Ordenar por nome - A/Z
            </div>
            <ToggleButton/>
            <div className={styles.mainToggleText}>
              <Image
                src="/assets/icones/heart/Path.svg"
                alt="Logo do Grupo"
                width={15}
                height={25}
              />
              Somente favoritos
            </div>
          </div>
        </section>
        <section className={styles.gridCards}>

        {herois.map((heroi) => (
            <Card
              key={heroi.id}
              heroName={heroi.name}
              heroImage={heroi.thumbnail.path + "." + heroi.thumbnail.extension}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
