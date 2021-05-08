import React from "react";
import {
  Container,
  Jumbotron,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import MainFooter from "../components/footer/MainFooter";
import ServiceCard from "../components/utilities/ServiceCard";

function Relocation(props) {
  return (
    <div>
      <section className="header">
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Home/Coporate Relocation</h1>
              <p className="lead">For household and office relocation</p>
            </Container>
          </Jumbotron>
        </div>
      </section>
      <section
        style={{ alignContent: "center", alignSelf: "center" }}
        className="body container"
      >
        <ServiceCard />
        <h4 className="mt-3 text-primary">Services</h4>
        <hr />
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h5">Home Relocation</CardTitle>
              <CardText>
                We carry out hazzle free home relocation to and from any part of
                the world
              </CardText>
              <Button color="danger">Get Quote</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h5">Office Relocation</CardTitle>
              <CardText>
                Are you moving your office? You can trust us with this
                unbeatable service
              </CardText>
              <Button color="danger">Get Quote</Button>
            </Card>
          </Col>
        </Row>
      </section>
      <MainFooter />
    </div>
  );
}

export default Relocation;
