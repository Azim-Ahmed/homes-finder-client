import { useState } from 'react';
import { Table } from 'react-bootstrap';
import Layout from '../../Components/Layout';

const Orders = () => {
  const [getAllServices, setGetAllservices] = useState([]);

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
                    <Button variant="dark"> Show Deatils</Button>
                  </td>
                  <td>
                    <Button variant="warning"> Update</Button>
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

  return (
    <Layout dashboard>
      <h1 className="mb-4 text-white">Welcome to the Orders Page</h1>
      {renderAllOrdersData()}
    </Layout>
  );
};

export default Orders;
