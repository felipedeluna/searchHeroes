import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <header className={styles.header}>
      <Image
        src="/assets/logo/Group@3x.png"
        alt="Logo do Grupo"
        layout="intrinsic"
        width={340}
        height={0}
      />
      <h1>EXPLORE O UNIVERSO</h1>
      <h5>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve</h5>
      <div id="searchInputContainer">
          <Image
            src="/assets/busca/Lupa/Shape@1,5x.svg"
            alt="Logo do Grupo"
            layout="intrinsic"
            width={20}
            height={0}
          />
        <input id="searchInput" type="text" placeholder="Procure por heróis"/>
      </div>
    </header>
  );
}
