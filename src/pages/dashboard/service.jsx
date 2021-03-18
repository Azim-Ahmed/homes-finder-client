import { useContext, useEffect, useState } from 'react';
import { Col, Row, Table, Button } from 'react-bootstrap';
import Layout from '../../Components/Layout';
import { UserContext } from '../_app';
import Modal from '../../Components/ReUseableUI/Modal';
import Input from '../../Components/ReUseableUI/Input';
import { server } from '../../urlConfig';
import styles from '../../styles/dashboard.module.css';
import Loader from '../../Components/Loader';
const Service = (props) => {
  const { appData, setAppData } = useContext(UserContext);

  //states of addServices
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [servicePicture, setServicePicture] = useState('');
  //states of the this component
  const [getAllServices, setGetAllservices] = useState({});
  const [serviceDetailModal, setServiceDetailModal] = useState(false);
  const [serviceDetails, setServiceDetails] = useState(null);
  const [show, setShow] = useState(false);
  //update service state
  const [updatedServiceModal, setUpdatedServiceModal] = useState(false);
  const [updatedData, setUpdatedData] = useState({});
  //

  useEffect(() => {
    fetch(`${server}/services/getAllServices`)
      .then((res) => res.json())
      .then((data) => setGetAllservices(data.service));
  }, [getAllServices]);

  const handleShow = () => setShow(true);
  //show particular service details
  const showServiceDetailsModal = (service) => {
    setServiceDetails(service);
    setServiceDetailModal(true);
  };

  const handleAddService = () => {
    const formData = { name, time, price, description, servicePicture };
    // console.log(formData);
    fetch(`${server}/service/create`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        alert('One Service Item Added');
      });
    setShow(false);
  };

  const renderAllServicesData = () => {
    if (!getAllServices.length) {
      return <Loader />;
    }

    return (
      <Table responsive style={{ fontSize: '.9rem' }} striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Shoow Details</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {getAllServices.length > 0
            ? getAllServices.map((service, index) => (
                <tr key={service._id}>
                  <td>{index + 1}</td>
                  <td>{service.name}</td>
                  <td>{service.description}</td>
                  <td>{service.price}</td>
                  <td>
                    <Button
                      onClick={() => showServiceDetailsModal(service)}
                      variant="dark"
                    >
                      {' '}
                      Show Deatils
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => updateServiceModal(service)}
                      variant="warning"
                    >
                      {' '}
                      Update
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => deleteService(service)}
                      variant="danger"
                    >
                      {' '}
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    );
  };
  //add service Modal
  const renderAddServiceModal = () => {
    return (
      <Modal
        size="lg"
        show={show}
        addServiceButton={true}
        onClick={handleAddService}
        handleClose={() => setShow(false)}
        modalTitle="Add New Service"
      >
        <Input
          label="Name"
          value={name}
          placeholder={`Service Name`}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Price"
          value={price}
          placeholder={`Price`}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          label="Time"
          value={time}
          placeholder={`time`}
          onChange={(e) => setTime(e.target.value)}
        />

        <Input
          label="Description"
          value={description}
          placeholder={`Description`}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          label="servicePicture URL"
          value={servicePicture}
          placeholder={`servicePicture URL`}
          onChange={(e) => setServicePicture(e.target.value)}
        />
      </Modal>
    );
  };
  //service Details
  const renderServiceDetailModal = () => {
    if (!serviceDetails) {
      return null && <Loader />;
    }
    return (
      <Modal
        size="lg"
        show={serviceDetailModal}
        showServiceDetailsModal={false}
        handleClose={() => setServiceDetailModal(false)}
        modalTitle={`Service Details`}
      >
        <Row>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">Name</label>
            <p className="value">{serviceDetails.name}</p>
          </Col>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">Price</label>
            <p className="value">{serviceDetails.price}</p>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">
              Updated time
            </label>
            <p className="value">{serviceDetails.updatedAt}</p>
          </Col>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">
              Created Time
            </label>
            <p className="value">{serviceDetails.createdAt}</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md="12">
            <label className="bg-secondary text-white p-2 key">
              Description
            </label>
            <p className="value">{serviceDetails.description}</p>
          </Col>
          <Col md="12">
            <label className="bg-secondary text-white p-2 key">
              Service Picture
            </label>
            <img
              className={`value img-fluid ${styles.detailsImage}`}
              src={serviceDetails.servicePicture}
            />
          </Col>
        </Row>
      </Modal>
    );
  };

  //update service section

  const updateServiceModal = (service) => {
    setServiceDetails(service);
    setUpdatedServiceModal(true);
  };

  const handleServiceInput = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const updateServiceForm = () => {
    if (updatedData) {
      fetch(`${server}/service/update/${serviceDetails._id}`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updatedData),
      })
        .then((res) => res.json())
        .then((data) => {
          alert('Updated');
        });
      setUpdatedServiceModal(false);
    } else {
      fetch(`${server}/service/update/${serviceDetails._id}`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(serviceDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          alert('Updated');
        });
      setUpdatedServiceModal(false);
    }
  };
  //update service modal
  const renderUpdateServicesModal = () => {
    if (!serviceDetails) {
      return null;
    }
    return (
      <Modal
        show={updatedServiceModal}
        modalTitle={`Update Service`}
        // handleClose={updateServiceForm}
        onClick={updateServiceForm}
        handleClose={() => setUpdatedServiceModal(false)}
        size="lg"
        update
      >
        <Row>
          <Col md={6}>
            <label className="key">Name</label>
            <Input
              name="name"
              defaultValue={serviceDetails.name}
              placeholder={`Service Name`}
              onChange={handleServiceInput}
            />
          </Col>
          <Col md={6}>
            <label className="key">Price</label>
            <Input
              name="price"
              defaultValue={serviceDetails.price}
              placeholder={`Price`}
              onChange={handleServiceInput}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <label className="key">Description</label>
            <Input
              name="description"
              defaultValue={serviceDetails.description}
              placeholder={`Description`}
              onChange={handleServiceInput}
            />
          </Col>
          <Col md={6}>
            <label className="key">Time</label>
            <Input
              name="time"
              defaultValue={serviceDetails.time}
              placeholder={`Time`}
              onChange={handleServiceInput}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <label className="key">servicePicture</label>
            <Input
              name="servicePicture"
              defaultValue={serviceDetails.servicePicture}
              placeholder={`servicePicture`}
              onChange={handleServiceInput}
            />
          </Col>
        </Row>
      </Modal>
    );
  };

  const deleteService = (service) => {
    fetch(`${server}/service/delete/${service._id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        alert('deleted');
      });
  };

  return (
    <Layout dashboard>
      <div className="d-flex justify-content-between my-3">
        <h1 className="text-white">Service</h1>
        <Button variant="primary" onClick={handleShow}>
          Add Service
        </Button>{' '}
      </div>

      {renderAllServicesData()}
      {renderAddServiceModal()}
      {renderServiceDetailModal()}
      {renderUpdateServicesModal()}
    </Layout>
  );
};

export default Service;
