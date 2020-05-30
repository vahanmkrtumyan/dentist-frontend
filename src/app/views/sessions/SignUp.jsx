import React from "react";
import { useHistory } from 'react-router-dom';
import {
  Card,
  Grid,
  Button
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import API from '../../helpers/API';



function SignUp ()  {
  const history = useHistory();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  
  const handleFormSubmit = async () => {
      await  API.post('api/auth/signup', {name, email, password});
      history.push("/session/signin");
    };


    return (
      <div className="signup flex justify-center w-full h-full-screen">
        <div className="p-8">
          <Card className="signup-card position-relative y-center">
            <Grid container>
              <Grid item lg={5} md={5} sm={5} xs={12}>
                <div className="p-8 flex justify-center bg-light-gray items-center h-full">
                  <img
                    src="/assets/images/illustrations/posting_photo.svg"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item lg={7} md={7} sm={7} xs={12}>
                <div className="p-9 h-full">
                  <ValidatorForm onSubmit={handleFormSubmit}>
                    <TextValidator
                      className="mb-6 w-full"
                      variant="outlined"
                      label="Օգտանուն"
                      onChange={e => setName(e.target.value)}
                      type="text"
                      name="name"
                      value={name}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                    <TextValidator
                      className="mb-6 w-full"
                      variant="outlined"
                      label="Մեյլ"
                      onChange={e => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      value={email}
                      validators={["required", "isEmail"]}
                      errorMessages={[
                        "this field is required",
                        "email is not valid"
                      ]}
                    />
                    <TextValidator
                      className="mb-4 w-full"
                      label="Գաղտնաբառ"
                      variant="outlined"
                      onChange={e => setPassword(e.target.value)}
                      name="password"
                      type="password"
                      value={password}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                    <div className="flex items-center">
                      <Button
                        className="capitalize"
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                        Գրանցվել
                      </Button>
                      <span className="mx-2 ml-5">կամ</span>
                      <Button
                        className="capitalize"
                        onClick={() =>
                          history.push("/session/signin")
                        }
                      >
                        Մուտք գործել
                      </Button>
                    </div>
                  </ValidatorForm>
                </div>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
    );
}

export default SignUp;
