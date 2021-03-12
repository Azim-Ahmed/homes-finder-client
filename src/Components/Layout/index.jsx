import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header';
import Link from 'next/link';
import styles from './layout.module.css';

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.dashboard ? (
        <Container fluid>
          <Row>
            <Col md={2} className={styles.sidebar}>
              <ul>
                <li className="mt-3">
                  <Link href={`/dashboard/home`}>
                    <a>Home</a>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href={`/dashboard/service`}>
                    <a>Service</a>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href={`/dashboard/orders`}>
                    <a>Orders</a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: 'auto', paddingTop: '90px' }}>
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )}
    </>
  );
};

export default Layout;
