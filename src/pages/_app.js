import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import SEO from '../Components/SEO';

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
      <SEO
        name="description"
        content="A homes-finder App where people can purchase and get some advantages with low or free of cost."
      />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
