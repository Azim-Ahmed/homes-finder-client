import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { UserContext } from './_app';
import Link from 'next/link';
import styles from '../styles/login.module.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import { server } from '../urlConfig';
import firebaseConfig from '../firebase.config';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Login = () => {
  const router = useRouter();
  const dashboardSection = '/dashboard/home';
  const loginSection = '/login';
  const [appData, setAppData, loggedIn, setLoggedIn] = useContext(UserContext);
  const [userData, setUserData] = useState({
    email: '',
    name: '',
  });
  const [adminEmails, setAdminEmails] = useState(null);
  const [loginError, setLoginError] = useState(false);
  const [admin, setAdmin] = useState(false);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect(async () => {
    let response = await fetch(`${server}/admin/getAllAdmins`);
    let responsed = await response.json();
    setAdminEmails(responsed.email);
  }, []);
  // console.log(adminEmails);

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(async function (result) {
        const { displayName, email } = await result.user;
        const loggedInUser = { name: displayName, email };
        setUserData({
          ...loggedInUser,
          name: displayName,
          email: email,
        });
        let adminEmail = adminEmails.filter(
          (data) => data.email == loggedInUser.email
        );
        // console.log(adminEmail);

        if (!adminEmail[0].email) {
          setAdmin(false);
          router.push(loginSection);
        }

        if (adminEmail[0].email) {
          setAdmin(true);
          router.push(dashboardSection);
        }
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const emails = error.email;
        const credential = error.credential;
        const errors = {
          credential,
          emails,
          errorMessage,
          errorCode,
        };
        if (errors) {
          setLoginError(true);
        }
      });
  };
  // console.log(loginError);

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
              <Image
                src="/favicon.png"
                width={300}
                height={100}
                alt="logo image"
                quality={100}
              />
            </a>
          </Link>
          <div className={styles.googleAuthSection}>
            <Button variant="outline-danger" onClick={handleGoogleSignIn}>
              Continue With google
            </Button>
            {loginError ? (
              <p className="text-danger mt-5">Access Denied/Restricted</p>
            ) : (
              ''
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
