import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, Icon } from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import SearchBar from 'material-ui-search-bar';
import API from '../../services/api';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: '20px',
    '@media screen and (max-width: 767px)': {
      marginRight: '0',
      marginBottom: '20px',
    },
  },
  progress: {
    margin: theme.spacing(2),
  },
}));

export default function AddClient({ handleSearch, handleAdd }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    name: '',
    mobile: '',
    email: '',
    dateOfBirth: new Date(),
  });
  const [search, setSearch] = React.useState('');

  let { name, email, mobile, dateOfBirth } = state;
  return (
    <div>
      <div className='clients__addSearch'>
        <Button
          variant='contained'
          color='primary'
          className={classes.root}
          onClick={handleClickOpen}
        >
          Նոր Պացիենտ
        </Button>
        <SearchBar
          value={search}
          onChange={(newValue) => setSearch(newValue)}
          onRequestSearch={() => handleSearch(search)}
        />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Ավելացնել նոր Պացիենտ</DialogTitle>

        <DialogContent>
          <div>
            <ValidatorForm onSubmit={handleSubmit} onError={(errors) => null}>
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextValidator
                    className='mb-4 w-full'
                    label='Անուն Ազգանուն'
                    onChange={handleChange}
                    type='text'
                    name='name'
                    value={name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                  />
                  <TextValidator
                    className='mb-4 w-full'
                    label='Էլ․ Հասցե'
                    onChange={handleChange}
                    type='email'
                    name='email'
                    value={email}
                    validators={['isEmail']}
                    errorMessages={['email is not valid']}
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextValidator
                    className='mb-4 w-full'
                    label='Հեռախոս'
                    onChange={handleChange}
                    type='text'
                    name='mobile'
                    value={mobile}
                    validators={['required']}
                    errorMessages={['this field is required']}
                  />
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      className='mb-4 w-full'
                      margin='none'
                      label='Ծննդյան տարեթիվ'
                      name='dateOfBirth'
                      autoOk={true}
                      format='d/MM/yy'
                      disableFuture={true}
                      value={dateOfBirth}
                      onChange={handleDateChange}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
              <Button color='primary' variant='contained' type='submit'>
                <Icon>send</Icon>
                <span className='pl-2 capitalize'>Submit</span>
              </Button>
            </ValidatorForm>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

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

  async function handleSubmit() {
    const clientToSave = { ...state };
    if (!state.email) {
      delete state.email;
    }
    const client = await API.createClient(clientToSave);
    handleAdd(client);
    setOpen(false);
  }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
}
