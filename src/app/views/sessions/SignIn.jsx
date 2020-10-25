import React, { Component } from "react";
import { Card, Grid, Button, CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import history from "history.js";

import { loginWithEmailAndPassword } from "../../redux/actions/LoginActions";

const styles = (theme) => ({
  wrapper: {
    position: "relative",
  },

  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
});

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (event) => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleFormSubmit = async () => {
    await this.props.loginWithEmailAndPassword({ ...this.state });
    history.push({
      pathname: "/dashboard/analytics",
    });
  };
  render() {
    let { email, password } = this.state;
    let { classes } = this.props;
    return (
      <div className="signup flex justify-center w-full h-full-screen">
        <div className="p-8">
          <Card className="signup-card position-relative y-center">
            <Grid container>
              <Grid item lg={5} md={5} sm={5} xs={12}>
                <div className="p-8 flex justify-center items-center h-full">
                  <img src="/assets/images/illustrations/dreamer.svg" alt="" />
                </div>
              </Grid>
              <Grid item lg={7} md={7} sm={7} xs={12}>
                <div className="p-9 h-full bg-light-gray position-relative">
                  <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
                    <TextValidator
                      className="mb-6 w-full"
                      variant="outlined"
                      label="Email"
                      onChange={this.handleChange}
                      type="email"
                      name="email"
                      value={email}
                      validators={["required", "isEmail"]}
                      errorMessages={[
                        "this field is required",
                        "email is not valid",
                      ]}
                    />
                    <TextValidator
                      className="mb-3 w-full"
                      label="Password"
                      variant="outlined"
                      onChange={this.handleChange}
                      name="password"
                      type="password"
                      value={password}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                    <div className="flex flex-wrap items-center mb-4">
                      <div className={classes.wrapper}>
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={this.props.login.loading}
                          type="submit"
                        >
                          Մուտք գործել
                        </Button>
                        {this.props.login.loading && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      </div>
                      <span className="mr-2 ml-5">կամ</span>
                      <Button
                        className="capitalize"
                        onClick={() =>
                          this.props.history.push("/session/signup")
                        }
                      >
                        Գրանցվել
                      </Button>
                    </div>
                    <Button
                      className="text-primary"
                      onClick={() =>
                        this.props.history.push("/session/forgot-password")
                      }
                    >
                      Մոռացե՞լ եք գաղտնաբառը։
                    </Button>
                  </ValidatorForm>
                </div>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginWithEmailAndPassword: PropTypes.func.isRequired,
  login: state.login,
});
export default withStyles(styles, { withTheme: true })(
  withRouter(connect(mapStateToProps, { loginWithEmailAndPassword })(SignIn))
);
