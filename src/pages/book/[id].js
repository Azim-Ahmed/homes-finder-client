import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Layout from '../../Components/Layout';
import styles from '../../styles/singleService.module.css';
import Calendar from 'react-calendar';
import Link from 'next/link';
import Select from 'react-select';
import { api } from '../../urlConfig';
import { useForm } from 'react-hook-form';
import 'react-calendar/dist/Calendar.css';

const SingleService = ({ serviceData }) => {
  const ParticularServiceData = serviceData.service;
  const {
    name,
    price,
    servicePicture,
    slug,
    time,
    description,
  } = ParticularServiceData;
  //state of react Calendar

  const [value, onChange] = useState(new Date());
  const dateData = value.toDateString();
  //state of this component
  const [serviceTime, setServiceTime] = useState(null);
  const [orderData, setOrderData] = useState({});
  orderData.time = serviceTime;
  orderData.serviceName = name;
  orderData.servicePrice = price;
  orderData.serviceDescription = description;
  orderData.servicePicture = servicePicture;
  orderData.slug = slug;
  orderData.time = time;
  //
  console.log(orderData);

  // {
  //   name: '',
  //   email: '',
  //   phoneNumber: '',
  //   street: '',
  //   floor: '',
  //   city: '',
  //   state: '',
  //   message: '',
  // }

  //state of conditional rendereing
  const [next, setNext] = useState(false);
  //state of error or correct time
  const [nexty, setNexty] = useState(null);

  //next button function
  const formRenderSectionByNextButton = () => {
    if (!serviceTime) {
      setNext(false);
      setNexty(<p className="text-danger">Please Select the time</p>);
    } else {
      setNext(true);
    }
  };
  //Request To book button onClick Function
  const RequestToBookForApproval = () => {
    if (!orderData) {
      setNexty(<p className="text-danger">Please Fill the Data Correctly</p>);
    } else {
      fetch(`${api}/order/create`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(orderData),
      })
        .then((res) => res.json())
        .then((result) => {
          alert('One Service Item Added');
        });
    }
  };
  const optionsMorning = [
    { value: '9:00 am', label: '9:00 am' },
    { value: '9:30 am', label: '9:30 am' },
    { value: '10:00 am', label: '10:00 am' },
    { value: '10:30 am', label: '10:30 am' },
    { value: '11:00 am', label: '11:00 am' },
    { value: '11:30 am', label: '11:30 am' },
  ];
  const optionsAfternoon = [
    { value: '12:00 pm', label: '12:00 pm' },
    { value: '12:30 pm', label: '12:30 pm' },
    { value: '1:00 pm', label: '1:00 pm' },
    { value: '1:30 pm', label: '1:30 pm' },
    { value: '2:00 pm', label: '2:00 pm' },
    { value: '2:30 pm', label: '2:30 pm' },
    { value: '3:00 pm', label: '3:00 pm' },
    { value: '3:30 pm', label: '3:30 pm' },
    { value: '4:30 pm', label: '4:30 pm' },
  ];
  const optionsEvening = [{ value: '5:00 am', label: '5:00 am' }];
  //react-select timeSection
  const handleTimeChange = (select) => {
    setServiceTime(select.value);
  };
  console.log(serviceTime);

  const router = useRouter();
  console.log(serviceData.service);
  console.log(dateData);

  //render form

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    setOrderData(data);
  };
  //render time and date(calendar and time components)
  const renderDateAndTime = () => {
    return (
      <Col md={{ span: 6, offset: 1 }}>
        <Row>
          <Col>
            <Calendar
              className={styles.CalendarSection}
              onChange={onChange}
              value={value}
            />
          </Col>
        </Row>
        <Row>
          <Col className="mt-4">
            <Row>
              <Col>
                {' '}
                <Select
                  instanceId="Morning"
                  autoFocus={true}
                  onChange={handleTimeChange}
                  options={optionsMorning}
                  placeholder="Morning"
                />
              </Col>
              <Col>
                {' '}
                <Select
                  instanceId="Afternoon"
                  autoFocus={true}
                  onChange={handleTimeChange}
                  options={optionsAfternoon}
                  placeholder="Afternoon"
                />
              </Col>
              <Col>
                {' '}
                <Select
                  instanceId="Evening"
                  autoFocus={true}
                  onChange={handleTimeChange}
                  options={optionsEvening}
                  placeholder="Evening"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderHookForm = () => {
    return (
      <Col md={{ span: 6, offset: 1 }}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="name">
            <Form.Control
              type="text"
              name="name"
              placeholder="*Name"
              ref={register({ required: true })}
            />
            {errors.name && (
              <small className="text-danger form-text">Please enter name</small>
            )}
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Control
              type="text"
              name="email"
              placeholder="*Email Address"
              ref={register({
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              })}
            />
            {errors.email && (
              <small className="text-danger form-text">
                Please enter a valid Email-ID
              </small>
            )}
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Control
              type="text"
              name="phoneNumber"
              placeholder="*Phone Number"
              ref={register({ required: true })}
            />
            {errors.phoneNumber && (
              <small className="text-danger form-text">
                Please enter a valid Phone Number
              </small>
            )}
          </Form.Group>
          <Row>
            <Col>
              {' '}
              <Form.Group controlId="street">
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  placeholder="*Street"
                  ref={register({ required: true })}
                />
                {errors.street && (
                  <small className="text-danger form-text">
                    Please enter a valid street
                  </small>
                )}
              </Form.Group>
            </Col>
            <Col>
              {' '}
              <Form.Group controlId="phoneNumber">
                <Form.Control
                  type="text"
                  name="floor"
                  placeholder="Apt/Floor No."
                  ref={register({ required: false })}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              {' '}
              <Form.Group controlId="city">
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="*City"
                  ref={register({ required: true })}
                />
                {errors.city && (
                  <small className="text-danger form-text">
                    Please enter your city
                  </small>
                )}
              </Form.Group>
            </Col>
            <Col>
              {' '}
              <Form.Group controlId="state">
                <Form.Control
                  type="text"
                  name="state"
                  placeholder="State"
                  ref={register({ required: false })}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="message">
            <Form.Control
              type="text"
              name="message"
              placeholder="Add your Message"
              ref={register({ required: false })}
            />
          </Form.Group>
          <small className="text-muted">*Required Info</small>
          <Button variant="danger" className="btn-block d-block" type="submit">
            Register
          </Button>
        </Form>
      </Col>
    );
  };
  return (
    <Layout>
      <Row className="text-center mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          {next && (
            <div className="text-center">
              {' '}
              <h1>Add Your Info</h1>
              <p>Tell us a bit about yourself</p>
            </div>
          )}
          {!next && (
            <h1 className="text-white text-justify  my-5 py-5">
              {' '}
              Schedule Online
            </h1>
          )}
        </Col>
      </Row>
      <Row className="text-center mt-4">
        {!next && renderDateAndTime()}
        {next && renderHookForm()}
        <Col md={4} className="mt-5">
          <div id="wrapper">
            <div id="sticky">
              <Card className={styles.cardbackgroundForm}>
                <Card.Body>
                  <Card.Title className={styles.cardTitileBorder}>
                    {ParticularServiceData.name}
                  </Card.Title>
                  <Card.Text>{dateData}</Card.Text>
                  <Card.Text>{serviceTime}</Card.Text>
                  {/* <Link href={`/book/${ParticularServiceData._id}`}>
                    <a> */}
                  {/* <Button
                    block
                    size="lg"
                    className="py-2 my-3"
                    variant="outline-info"
                    onClick={formRenderSectionByNextButton}
                  >
                    Next
                  </Button> */}
                  {!orderData && (
                    <Button
                      block
                      size="lg"
                      className="py-2 my-3"
                      variant="outline-info"
                      onClick={formRenderSectionByNextButton}
                    >
                      Next
                    </Button>
                  )}
                  {orderData && (
                    <Button
                      block
                      size="lg"
                      className="py-2 my-3"
                      variant="outline-info"
                      onClick={RequestToBookForApproval}
                    >
                      Request To Book
                    </Button>
                  )}

                  {/* </a>
                  </Link> */}
                  {serviceTime ? '' : nexty}
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}></Col>
      </Row>

      <style jsx>
        {`
          #sticky {
            position: sticky;
            position: -webkit-sticky;
            // background: goldenrod;
            width: 100%;
            height: auto;
            top: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 7px gray;
            color: #000;
          }
          #wrapper {
            width: 17rem;
            margin: auto;
          }
          #wrapper {
            height: 700px;
          }

          // body {
          //   font-family: Bellefair;
          //   height: 10000px;
          //   background: black;
          //   font-size: 14pt;
          // }
          h4 {
            text-align: center;
            color: white;
          }
          @media (min-height: 768px) {
            #wrapper {
              height: 2000px;
            }
          }
        `}
      </style>
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
