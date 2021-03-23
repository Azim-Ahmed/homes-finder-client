import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from '../../styles/ServiceFirst.module.scss';
import Link from 'next/link';

export default function ServicesFirst({ service }) {
  if (!service.service.length) {
    <Loader />;
  }
  return (
    <Container id="Services">
      <Row>
        {service.service.length > 0
          ? service.service.map((services, index) => (
              <Col key={index} md={12}>
                <Row
                  className={`${styles.groupServiceOnResponsive} my-4 text-justify align-items-center`}
                >
                  <Col
                    className={styles.columnPaddingRemoveInResponsive}
                    md={{ span: 6 }}
                  >
                    <img
                      className={styles.imagesSize}
                      src={services.servicePicture}
                      alt={`Service of ${services.name}`}
                    />
                  </Col>
                  <Col
                    className={styles.columnPaddingRemoveInResponsive}
                    md={{ span: 6, order: 1 }}
                  >
                    <Card
                      className={`${styles.CardStylesForServices} p-lg-5 p-sm-4 p-xs-3 text-white`}
                    >
                      <Card.Title className="border-bottom pb-4" as="h3">
                        {services.name}
                      </Card.Title>
                      <Card.Text as="p">{services.description}</Card.Text>
                      <Card.Text className="py-2">{services.time}h</Card.Text>
                      <Link href={`/book/${services._id}`}>
                        <a>
                          <Button
                            className="rounded-pill border-white"
                            variant="outline-secondary"
                          >
                            Book Free Consultation
                          </Button>
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
