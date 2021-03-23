import { useEffect, useState } from 'react';
import { Col, Row, Table, Button } from 'react-bootstrap';
import Layout from '../../Components/Layout';
import { server } from '../../urlConfig';
import Modal from '../../Components/ReUseableUI/Modal';
import styles from '../../styles/dashboard.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Orders = () => {
  //states of order page
  const [getAllOrders, setGetAllOrders] = useState({});
  //order details Modal states
  const [deleteToast, setDeleteToast] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [orderDetailModal, setOrderDetailModal] = useState(false);
  //hook of React

  useEffect(async () => {
    await fetch(`${server}/order/getAllOrders`)
      .then((res) => res.json())
      .then((data) => setGetAllOrders(data.order));
  }, [getAllOrders]);

  const showOrderDetailModal = (order) => {
    setOrderDetails(order);
    setOrderDetailModal(true);
  };

  //delete orders

  const deleteOrder = (order) => {
    fetch(`${server}/order/delete/${order._id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          return setDeleteToast(true);
        }
      });
  };

  const toastifyData = () =>
    toast('🦄 Deleted succesfully!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  //render all data Table
  const renderAllOrdersData = () => {
    return (
      <Table style={{ fontSize: '.9rem' }} responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Email</th>
            <th>Shoow Details</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {getAllOrders.length > 0
            ? getAllOrders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order.serviceName}</td>
                  <td>{order.orderPrice}</td>
                  <td>{order.email}</td>
                  <td onClick={() => showOrderDetailModal(order)}>
                    <Button variant="dark"> Show Deatils</Button>
                  </td>
                  <td onClick={toastifyData}>
                    <Button onClick={() => deleteOrder(order)} variant="danger">
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
            <label className="bg-secondary text-white p-2 key">
              Client Name
            </label>
            <p className="value">{orderDetails.name}</p>
          </Col>

          <Col md="6">
            <label className="bg-secondary text-white p-2 key">
              Service Name
            </label>
            <p className="value">{orderDetails.serviceName}</p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">
              Order Price
            </label>
            <p className="value">{orderDetails.orderPrice}</p>
          </Col>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">
              Client Email
            </label>
            <p className="value">{orderDetails.email}</p>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">City</label>
            <p className="value">{orderDetails.city}</p>
          </Col>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">Street</label>
            <p className="value">{orderDetails.street}</p>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">
              Work Duration
            </label>
            <p className="value">{orderDetails.time}</p>
          </Col>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">Work Time</label>
            <p className="value">{orderDetails.workTime}</p>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">Work Date</label>
            <p className="value">{orderDetails.workDate}</p>
          </Col>
          <Col md="6">
            <label className="bg-secondary text-white p-2 key">Work Time</label>
            <p className="value">{orderDetails.workTime}</p>
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
            <p className="value">{orderDetails.orderDescription}</p>
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
      <h1 className="my-4  text-center text-white">
        Welcome to the Orders Page
      </h1>
      {renderAllOrdersData()}
      {renderOrderDetailModal()}
      {deleteToast && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
    </Layout>
  );
};

export default Orders;
