import React from "react";
import { Container, Jumbotron } from "reactstrap";

function GetStarted(props) {
  return (
    <div>
      <section className="header">
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Get Started</h1>
              <p className="lead">
                Step by step to get started with moving your items
              </p>
            </Container>
          </Jumbotron>
        </div>
      </section>
      <section className="body"></section>
    </div>
  );
}

export default GetStarted;
