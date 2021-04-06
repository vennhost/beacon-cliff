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
  },
  {
    icon: BusinessIcon,
    header: "Office / Coporate Relocation",
  },
  {
    icon: StoreIcon,
    header: "Storage Rental Solutions",
  },
  {
    icon: FlightIcon,
    header: "Air Freight",
  },
  {
    icon: DirectionsBoatIcon,
    header: "Sea Freight",
  },
  {
    icon: LocalShippingIcon,
    header: "Road Freight",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 440,
    width: 400,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function HomeGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {posts.map((post, i) => (
            <Grid key={i} item>
              <Paper className={classes.paper}> {post.header} </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
