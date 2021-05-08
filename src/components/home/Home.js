import React from "react";
import MainFooter from "../footer/MainFooter";
import {
  Container,
  Jumbotron,
  Card,
  Button,
  CardTitle,
  CardImg,
  CardText,
  Row,
  Col,
} from "reactstrap";
import Slider from "../slider/HomeSlider";
import HomeBreadcrumbs from "./Breadcrumb";
import HomeGrid from "./HomeGrid";
import SecurityIcon from "@material-ui/icons/Security";
import SpeedIcon from "@material-ui/icons/Speed";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";
import PublicIcon from "@material-ui/icons/Public";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

function Home(props) {
  return (
    <>
      <div>
        <Slider />
        <HomeBreadcrumbs />
        <HomeGrid />
      </div>
      <hr />
      <section className="body container mt-5 mb-5">
        <h4 className="text-primary container heading mb-5">Why Choose us?</h4>

        <Row>
          <Col sm="4">
            <Card body>
              <CardTitle tag="h5">Quick & Efficient</CardTitle>
              <CardText className="text-center">
                <SpeedIcon color="primary" size={60} />
              </CardText>
              <CardText>
                We quickly, efficiently and accurately carry out our work and
                save your time.
              </CardText>
              <Button color="primary">Learn more</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle tag="h5">Professionalism</CardTitle>
              <CardText className="text-center">
                <CheckCircleOutlineIcon color="primary" size={60} />
              </CardText>
              <CardText>
                We have the most competent employees who always do the job at
                the highest level.
              </CardText>
              <Button color="primary">Learn More</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle tag="h5">Security & Safety</CardTitle>
              <CardText className="text-center">
                <SecurityIcon color="primary" size={60} />
              </CardText>
              <CardText>
                We are concious of how important the safety of clients and their
                properties is.
              </CardText>
              <Button color="primary">Learn More</Button>
            </Card>
          </Col>
        </Row>
      </section>
      <hr className="mt-5" />
      <h3 className="text-center text-primary mb-3 container heading">
        4 Easy Steps to move
      </h3>

      <section
        style={{ height: "300px", backgroundBlendMode: "luminosity" }}
        className="bg-dark mt-2 mb-5"
      >
        <Row className="mt-5 pt-5">
          <Col style={{ alignContent: "center", borderRadius: "75%" }} sm="3">
            <h3 className="text-white mt-3">1</h3>
            <PhonelinkRingIcon
              className="icon-service"
              color="primary"
              style={{
                fontSize: "100px",
                borderRadius: "75%",
                background: "white",
                alignSelf: "center",
              }}
            />
            <h3 className="text-white">Get in touch</h3>
          </Col>
          <Col style={{ alignContent: "center", borderRadius: "75%" }} sm="3">
            <h3 className="text-white mt-3">2</h3>
            <PublicIcon
              className="icon-service"
              color="primary"
              style={{
                fontSize: "100px",
                borderRadius: "75%",
                background: "white",
                alignSelf: "center",
              }}
            />
            <h3 className="text-white">Survey</h3>
          </Col>

          <Col style={{ alignContent: "center", borderRadius: "75%" }} sm="3">
            <h3 className="text-white mt-3">3</h3>
            <VerifiedUserIcon
              className="icon-service"
              color="primary"
              style={{
                fontSize: "100px",
                borderRadius: "75%",
                background: "white",
                alignSelf: "center",
              }}
            />
            <h3 className="text-white">Confirm</h3>
          </Col>
          <Col style={{ alignContent: "center", borderRadius: "75%" }} sm="3">
            <h3 className="text-white mt-3">4</h3>
            <LocalShippingIcon
              className="icon-service"
              color="primary"
              style={{
                fontSize: "100px",
                borderRadius: "75%",
                background: "white",
                alignSelf: "center",
              }}
            />
            <h3 className="text-white">On the move</h3>
          </Col>
        </Row>
      </section>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div
          style={{ width: "300px" }}
          className="shadow p-3 mb-5 bg-body rounded"
        >
          <h5 className="text-dark">Member of:</h5>
          <img
            className="m-1"
            src="https://s3.amazonaws.com/rdcms-iam/files/production/public/images/IAM_wTag-W_blue_logo.png"
            width="200px"
            alt="Movers Logo"
          />
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default Home;
