import Head from 'next/head';
import { useContext, useEffect } from 'react';
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
  const { appData, setAppData } = useContext(UserContext);
  // useEffect(() => {
  //   const data = window.localStorage.getItem('data');
  //   //const deta = JSON.parse(data);
  //   console.log({ data });
  // }, []);
  console.log(service.service);
  if (!service.service.length) {
    return <Loader />;
  }
  return (
    <div>
      <Head>
        <title>Vega Home</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header appData={appData} />
      <Banner />
      <AboutUs />
      <ServicesFirst service={service} />
      <ContactUs />
      <MapSection />
      <Footer />
      <footer className={styles.footer}></footer>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch('http://localhost:2000/api/services/getAllServices');
  const service = await res.json();
  if (!service) {
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
