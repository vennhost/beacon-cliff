import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import MainFooter from "../../src/components/footer/MainFooter";
import AboutImg from "../static-images/about2.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

function About(props) {
  const classes = useStyles();
  return (
    <>
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">About us</h1>
            <p className="lead">Who we are.</p>
          </Container>
        </Jumbotron>
      </div>
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Paper className={classes.paper}>
              <p className="p-3">
                <strong>Beacon Cliff Consociates</strong> is a full-service
                logistics company that kick started operations in 2016 and has
                since taken that plunge into the vast and complex world of
                logistics and supply chain services, we have been taking great
                care in building relationships with our clients and absorbing
                every atom of experience with fierce intensity in a bid to
                ensure that every service we deliver is three times better than
                the last. With Lagos as our base of operations, we are able to
                fully explore to our benefit and our clients’, all the
                commercial advantages that the megacity is known by
                business-oriented people all over the world for. We provide
                international Ocean and Air freight services, Clearing and
                forwarding of general cargo, relocation services, warehousing,
                and distribution.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <img src={AboutImg} width="430px" alt="About us" />
            </Paper>
          </Grid>
        </Grid>
      </div>
      <MainFooter />
    </>
  );
}

export default About;
