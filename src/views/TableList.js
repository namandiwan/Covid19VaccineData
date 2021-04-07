import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Vaccine Information State-wise</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">State</th>
                      <th className="border-0">Tested</th>
                      <th className="border-0">Active</th>
                      <th className="border-0">Vaccinated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Delhi</td>
                      <td>198,990</td>
                      <td>89,900</td>
                      <td>300,000</td>
                    </tr>
                    <tr>
                      <td>Haryana</td>
                      <td>198,990</td>
                      <td>89,900</td>
                      <td>300,000</td>
                    </tr>
                    <tr>
                      <td>Punjab</td>
                      <td>198,990</td>
                      <td>89,900</td>
                      <td>300,000</td>
                    </tr>
                    <tr>
                      <td>Arunachal Pradesh</td>
                      <td>198,990</td>
                      <td>89,900</td>
                      <td>300,000</td>
                    </tr>
                    <tr>
                      <td>Mumbai</td>
                      <td>198,990</td>
                      <td>89,900</td>
                      <td>300,000</td>
                    </tr>
                    <tr>
                      <td>Karnataka</td>
                      <td>198,990</td>
                      <td>89,900</td>
                      <td>300,000</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
