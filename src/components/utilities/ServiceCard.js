import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import img5 from "../../static-images/gallery/3.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
  },
});

export default function ServiceCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Service"
          height="240"
          image={img5}
          title="Service Overview"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Overview
          </Typography>
          <Typography
            className="text-left"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <p>
              Moving homes or offices can be emotional, stressful, and plain
              tiring. New country, unfamiliar culture, different home, fresh
              job, new school, etc.
            </p>

            <p>
              From the first contact to unpacking at the final destination,
              Beacon Cliff maintains seamless communications with clients. We
              understand that it is small things that make a difference.
            </p>

            <p>
              We offer end-to-end services for the removal, relocation, and
              storage of your home contents and personal effects.
            </p>

            <p>
              With extensive experience in household and office relocations, we
              are ready to provide you with a comprehensive range of
              professional removal, relocation and temporary storage services
              for your office, home and personal effects.
            </p>

            <p>
              Our packing materials are custom made to withstand the rigors of
              moving.
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Get Quote
        </Button>
      </CardActions>
    </Card>
  );
}
