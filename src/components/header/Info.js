import { Button } from "reactstrap";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Info(props) {
  const classes = useStyles();
  return (
    <div className="container m-2">
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row">
        <div className="col text-right text-primary pt-2 info-text">
          <p className="text-right">
            <PhoneIcon /> +234 8033529854
          </p>
        </div>
        <div className="col  text-primary pt-2 info-text">
          <p className="text-left">
            <EmailIcon /> INFO@BEACONCLIFF.ORG
          </p>
        </div>
        <div className="col">
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="add"
            className={classes.margin}
          >
            {/*  <NavigationIcon className={classes.extendedIcon} /> */}
            Request a Quote
          </Fab>
        </div>
      </div>
    </div>
  );
}

export default Info;
