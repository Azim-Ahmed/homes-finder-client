import { useState } from 'react';
import { useRouter } from 'next/router';
import { Col, Form, Row } from 'react-bootstrap';
import Layout from '../../Components/Layout';
import styles from '../../styles/singleService.module.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SingleService = ({ serviceData }) => {
  //state of react Calendar
  const [value, onChange] = useState(new Date());
  const router = useRouter();
  console.log(serviceData.service);
  const ParticularServiceData = serviceData.service;
  return (
    <Layout>
      <Row className="text-center mt-4">
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="text-white mb-4 mt-5">
            {' '}
            You have Selected{' '}
            <span className="text-warning">{ParticularServiceData.name}</span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Calendar onChange={onChange} value={value} />
        </Col>
      </Row>
    </Layout>
  );
};

export default SingleService;

//getStatic props Section
export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://localhost:2000/api/services/getAllServicesbyParams/${params.id}`
  );
  const serviceData = await res.json();

  return {
    props: {
      serviceData,
    },
  };
}
//getStatic paths Section
export async function getStaticPaths() {
  const res = await fetch('http://localhost:2000/api/services/getAllServices');
  const services = await res.json();
  const paths = [];
  services.service.forEach((service) => paths.push(`/book/${service._id}`));
  return {
    paths,
    fallback: true,
  };
}
