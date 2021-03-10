import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wages Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Lets Learn together Next-js</h1>

      <footer className={styles.footer}></footer>
    </div>
  );
}
