import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import Link from 'next/link';
import styles from '../../styles/layout.module.css';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../pages/_app';

const Layout = (props) => {
  const { appData, setAppData } = useContext(UserContext);

  useEffect(() => {
    const homeSection = '/login';
    if (!appData) {
      router.push(homeSection);
    }
  }, []);

  return (
    <>
      <Header navColor={props.navColor} appData={appData} dashboard />
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
