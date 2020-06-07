import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Checkbox, FormControlLabel, Grid, Icon, Radio, RadioGroup, Select} from "@material-ui/core";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function AddClient() {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        name: "",
        day: "",
        month: "",
        year: "",
        mobile: "",
        email: "",
        date: ""
    })

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    let {name, email, mobile, date} = state;
    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Նոր Պացիենտ
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Ավելացնել նոր Պացիենտ</DialogTitle>
                <DialogContent>
                    <div>
                        <ValidatorForm
                            // ref="form"
                            onSubmit={handleSubmit}
                            onError={errors => null}
                        >
                            <Grid container spacing={6}>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <TextValidator
                                        className="mb-4 w-full"
                                        label="Անուն Ազգանուն"
                                        onChange={handleChange}
                                        type="text"
                                        name="username"
                                        value={name}
                                        validators={[
                                            "required"
                                        ]}
                                        errorMessages={["this field is required"]}
                                    />
                                    <TextValidator
                                        className="mb-4 w-full"
                                        label="Էլ․ Հասցե"
                                        onChange={handleChange}
                                        type="email"
                                        name="email"
                                        value={email}
                                        validators={["required", "isEmail"]}
                                        errorMessages={["this field is required", "email is not valid"]}
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
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            className="mb-4 w-full"
                                            margin="none"
                                            id="mui-pickers-date"
                                            label="Ծննդյան տարեթիվ"
                                            inputVariant="standard"
                                            type="text"
                                            autoOk={false}
                                            value={date}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                "aria-label": "change date"
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
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
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

    function handleChange(e) {
        const {id, value} = e.currentTarget;
        let newState = {...state};
        newState[id] = value;
        setState(newState);
    }

    function handleDateChange(date) {
        console.log(date)
    }
    
    function handleSubmit() {

    }
}
