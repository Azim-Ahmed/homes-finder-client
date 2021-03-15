import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Layout from '../Components/Layout';
import Loader from '../Components/Loader';
import Link from 'next/link';

const BookOnline = ({ service }) => {
  const servicesData = service.service;
  if (!servicesData.length) {
    return <Loader />;
  }
  return (
    <Layout>
      <Container>
        <Row className="mt-5">
          <Col className="mt-5">
            <h1 className="text-center my-5">Our Services</h1>
          </Col>
        </Row>
        <Row>
          {servicesData.map((servicedata) => (
            <Col className="my-3" md={4} sm={6} xs={12} key={servicedata._id}>
              <Card>
                <Card.Img variant="top" src={servicedata.servicePicture} />
                <Card.Body>
                  <Card.Title>{servicedata.name}</Card.Title>
                  <Card.Text>{servicedata.description}</Card.Text>
                  <Link href={`/book/${servicedata._id}`}>
                    <a>
                      <Button variant="outline-info">Book Now</Button>
                    </a>
                  </Link>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <small className="text-muted">
                    time : <span> {servicedata.time}</span>h
                  </small>
                  <small className="text-muted">
                    price : <span> {servicedata.price}</span>$
                  </small>
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
  const res = await fetch('http://localhost:2000/api/services/getAllServices');
  const service = await res.json();
  if (!service) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        service,
      },
      revalidate: 10,
    };
  }
};
