import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MainFooter from "../../src/components/footer/MainFooter";
import ContactImg from "../static-images/contact.jpg";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "70ch",
    },
  },
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

function Contact(props) {
  const classes = useStyles();
  return (
    <>
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Contact</h1>
            <p className="lead">Have any question? Contact us.</p>
          </Container>
        </Jumbotron>
      </div>
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <img src={ContactImg} width="430px" alt="Contact" />
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <Paper className={classes.paper}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Full Name" />
                <TextField id="standard-basic" label="Email" />
                <TextField id="standard-basic" label="Phone Number" />
                <TextField id="standard-basic" rows={4} label="Message" />
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  Send
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <MainFooter />
    </>
  );
}

export default Contact;
