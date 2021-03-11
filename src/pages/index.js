import Head from "next/head";
import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import ContactUs from "../Components/ContactUs";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import ServicesFirst from "../Components/ServicesFirst";
import MapSection from "../Components/MapSection";
import styles from "../styles/Home.module.css";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Wages Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AboutUs />
      <ServicesFirst />
      <ContactUs />
      <MapSection />
      <Footer />
      <footer className={styles.footer}></footer>
    </Layout>
  );
}
