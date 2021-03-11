import { Card, Col, Container, Row } from "react-bootstrap";
import FakeData from "../practiceData";

const ServicesFirst = () => {
  return (
    <Container>
      <Row>
        {FakeData.length > 0
          ? FakeData.map((service, index) => (
              <Col key={index} md={12}>
                <Row className="py-5">
                  <Col md={{ span: 6 }}>
                    <img
                      style={{ minWidth: "690px", maxHeight: "383px" }}
                      src={service.ServiceURL}
                      alt="Service URL"
                    />
                  </Col>
                  <Col md={{ span: 6, order: 1 }}>
                    <Card className="bg-dark p-5 mt-5 d-block text-white">
                      <Card.Title as="h3">{service.name}</Card.Title>
                      <Card.Text as="p">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                      <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card>
                  </Col>
                </Row>
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
};

export default ServicesFirst;
