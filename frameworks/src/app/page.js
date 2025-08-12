import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.projectName}>Nome do Projeto</h1>
        <p className={styles.participants}>Participantes: </p>
      </div>
      <div className={styles.imageContainer}>
        <Link href="/rotas">Frameworks</Link>
        <Link href="/">Meta-Frameworks</Link>
        <Link href="/">Bibliotecas de estilos</Link>
        <Link href="/">Next.js</Link>

      </div>
      <div className={styles.titulo}>
      <h1>Tecnologias de mercados</h1>
      </div>
    </div>
  );
}
