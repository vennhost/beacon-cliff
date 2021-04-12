import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import HouseIcon from "@material-ui/icons/House";
import BusinessIcon from "@material-ui/icons/Business";
import StoreIcon from "@material-ui/icons/Store";
import FlightIcon from "@material-ui/icons/Flight";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";

const posts = [
  {
    icon: HouseIcon,

    header: "Home / Residential Relocation",
    color: "blue",
  },
  {
    icon: BusinessIcon,
    header: "Office / Coporate Relocation",
    color: "green",
  },
  {
    icon: StoreIcon,
    header: "Forwarding / Storage Rental Solutions",
    color: "purple",
  },
  {
    icon: FlightIcon,
    header: "Air Freight",
    color: "purple",
  },
  {
    icon: DirectionsBoatIcon,
    header: "Sea Freight",
    color: "blue",
  },
  {
    icon: LocalShippingIcon,
    header: "Road Freight",
    color: "green",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 400,
  },
  control: {
    padding: theme.spacing(0),
  },
}));

export default function HomeGrid() {
  const [spacing, setSpacing] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {posts.map((post, i) => (
            <Grid data-aos="zoom-in-up" key={i} item>
              <Paper
                style={{
                  background: post.color,
                  alignContent: "center",
                  alignSelf: "center",
                  paddingTop: 100,
                }}
                className={classes.paper}
              >
                <post.icon style={{ color: "white", fontSize: "60px" }} />

                <h2 className="text-white">{post.header}</h2>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
