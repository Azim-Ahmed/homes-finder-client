import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import FakeData from '../practiceData';
import styles from '../../styles/ServiceFirst.module.css';
import Link from 'next/link';

export default function ServicesFirst({ service }) {
  console.log(service);
  if (service.service.length == 0) {
    return <Loader />;
  }
  return (
    <Container id="Services">
      <Row>
        {service.service.length > 0
          ? service.service.map((services, index) => (
              <Col key={index} md={12}>
                <Row>
                  <Col md={{ span: 6 }}>
                    <img
                      className={styles.imagesSize}
                      src={services.servicePicture}
                      alt={`Service of ${services.name}`}
                    />
                  </Col>
                  <Col md={{ span: 6, order: 1 }}>
                    <Card
                      className={`${styles.CardStylesForServices} bg-dark p-5 mt-5 d-block text-white`}
                    >
                      <Card.Title as="h3">{services.name}</Card.Title>
                      <Card.Text as="p">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                      <Card.Text>Last updated 3 mins ago</Card.Text>
                      <Link href={`/book/${services._id}`}>
                        <a>
                          <Button variant="outline-info">Book Now</Button>
                        </a>
                      </Link>
                    </Card>
                  </Col>
                </Row>
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
}
