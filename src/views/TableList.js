import React, {Component} from "react";
import axios from 'axios';

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

class TableList extends Component{
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get(`https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  render(){
  if (!this.state.persons.regionData) {
      return <span>Loading...</span>;
  }
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
                  {this.state.persons.regionData.map(obj => {
                  return (<tr><td>{obj.region}</td><td>{obj.recovered}</td><td>{obj.deceased}</td><td>{obj.totalInfected}</td></tr>);
                  })}
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
}

export default TableList;
