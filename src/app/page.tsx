"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Card from "@/components/Card";
import { buscarHeroisHome } from "@/services/marvelApi";
import { insertFavorito } from "@/utils/favorite";

export default function Home() {
  const [herois, setHerois] = useState<any[]>([]);
  const [favoritos, setFavoritos] = useState<number[]>(() => {
    if (typeof window !== "undefined") {
      const savedFavoritos = localStorage.getItem("favoritos");
      return savedFavoritos ? JSON.parse(savedFavoritos) : [];
    }
    return [];
  });
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
  const [heroisFiltrados, setHeroisFiltrados] = useState<any[]>([]);
  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
  
    setHeroisFiltrados(() =>
      (mostrarFavoritos
        ? herois.filter((heroi) => favoritos.includes(heroi.id))
        : herois
      ).filter((heroi) => heroi.name.toLowerCase().includes(searchValue))
    );
  };

  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled((prev) => {
      const newToggleState = !prev;
            setHeroisFiltrados(() => {
        if (mostrarFavoritos) {
          if (newToggleState) {
            const heroisOrdenados = [...herois].sort((a, b) => a.name.localeCompare(b.name));
            return heroisOrdenados.filter((heroi) => favoritos.includes(heroi.id));
          } else {
            return herois.filter((heroi) => favoritos.includes(heroi.id));
          }
        } else {
          if (newToggleState) {
            return [...herois].sort((a, b) => a.name.localeCompare(b.name));
          } else {
            return herois;
          }
        }
      });
  
      return newToggleState;
    });
  };
  useEffect(() => {
    async function obterHerois() {
      const dados = await buscarHeroisHome();
      setHerois(dados);
      setHeroisFiltrados(dados);
    }
    obterHerois();
  }, []);
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

  return (
    <div>
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
        <div className={styles.searchInputContainer}>
            <Image
                src="/assets/busca/Lupa/Shape@1,5x.svg"
                alt="Logo do Grupo"
                width={20}
                height={20}
            />
            <input className={styles.searchInput} type="text" placeholder="Procure por herois" onChange={search}/>
        </div>
      </header>
      <main>
        <section className={styles.mainHeader}>
          <h3>
            Encontrados {heroisFiltrados.length} heróis
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
            <button
              onClick={handleToggle}
              className={styles.toggleButton}
              aria-label="Toggle Button"
              >
              {isToggled ? (
                  <Image
                  src="/assets/toggle/Group2.svg"
                  alt="Logo do Grupo"
                  layout="intrinsic"
                  width={60}
                  height={0}
              />
              ) : (
                  <Image
                  src="/assets/toggle/Group6.svg"
                  alt="Logo do Grupo"
                  layout="intrinsic"
                  width={60}
                  height={0}
              />
              )}
            </button>
            <div className={`${styles.mainFavoriteText} ${
                mostrarFavoritos ? styles.mainFavoriteTextActive : ""}`}
            onClick={() => {
              setMostrarFavoritos((prev) => {
                const newMostrarFavoritos = !prev;
                let updatedHerois = newMostrarFavoritos
                  ? herois.filter((heroi) => favoritos.includes(heroi.id))
                  : [...herois];
                if (isToggled) {
                  updatedHerois = updatedHerois.sort((a, b) => a.name.localeCompare(b.name));
                }
                setHeroisFiltrados(updatedHerois);
                return newMostrarFavoritos;
              });
            }}>
              <Image
                src="/assets/icones/heart/Path.svg"
                alt="coração"
                width={15}
                height={25}
              />
              Somente favoritos
            </div>
          </div>
        </section>
        <section className={styles.gridCards}>
        {heroisFiltrados.map((heroi) => (
            <Card
              key={heroi.id}
              heroId={heroi.id}
              heroName={heroi.name}
              heroImage={heroi.thumbnail.path + "." + heroi.thumbnail.extension}
              isFavorited={favoritos.includes(heroi.id)}
              onSelect={() => insertFavorito(heroi.id, setFavoritos)}
            />
          ))}
        </section>
      </main>
    </div>
    <footer id="footer"></footer>
    </div>
  );
}
