import { useContext, useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { UserContext } from './_app';
import Link from 'next/link';
import styles from '../styles/login.module.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase.config';
import { useRouter } from 'next/router';

const Login = () => {
  const { appData, setAppData } = useContext(UserContext);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  useEffect(() => {
    localStorage.setItem('_increment', JSON.stringify(appData));
  }, []);
  const router = useRouter();
  const dashboardSection = 'dashboard/home';
  if (appData.email) {
    router.push(dashboardSection);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const loggedInUser = { name: displayName, email };
        setAppData(loggedInUser);
        window.store = loggedInUser;

        console.log(loggedInUser);
        console.log(appData);

        // if (typeof window !== 'undefined') {
        //   localStorage.setItem(data, loggedInUser);
        // }
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, email, credential, errorMessage);
      });
  };

  return (
    <Container>
      <Row className="my-5 text-center">
        <Col
          className={styles.authSection}
          md={{ span: 6, offset: 3 }}
          sm={{ span: 12 }}
        >
          <Link href="/">
            <a>
              {' '}
              <img
                className={`img-fluid mb-3 ${styles.authImage}`}
                src="https://i.ibb.co/FDtTyNF/house-8.jpg"
                alt="logo"
              />
            </a>
          </Link>
          <div className={styles.googleAuthSection}>
            <Button variant="outline-secondary" onClick={handleGoogleSignIn}>
              Continue With google
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
