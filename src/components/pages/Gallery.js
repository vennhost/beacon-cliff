import React from "react";
import { Container, Jumbotron } from "reactstrap";
import MainFooter from "../footer/MainFooter";
import GalleryGrid from "../utilities/Gallery";

function Gallery(props) {
  return (
    <div>
      <section className="header">
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Gallery</h1>
              <p className="lead">Seeing is believing. Our projects images</p>
            </Container>
          </Jumbotron>
        </div>
      </section>
      <section className="body">
        <GalleryGrid />
      </section>
      <MainFooter />
    </div>
  );
}

export default Gallery;
