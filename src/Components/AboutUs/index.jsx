import styles from '../../styles/AboutUs.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <Container id="about">
      <Row className="my-5 py-5 text-center">
        <Col className="my-5 py-5" sm={12} xs={12} md={6}>
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
        <Col sm={12} xs={12} md={6} lg={6}>
          <div className={styles.AboutImageContainer}>
            <Image
              src="/GettyImages-1131001476.jpg"
              alt="About us profile"
              width={500}
              height={500}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;

// "/Getty-Images-1131001476.jpg"
