import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <header className={styles.header}>
      <Image
        src="/assets/logo/Group@3x.png" // Caminho da imagem no diretório `public/`
        alt="Logo do Grupo" // Texto alternativo obrigatório
        layout="intrinsic"
        width={340}
        height={0} // Ajusta o tamanho com base nas dimensões reais da imagem
      />
      <h1>EXPLORE O UNIVERSO</h1>
      <h5>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve</h5>
    </header>
  );
}
