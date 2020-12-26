import React, { Component } from "react";
import ConstantList from "../../appConfig";
import {
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  withStyles,
  CircularProgress
} from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { loginWithEmailAndPassword } from "../../redux/actions/LoginActions";

import axios from "axios";

import history from "history.js";
import localStorageService from "../../services/localStorageService";
const styles = theme => ({
  wrapper: {
    position: "relative"
  },

  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    agreement: ""
  };
  handleChange = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  setLoginUser = (data) => {
    let user = {};
    user.id = data.id; 
    user.role = data.role.name;
    this.user = user;  
    localStorageService.setItem("auth_user", user);
    
    history.push(ConstantList.ROOT_PATH + "dashboard/analytics");
    let usera = localStorageService.getItem("auth_user"); 
    return user;
  }

  handleFormSubmit = event => {

    let userDto = {}
    userDto.username = this.state.username
    userDto.password = this.state.password
    axios.post(ConstantList.API_ENPOINT + '/public/login', userDto).then(response => {  
      if (response.data != "") {
        this.setLoginUser(response.data);
      } else {
        alert("Sai ten dang nhap hoac mat khau")
      }

    })
    // this.props.loginWithEmailAndPassword(userDto);
  };
  render() {
    const { t, i18n } = this.props;
    let { username, password } = this.state;
    let { classes } = this.props;
    return (

      <div className="signup flex flex-center w-100 h-100vh">
        <Helmet>
          <title>{t('Dashboard.login')} | {t('web_site')} </title>
        </Helmet>
        <div className="p-8">
          <Card className="signup-card position-relative y-center">
            <Grid container>
              <Grid item lg={5} md={5} sm={5} xs={12}>
                <div className="p-32 flex flex-center flex-middle h-100">
                  <img src={ConstantList.ROOT_PATH + "assets/images/logos/webpack.png"} alt="" />
                </div>
              </Grid>
              <Grid item lg={7} md={7} sm={7} xs={12}>
                <div className="p-36 h-100 bg-light-gray position-relative">
                  <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
                    <TextValidator
                      className="mb-24 w-100"
                      variant="outlined"
                      label={t('username')}
                      onChange={this.handleChange}
                      type="text"
                      name="username"
                      value={username}
                      //validators={["required", "isEmail"]}
                      validators={["required"]}
                      errorMessages={[
                        "this field is required"
                      ]}
                    />
                    <TextValidator
                      className="mb-16 w-100"
                      label={t('password')}
                      variant="outlined"
                      onChange={this.handleChange}
                      name="password"
                      type="password"
                      value={password}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                    <div className="flex flex-middle mb-8">
                      <div className={classes.wrapper}>
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={this.props.login.loading}
                          type="submit"
                        >
                          {t("sign_in.title")}
                        </Button>
                        {this.props.login.loading && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      </div>
                      <span className="ml-16 mr-8">{t('general.or')}</span>
                      <Button
                        className="capitalize"
                        onClick={() =>
                          this.props.history.push("/session/signup-register-account")
                        }
                      >
                        {t("sign_up.title")}
                      </Button>
                    </div>
                    <Button
                      className="text-primary"
                      onClick={() =>
                        this.props.history.push("/session/forgot-password")
                      }
                    >
                      {t("forgot_password")}
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

const mapStateToProps = state => ({
  loginWithEmailAndPassword: PropTypes.func.isRequired,
  login: state.login
});
export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(
      mapStateToProps,
      { loginWithEmailAndPassword }
    )(SignIn)
  )
);
