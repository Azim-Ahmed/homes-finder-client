import Head from 'next/head';
import { useContext, useEffect, useRef, useState } from 'react';
import { server } from '../urlConfig';
import AboutUs from '../Components/AboutUs';
import Banner from '../Components/Banner';
import ContactUs from '../Components/ContactUs';
import Header from '../Components/Header';
import Layout from '../Components/Layout';
import ServicesFirst from '../Components/ServicesFirst';
import MapSection from '../Components/MapSection';
import styles from '../styles/Home.module.css';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';
import { UserContext } from './_app';

export default function Home({ service }) {
  // const { appData, setAppData } = useContext(UserContext);
  const [backgorundAbout, setBackgroundAbout] = useState('PrimaryBackground');
  const navRef = useRef();
  navRef.current = backgorundAbout;

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundAbout('grayShade');
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles[navRef.current]}>
      <Head>
        <title>Vega Home</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Header />
        <Banner />
        <AboutUs />
        <ServicesFirst service={service} />
        <ContactUs />
        <MapSection />
        <Footer />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/services/getAllServices`);
  const service = await res.json();
  if (!service.service) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        service,
      },
      revalidate: 10,
    };
  }
};
