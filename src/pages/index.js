import Head from "next/head";
import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import ContactUs from "../Components/ContactUs";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import ServicesFirst from "../Components/ServicesFirst";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Wages Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <AboutUs />
      {/* <ServicesFirst /> */}
      <ContactUs />

      <footer className={styles.footer}></footer>
    </Layout>
  );
}
