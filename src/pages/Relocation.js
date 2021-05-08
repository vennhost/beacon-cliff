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
import GetQuote from "../components/utilities/GetQuote";
import ServiceCard from "../components/utilities/ServiceCard";

function Relocation(props) {
  return (
    <div>
      <section className="header">
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Services</h1>
              <p className="lead">We render great services to our clients.</p>
            </Container>
          </Jumbotron>
        </div>
      </section>
      <section
        style={{ alignContent: "center", alignSelf: "center" }}
        className="body container"
      >
        <ServiceCard />
        <h4 className="m-5 text-primary heading container">List of Services</h4>
        <hr />

        <Card body>
          <CardTitle tag="h5">HOUSEHOLD AND OFFICE RELOCATIONS</CardTitle>
          <CardText>
            <p>
              Changing your home or office? BCCL is your best friend when it
              comes to home or office relocation. Whether you are moving locally
              or internationally we are there to make the process seamless.{" "}
            </p>
            <p>
              Our team of fast and honest movers is available to carefully pack,
              move and deliver at your doorstep and unpack leaving you with a
              neatly put together home or office.{" "}
            </p>

            <p>
              We are seasoned in the business of handling importation and
              exportation of personal effects and household goods. For your next
              move, do not hesitate to give us a call for the best experience.
            </p>
          </CardText>
          <GetQuote />
          {/* <Button color="danger">Get Quote</Button> */}
        </Card>

        <hr />
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h5">CLEARING AND FORWARDING</CardTitle>
              <CardText>
                Our service in this area is second to none. We are a licensed
                Customs agent in Nigeria with very knowledgeable staff and solid
                compliance team.
              </CardText>
              <GetQuote />
              {/* <Button color="danger">Get Quote</Button> */}
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h5">HAULAGE</CardTitle>
              <CardText>
                We transport your goods by road between suppliers and large
                consumer outlets, factories, warehouses or depots. Our fleets of
                trucks have Goods In Transit Insurance to cushion for any
                unforeseen event. We plan to transport your goods via the best
                and safest route to their destination.
              </CardText>
              <GetQuote />
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h5">SHIPPING</CardTitle>
              <CardText>
                We have solutions to fit your specific needs. We are equipped to
                send your shipments anywhere in the world. We offer Door –Door,
                Door-to- Port and Port-to-Door services. Whatever suits you, we
                have you in mind.
              </CardText>
              <GetQuote />
              {/* <Button color="danger">Get Quote</Button> */}
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h5">WAREHOUSING & DISTRIBUTION</CardTitle>
              <CardText>
                We are your one stop solution provider for all of your
                warehousing and distribution needs. With our best in class
                storage facility, your goods are well secured in our care till
                you are ready to move.
              </CardText>
              <GetQuote />
            </Card>
          </Col>
        </Row>
      </section>
      <MainFooter />
    </div>
  );
}

export default Relocation;
