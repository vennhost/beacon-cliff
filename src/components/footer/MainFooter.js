import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import HouseIcon from "@material-ui/icons/House";
import PhoneIcon from "@material-ui/icons/Phone";
import { BrowserRouter as Router, Link } from "react-router-dom";

class MainFooter extends Component {
  state = {};
  render() {
    return (
      <Router>
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
            <div className="col">
              <p>About us</p>
              <hr />
              Get to know us better
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
              </Nav>
            </div>
            <div className="col text-left">
              <p>Contact us</p>
              <hr />
              <p>
                <HouseIcon /> 6b, Oyibo Adjarho Street, Off Admiralty Way, Lekki
                Phase 1, Lagos, 100001, Nigeria
              </p>

              <p>
                <PhoneIcon /> +234 8033529854
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
      </Router>
    );
  }
}

export default MainFooter;
