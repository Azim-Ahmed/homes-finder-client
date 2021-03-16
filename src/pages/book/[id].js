import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Layout from '../../Components/Layout';
import styles from '../../styles/singleService.module.css';
import Calendar from 'react-calendar';
import Link from 'next/link';
import Input from '../../Components/ReUseableUI/Input';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import 'react-calendar/dist/Calendar.css';

const SingleService = ({ serviceData }) => {
  //state of react Calendar

  const [value, onChange] = useState(new Date());
  const dateData = value.toDateString();
  //state of this component
  const [serviceTime, setServiceTime] = useState(null);
  const [OrderData, setOrderData] = useState({
    time: serviceTime,
    date: dateData,
  });

  const [next, setNext] = useState(false);
  //time Section

  //next button function
  const formRenderSectionByNext = () => {
    if (!serviceTime) {
      return setNext(false);
    } else {
      setNext(true);
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

  const handleTimeChange = (e) => {
    setServiceTime(e.value);
  };
  console.log(serviceTime);

  const router = useRouter();
  console.log(serviceData.service);
  console.log(dateData);
  const ParticularServiceData = serviceData.service;

  //render form

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const formDataSection = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
      alert(JSON.stringify(data));
    };
    return (
      <>
        <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="fname">
            <Form.Control
              type="text"
              name="fname"
              placeholder="First Name"
              ref={register({ required: true })}
            />
            {errors.fname && (
              <small className="text-danger form-text">
                Please enter first name
              </small>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="email"
              placeholder="Email Address"
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
              placeholder="Last Name"
              ref={register({ required: false })}
            />
          </Form.Group>
          <Row>
            <Col>
              {' '}
              <Form.Group controlId="phoneNumber">
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  placeholder="Last Name"
                  ref={register({ required: false })}
                />
              </Form.Group>
            </Col>
            <Col>
              {' '}
              <Form.Group controlId="phoneNumber">
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  placeholder="Last Name"
                  ref={register({ required: false })}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              {' '}
              <Form.Group controlId="phoneNumber">
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  placeholder="Last Name"
                  ref={register({ required: false })}
                />
              </Form.Group>
            </Col>
            <Col>
              {' '}
              <Form.Group controlId="phoneNumber">
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  placeholder="Last Name"
                  ref={register({ required: false })}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              ref={register({ required: true })}
            />
            {errors.password && (
              <small className="text-danger form-text">
                Please enter password
              </small>
            )}
          </Form.Group>
          <Button variant="danger" className="btn-block d-block" type="submit">
            Register
          </Button>
        </Form>
      </>
    );
  };
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
                  instanceId="evening"
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
  return (
    <Layout>
      <Row className="text-center mt-4">
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="text-white text-start my-5 py-5">Schedule Online</h1>
        </Col>
      </Row>
      <Row className="text-center mt-4">
        {renderDateAndTime()}
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
                  <Button
                    block
                    size="lg"
                    className="py-2 my-3"
                    variant="outline-info"
                    onClick={formRenderSectionByNext}
                  >
                    Next
                  </Button>
                  {/* </a>
                  </Link> */}
                  {next ? (
                    <p className="text-danger">Please select Time</p>
                  ) : (
                    ''
                  )}
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          {next && (
            <>
              <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="fname">
                  <Form.Control
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    ref={register({ required: true })}
                  />
                  {errors.fname && (
                    <small className="text-danger form-text">
                      Please enter first name
                    </small>
                  )}
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Email Address"
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
                    placeholder="Last Name"
                    ref={register({ required: false })}
                  />
                </Form.Group>
                <Row>
                  <Col>
                    {' '}
                    <Form.Group controlId="phoneNumber">
                      <Form.Control
                        type="text"
                        name="phoneNumber"
                        placeholder="Last Name"
                        ref={register({ required: false })}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    {' '}
                    <Form.Group controlId="phoneNumber">
                      <Form.Control
                        type="text"
                        name="phoneNumber"
                        placeholder="Last Name"
                        ref={register({ required: false })}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {' '}
                    <Form.Group controlId="phoneNumber">
                      <Form.Control
                        type="text"
                        name="phoneNumber"
                        placeholder="Last Name"
                        ref={register({ required: false })}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    {' '}
                    <Form.Group controlId="phoneNumber">
                      <Form.Control
                        type="text"
                        name="phoneNumber"
                        placeholder="Last Name"
                        ref={register({ required: false })}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={register({ required: true })}
                  />
                  {errors.password && (
                    <small className="text-danger form-text">
                      Please enter password
                    </small>
                  )}
                </Form.Group>
                <Button
                  variant="danger"
                  className="btn-block d-block"
                  type="submit"
                >
                  Register
                </Button>
              </Form>
            </>
          )}
        </Col>
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
            height: 800px;
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
