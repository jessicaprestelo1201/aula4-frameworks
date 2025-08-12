import Link from "next/link";
import styles from "./rotas.module.css";

export default function Framewoek() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-vindo à Página de Frameworks</h1>
      <Link href="/">Voltar para o inicio</Link>
      <p className={styles.description}>
        Entenda sobre os frameworks
      </p>
      <div className={styles.topics}>
        <div className={styles.topico1}>Tópico 1: Reactewarsextdrcyftuyvghkbjklnedrtyibuonipmok,lsedrftgyuhoipopl</div>
        <div className={styles.topico2}>Tópico 2: Angula\zexrctvygbhunjmkl,ç.r</div>
        <div className={styles.topico3}>Tópico 3: Vue.js~qawerftgyuijkopl´ç</div>
        <div className={styles.topico4}>Tópico 4: Svelteawerftgyujikplç´~wsedrftgyhujikolsedrftgyhuji</div>
        <div className={styles.topico5}>Tópico 5: Ember.jsqwertgyhujiedrftgyujiokedrftgyuji</div>
      </div>
    
     
    </div>
  );
}
