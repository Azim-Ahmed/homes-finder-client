import styles from "./AboutUs.module.css";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container id="about">
      <Row className="my-5 py-5">
        <Col className="my-5 py-5" sm={12} xs={12} md={{ span: 5, offset: 1 }}>
          <h1>About Our Company</h1>
          <p className={styles.AboutContentContainer}>
            Our company is a specialist in home design and total home
            renovation. We provide service locally in Ottawa as well as the
            Greater Ottawa Area. Our core values revolve around providing our
            clients with excellent customer service and a worry-free renovation
            process. Whether you want an addition to your current home, renovate
            your kitchen or bathroom we will work with you every step of the way
            to ensure your satisfaction.
          </p>
        </Col>
        <Col
          className={styles.AboutImageContainer}
          sm={12}
          xs={12}
          md={{ span: 4 }}
        >
          <div>
            <img
              src="https://i.ibb.co/ThcJFdG/Getty-Images-1131001476.jpg"
              alt="About us profile"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
