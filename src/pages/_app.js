import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  //states of the app
  const [appData, setAppData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);

  return (
    <UserContext.Provider
      value={[appData, setAppData, loggedIn, setLoggedIn, admin, setAdmin]}
    >
      <ParallaxProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ParallaxProvider>
    </UserContext.Provider>
  );
}

export default MyApp;
