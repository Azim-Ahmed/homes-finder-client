import Head from 'next/head';
import { useContext, useEffect } from 'react';
// import { UserContext } from '../../pages/_app';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import Link from 'next/link';
import styles from '../../styles/layout.module.scss';
import { UserContext } from '../../pages/_app';

const Layout = (props) => {
  const [
    appData,
    setAppData,
    loggedIn,
    setLoggedIn,
    admin,
    setAdmin,
  ] = useContext(UserContext);

  useEffect(() => {
    const homeSection = '/login';
    if (!appData) {
      router.push(homeSection);
    }
  }, []);

  return (
    <>
      <Head></Head>
      <Header navColor={props.navColor} dashboard />
      {props.dashboard ? (
        <Container fluid>
          <Row>
            <Col md={2} className={styles.sidebar}>
              <ul>
                <li>
                  <Link href={`/dashboard/home`}>
                    <a className="nav-link mt-3">Home</a>
                  </Link>
                </li>
                <li className="">
                  <Link href={`/dashboard/service`}>
                    <a className="nav-link mt-3">Service</a>
                  </Link>
                </li>
                <li className="">
                  <Link href={`/dashboard/orders`}>
                    <a className="nav-link mt-3">Orders</a>
                  </Link>
                </li>
              </ul>
              {/* 
              {!admin && (
                <ul>
                  <li>
                    <Link href={`/dashboard/home`}>
                      <a className="nav-link mt-3">Home</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href={`/dashboard/orders`}>
                      <a className="nav-link mt-3">Orders</a>
                    </Link>
                  </li>
                </ul>
              )} */}
            </Col>
            <Col md={10} className={styles.LayoutChildrenSection}>
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid>
          <Row>
            <Col md={12} lg={12} className={styles.LayoutChildrenSection}>
              {props.children}
            </Col>
          </Row>
          <Footer />
        </Container>
      )}
    </>
  );
};

export default Layout;
