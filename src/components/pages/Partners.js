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
import MainFooter from "../footer/MainFooter";

function Partners(props) {
  return (
    <div>
      <section className="header">
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Partners</h1>
              <p className="lead">We have local and international partners</p>
            </Container>
          </Jumbotron>
        </div>
      </section>
      <section
        style={{ alignContent: "center", alignSelf: "center" }}
        className="body container"
      >
        <h4 className="mt-3 text-primary">Services</h4>
        <hr />
      </section>
      <MainFooter />
    </div>
  );
}

export default Partners;
