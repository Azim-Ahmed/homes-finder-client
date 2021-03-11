import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header";

const Layout = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
