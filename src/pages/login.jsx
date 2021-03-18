import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { UserContext } from './_app';
import Link from 'next/link';
import styles from '../styles/login.module.css';
import firebase from 'firebase/app';
import 'firebase/auth';
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
  const [admin, setAdmin] = useState(false);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect(async () => {
    let response = await fetch('http://localhost:2000/api/admin/getAllAdmins');
    response = await response.json();
    setAdminEmails(response.email);
  }, []);
  console.log(adminEmails);

  // localStorage.setItem('_increment', JSON.stringify(appData));
  // }, []);

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(async function (result) {
        const { displayName, email } = await result.user;
        const loggedInUser = { name: displayName, email };
        //localStorage.setItem('data', loggedInUser);
        setUserData({
          ...loggedInUser,
          name: displayName,
          email: email,
        });
        //localStorage.setItem('data', loggedInUser);
        // window.store = loggedInUser;

        console.log(loggedInUser);
        console.log(userData);
        let adminEmail = adminEmails.filter(
          (data) => data.email == loggedInUser.email
        );
        console.log(adminEmail);

        if (!adminEmail[0].email) {
          setAdmin(false);
          router.push(loginSection);
        }

        if (adminEmail[0].email) {
          setAdmin(true);
          router.push(dashboardSection);
        }

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
              <Image
                src="/favicon.png"
                width={300}
                height={100}
                alt="logo image"
              />
            </a>
          </Link>
          <div className={styles.googleAuthSection}>
            <Button variant="outline-danger" onClick={handleGoogleSignIn}>
              Continue With google
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

// export async function getServerSideProps() {
//   const res = await fetch('');
//   const getAdminEmail = await res.json();

//   return {
//     props: {
//       getAdminEmail,
//     },
//   };
// }
