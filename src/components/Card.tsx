import Image from "next/image";
import styles from "../app/page.module.css";

export default function Card(props:any){
    return (
        <div>
            <Image
                src={props.heroImage ?? "/assets/card/hero.png"}
                alt="Logo do Grupo"
                width={200}
                height={0}
                className={styles.imageCard}
            />
            <div className={styles.footerCard}>
                {props.heroName ?? 'nome do heroi'}
                <Image
                    src="/assets/icones/heart/PathCopy2@1,5x.svg"
                    alt="Logo do Grupo"
                    width={20}
                    height={20}
                    className={styles.favoriteIcon}
                />
            </div>
        </div>
    )
}
