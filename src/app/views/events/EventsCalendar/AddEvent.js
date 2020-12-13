import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, Icon } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { TextField } from "@material-ui/core";

function AddEvent({ slotHandler }) {
  const [state, setState] = React.useState({
    name: "",
    mobile: "",
    dateOfBirth: new Date(),
  });
  const [search, setSearch] = React.useState("");

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    let newState = { ...state };
    newState[name] = value;
    setState(newState);
  }

  function handleDateChange(date) {
    let newState = { ...state };
    if (date) {
      date.setHours(0, 0, 0, 0);
      newState.dateOfBirth = date;
    }
    setState(newState);
  }

  function handleSubmit() {}
  function handleClose() {
    slotHandler(null);
  }
  let { name, mobile } = state;
  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ավելացնել նոր Պացիենտ</DialogTitle>

        <DialogContent>
          <div>
            <ValidatorForm onSubmit={handleSubmit} onError={(errors) => null}>
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextValidator
                    className="mb-4 w-full"
                    label="Անուն Ազգանուն"
                    onChange={handleChange}
                    type="text"
                    name="name"
                    value={name}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextValidator
                    className="mb-4 w-full"
                    label="Հեռախոս"
                    onChange={handleChange}
                    type="text"
                    name="mobile"
                    value={mobile}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    className="mb-4 w-full"
                    margin="none"
                    label="Ծննդյան տարեթիվ"
                    name="dateOfBirth"
                    autoOk={true}
                    format="d/MM/yy"
                    disableFuture={true}
                    value={dateOfBirth}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider> */}
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    label="Նշումներ"
                    name="comment"
                    multiline
                    rows="3"
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Button color="primary" variant="contained" type="submit">
                <Icon>send</Icon>
                <span className="pl-2 capitalize">Submit</span>
              </Button>
            </ValidatorForm>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddEvent;
