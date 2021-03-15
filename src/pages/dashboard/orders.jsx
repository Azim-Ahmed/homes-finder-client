import { useEffect, useState } from 'react';
import { Col, Row, Table, Button } from 'react-bootstrap';
import Layout from '../../Components/Layout';
import { api } from '../../urlConfig';
import Modal from '../../Components/ReUseableUI/Modal';
import styles from '../../styles/dashboard.module.css';

const Orders = () => {
  //states of order page
  const [getAllOrders, setGetAllOrders] = useState({});
  //order details Modal states
  const [show, setShow] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [orderDetailModal, setOrderDetailModal] = useState(false);
  //hook of React

  useEffect(() => {
    fetch(`${api}/order/getAllOrders`)
      .then((res) => res.json())
      .then((data) => setGetAllOrders(data.order));
  }, [getAllOrders]);
  //console.log(getAllOrders);

  //modal function
  const handleShow = () => setShow(true);
  //show particular order details
  const showOrderDetailModal = (order) => {
    setOrderDetails(order);
    setOrderDetailModal(true);
  };
  //render all data Table
  const renderAllOrdersData = () => {
    return (
      <Table style={{ fontSize: '.9rem' }} responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Shoow Details</th>

            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {getAllOrders.length > 0
            ? getAllOrders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order.name}</td>
                  <td>{order.description}</td>
                  <td>{order.price}</td>
                  <td onClick={() => showOrderDetailModal(order)}>
                    <Button variant="dark"> Show Deatils</Button>
                  </td>
                  <td>
                    <Button variant="danger"> Delete</Button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    );
  };

  //order Details modal
  const renderOrderDetailModal = () => {
    if (!orderDetails) {
      return null && <Loader />;
    }
    return (
      <Modal
        size="lg"
        show={orderDetailModal}
        showOrderDetailsModal={false}
        handleClose={() => setOrderDetailModal(false)}
        modalTitle={`Order Details`}
      >
        <Row>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">Name</label>
            <p className="value">{orderDetails.name}</p>
          </Col>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">Price</label>
            <p className="value">{orderDetails.price}</p>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">
              Updated time
            </label>
            <p className="value">{orderDetails.updatedAt}</p>
          </Col>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">
              Created Time
            </label>
            <p className="value">{orderDetails.createdAt}</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md="12">
            <label className="bg-secondary text-white p-2 key">
              Description
            </label>
            <p className="value">{orderDetails.description}</p>
          </Col>
          <Col md="12">
            <label className="bg-secondary text-white p-2 key">
              Ordered Picture
            </label>
            <img
              className={`value img-fluid ${styles.detailsImage}`}
              src={orderDetails.orderPicture}
            />
          </Col>
        </Row>
      </Modal>
    );
  };

  return (
    <Layout dashboard>
      <h1 className="mb-4  text-center text-white">
        Welcome to the Orders Page
      </h1>
      {renderAllOrdersData()}
      {renderOrderDetailModal()}
    </Layout>
  );
};

export default Orders;
