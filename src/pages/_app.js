import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Head from 'next/head';

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  //states of the app
  const [appData, setAppData] = useState({});

  return (
    <UserContext.Provider value={{ appData, setAppData }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
