import React, { Component } from "react";
import {
  IconButton,
  Dialog,
  Button,
  Icon,
  Grid,
  DialogActions,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  addNewData,
  updateData,
  getRole,
  checkUsername,
  checkEmail,
} from "./EmployeeService";
import { Autocomplete } from "@material-ui/lab";
import MenuItem from "@material-ui/core/MenuItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
import UploadImage from "./UploadImage";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";
import ConstantList from "../../appConfig";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useTranslation, withTranslation, Trans } from "react-i18next";
toast.configure();
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
function MaterialButton(props) {
  const { t, i18n } = useTranslation();
  const item = props.item;
  return (
    <div>
      <IconButton onClick={() => props.onSelect(item, 0)}>
        <Icon color="primary">edit</Icon>
      </IconButton>
      <IconButton onClick={() => props.onSelect(item, 1)}>
        <Icon color="error">delete</Icon>
      </IconButton>
    </div>
  );
}
class EmployeeDialog extends Component {
  state = {
    username: "",
    password: "",
    code: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    birthDay: new Date(),
    gender: "",
    address: "",
    role: {},
    roles: [],
    userId: "",
    imagePath: "",
    imagePreviewUrl: "",
    mainImageUrl: "",
    totalElements: 0,
    rowsPerPage: 25,
    page: 0,
    confirmPassword: "",
    editPassword: false,
  };

  handleChange = (event, source) => {
    event.persist();
    if (source === "editPassword") {
      this.setState({
        editPassword: event.target.checked,
      });
      return;
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({ birthDay: date });
  };
  selectRole = (roleSelected) => {
    this.setState({ role: roleSelected }, function () {});
  };

  handleFormSubmit = () => {
    let { email, username, id, userId } = this.state;
    this.setState({ disabled: true });
    // this.props.handleOKEditClose();
    checkUsername({ ...this.state }).then((username1) => {
      if (username1.data) {
        toast.warn("Username đã được sử dụng");
        this.setState({ disabled: false });
      } else {
        checkEmail({ ...this.state }).then((email1) => {
          if (email1.data) {
            toast.warn("Email đã được sử dụng");
            this.setState({ disabled: false });
          } else {
            if (!id) {
              addNewData({
                ...this.state,
              })
                .then((res) => {
                  if (this.state.file !== null) {
                    // console.log("WWWWWWWWWWWWWW)");
                    const url = ConstantList.API_ENPOINT + "/api/upload/avatar";
                    let formData = new FormData();
                    formData.append("file", this.state.file);
                    formData.append("employeeId", res.data.id);
                    const config = {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                    };
                    axios.post(url, formData, config).then((res1) => {
                      console.log("WWWWWWWWWWWWWW");
                      console.log(res1);
                    });
                  }
                })
                .then((data) => {
                  var { t, i18n } = this.props;
                  toast.success(t("general.success"));
                  this.props.handleOKEditClose();
                });
            } else {
              updateData(
                {
                  ...this.state,
                },
                id,
                userId
              )
                .then((res) => {
                  if (this.state.file !== null) {
                    // console.log("WWWWWWWWWWWWWW)");
                    const url = ConstantList.API_ENPOINT + "/api/upload/avatar";
                    let formData = new FormData();
                    formData.append("file", this.state.file);
                    formData.append("employeeId", res.data.id);
                    const config = {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                    };
                    axios.post(url, formData, config).then((res1) => {
                      // console.log("WWWWWWWWWWWWWW");
                      console.log(res1);
                    });
                  }
                })
                .then((data) => {
                  var { t, i18n } = this.props;
                  toast.success(t("general.success"));
                  this.props.handleOKEditClose();
                });
            }
          }
        });
      }
    });
  };

  componentWillMount() {
    if (!this.props.item.id) {
      this.setState({
        editPassword: true,
      });
    }
    this.setState({
      ...this.props.item,
    });
    this.setState({
      userId: this.props.userId,
    });
    ValidatorForm.removeValidationRule("isPasswordMatch");
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });
    getRole().then((role) => {
      this.setState({ roles: role.data.content });
    });
    if (this.state.userId != null) {
      this.setState({ confirmPassword: this.state.password });
    }
  }
  handleImageSelect = (file) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };
  handleImageRemove = () => {
    this.setState({
      file: null,
      imagePreviewUrl: "",
    });
  };

  render() {
    let {
      id,
      username,
      password,
      code,
      fullName,
      email,
      phoneNumber,
      birthDay,
      gender,
      address,
      role,
      roles,
      disabled,
      imagePreviewUrl,
      mainImageUrl,
      confirmPassword,
      editPassword,
    } = this.state;
    let { open, handleClose, handleOKEditClose, t, i18n } = this.props;
    let genders = ["Nam", "Nữ", "Không rõ"];
    // console.log(editPassword);
    return (
      <Dialog open={open} PaperComponent={PaperComponent} maxWidth="md">
        <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
          <div
            style={{ cursor: "move" }}
            id="draggable-dialog-title"
            className="flex flex-space-between flex-middle pl-16 pr-8 py-8 bg-primary"
          >
            <h4 className="m-0 text-white">
              {this.state.id ? t("general.edit") : t("general.add")}
            </h4>
            <IconButton onClick={this.props.handleClose}>
              <Icon className="text-white">clear</Icon>
            </IconButton>
          </div>
          <DialogContent>
            <Grid className="mb-10" container spacing={3}>
              <Grid item md={12} sm={12} xs={12}>
                <UploadImage
                  className="w-30"
                  handleImageSelect={this.handleImageSelect}
                  handleImageRemove={this.handleImageRemove}
                  mainImageUrl={mainImageUrl}
                  imagePreviewUrl={imagePreviewUrl}
                  t={t}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100 mb-10"
                  label={t("employee.fullName")}
                  variant="outlined"
                  size="small"
                  onChange={this.handleChange}
                  type="text"
                  name="fullName"
                  value={fullName}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100 mb-10"
                  label={t("employee.code")}
                  variant="outlined"
                  size="small"
                  onChange={this.handleChange}
                  type="text"
                  name="code"
                  value={code}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100 mb-10"
                  label={t("employee.username")}
                  variant="outlined"
                  size="small"
                  onChange={this.handleChange}
                  type="text"
                  name="username"
                  value={username}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  variant="outlined"
                  size="small"
                  label={t("employee.email")}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  value={email}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "Email is not valid",
                  ]}
                />
              </Grid>
              {id && (
                <Grid item md={12} sm={12} xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={editPassword}
                        onChange={(event) =>
                          this.handleChange(event, "editPassword")
                        }
                        name="editPassword"
                        color="primary"
                      />
                    }
                    label="Đổi mật khẩu"
                  />
                </Grid>
              )}
              {editPassword && (
                <Grid item md={6} sm={6} xs={12}>
                  <TextValidator
                    className="w-100"
                    variant="outlined"
                    size="small"
                    label={t("employee.password")}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    value={password}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                </Grid>
              )}
              {editPassword && (
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <TextValidator
                    className="mb-16 w-100"
                    label={
                      <span>
                        <span style={{ color: "red" }}>*</span>
                        {t("employee.confirmPassword")}
                      </span>
                    }
                    variant="outlined"
                    size="small"
                    onChange={this.handleChange}
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    validators={["required", "isPasswordMatch"]}
                    errorMessages={[
                      "This field is required",
                      "Password mismatch",
                    ]}
                  />
                </Grid>
              )}

              <Grid item md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  variant="outlined"
                  size="small"
                  label={t("employee.phone")}
                  onChange={this.handleChange}
                  type="number"
                  name="phoneNumber"
                  value={phoneNumber}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: 0,
                      padding: "0px !important",
                    }}
                    disableToolbar
                    variant="outlined"
                    size="small"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label={t("employee.birthDay")}
                    value={birthDay}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <Autocomplete
                  options={genders}
                  defaultValue={gender}
                  size="small"
                  style={{ width: "100%" }}
                  onChange={(event, value) => {
                    switch (value) {
                      case "Nam":
                        this.setState({
                          gender: "Nam",
                        });
                        break;
                      case "Nữ":
                        this.setState({
                          gender: "Nu",
                        });
                        break;
                      case "Không rõ":
                        this.setState({
                          gender: "Bede",
                        });
                        break;
                      default:
                        break;
                    }
                    this.setState({ gender: value });
                  }}
                  renderInput={(params) => (
                    <TextValidator
                      {...params}
                      value={gender}
                      label={t("employee.gender")}
                      fullWidth
                      validators={["required"]}
                      errorMessages={[t("Validation.this_field_is_required")]}
                    />
                  )}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <Autocomplete
                  disableClearable
                  options={roles}
                  size="small"
                  defaultValue={role}
                  disableCloseOnSelect
                  getOptionSelected={(option, value) => option.id === value.id}
                  getOptionLabel={(option) => option.name}
                  onChange={(event, value) => {
                    this.selectRole(value);
                  }}
                  style={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextValidator
                      {...params}
                      value={role}
                      label={t("employee.role")}
                      fullWidth
                      validators={["required"]}
                      errorMessages={[t("Validation.this_field_is_required")]}
                    />
                  )}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextValidator
                  className="w-100"
                  variant="outlined"
                  size="small"
                  label={t("employee.address")}
                  onChange={this.handleChange}
                  type="test"
                  name="address"
                  value={address}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <div className="flex flex-space-between flex-middle mt-36">
              <Button
                variant="contained"
                color="secondary"
                className="mr-36"
                onClick={() => this.props.handleClose()}
              >
                {t("general.cancel")}
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={disabled}
              >
                {t("general.save")}
              </Button>
            </div>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    );
  }
}

export default EmployeeDialog;
