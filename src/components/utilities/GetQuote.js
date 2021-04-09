import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Divider } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function GetQuote() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Get Quote
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Service Request</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the form below to get a quote
          </DialogContentText>
          <Divider />
          <FormControl className={classes.formControl}>
            <InputLabel id="service">Service Type</InputLabel>
            <Select
              labelId="service"
              autoFocus
              margin="dense"
              id="service"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Select option</MenuItem>
              <MenuItem value={20}>Home Relocation</MenuItem>
              <MenuItem value={30}>Office Relocation</MenuItem>
            </Select>
          </FormControl>

          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="from_address"
            label="From Country"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="from_address"
            label="From Address"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="to_country"
            label="To Country"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="to_address"
            label="To Address"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
