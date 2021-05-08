import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import MainFooter from "../../src/components/footer/MainFooter";
import NewsImg from "../static-images/news.jpg";

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

function Events(props) {
  const classes = useStyles();
  return (
    <>
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">News and Events</h1>
            <p className="lead">Photospeak of events.</p>
          </Container>
        </Jumbotron>
      </div>
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Paper className={classes.paper}>
              <p className="p-3">
                <strong>Coming Soon</strong>
              </p>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <img src={NewsImg} width="430px" alt="News us" />
            </Paper>
          </Grid>
        </Grid>
      </div>
      <MainFooter />
    </>
  );
}

export default Events;
