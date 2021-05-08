import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import HouseIcon from "@material-ui/icons/House";
import PhoneIcon from "@material-ui/icons/Phone";
import { BrowserRouter as Router, Link } from "react-router-dom";

class MainFooter extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: "250px",
          background: "black",
          color: "white",
          paddingTop: "10px",
        }}
        className="bg-primary mt-5 mb-0 text-white fixed"
      >
        <div className="row">
          <div className="col text-left pl-5">
            <p>About us</p>
            <hr />
            <p className="text-left pl-2">
              Beacon Cliff Consociates is a full-service logistics company that
              kick started operations in 2016 and has since taken that plunge
              into the vast and complex world of logistics and supply chain
              services{" "}
              <Link className="text-white text-left pl-2" to="/about">
                Read more...
              </Link>
            </p>
          </div>
          <div className="col text-left">
            <p>Other Links</p>
            <hr />
            <Nav vertical>
              <Link className="text-white" to="/partners">
                Partner with us
              </Link>

              <Link className="text-white" to="/career">
                Career
              </Link>

              <Link className="text-white" to="/portal">
                Customer Portal
              </Link>

              <Link className="text-white" to="/about">
                Who we are
              </Link>
              <a className="text-white" href="/https://beaconcliff.org/webmail">
                Staff Email
              </a>
            </Nav>
          </div>
          <div className="col text-left">
            <p>Contact us</p>
            <hr />
            <p>
              <HouseIcon /> Plot 27, Oshodi Apapa Epressway, Cele Bus Stop,
              Lagos, 100001, Nigeria
            </p>

            <p>
              <PhoneIcon /> +234 8124394264
            </p>
          </div>
        </div>
        <hr />
        <div>
          <p>
            Copyright &copy; 2021. Beacon Cliff Consociate Ltd. All right
            reserved
          </p>
        </div>
      </div>
    );
  }
}

export default MainFooter;
