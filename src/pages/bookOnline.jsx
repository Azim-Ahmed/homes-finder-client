import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Layout from '../Components/Layout';
import { server } from '../urlConfig';
import Loader from '../Components/Loader';
import Link from 'next/link';
import styles from '../styles/bookOnline.module.scss';
import SEO from '../Components/SEO';

const BookOnline = ({ service }) => {
  const servicesData = service.service;
  if (!servicesData.length) {
    return <Loader />;
  }
  return (
    <Layout navColor={true} dashboard={false}>
      <SEO
        title="Book Online | | Homes Finder"
        name="description"
        content="Click one of service to procceed."
      />

      <Container>
        <Row className="mt-5">
          <Col className="mt-5">
            <h1 className="text-center my-5">Our Services</h1>
          </Col>
        </Row>
        <Row>
          {servicesData.map((servicedata) => (
            <Col
              className="my-3"
              lg={4}
              md={4}
              sm={6}
              xs={12}
              key={servicedata._id}
            >
              <Card className={styles.cardbackground}>
                <Card.Img
                  variant="top"
                  className={styles.CardImageSection}
                  src={servicedata.servicePicture}
                />
                <Card.Body>
                  <Card.Title className={styles.cardTitileBorder}>
                    {servicedata.name}
                  </Card.Title>
                  <Card.Text className="text-justify">
                    {servicedata.description}
                  </Card.Text>
                  <Link href={`/book/${servicedata._id}`}>
                    <a>
                      <Button className="py-2 my-3" variant="outline-info">
                        Request to Book
                      </Button>
                    </a>
                  </Link>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <strong className="text-muted">
                    time : <span> {servicedata.time}</span>h
                  </strong>
                  <strong className="text-muted">
                    price : <span> {servicedata.price}</span>$
                  </strong>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default BookOnline;
//getStatic props
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/services/getAllServices`);
  const service = await res.json();

  return {
    props: {
      service,
    },
    revalidate: 10,
  };
};
