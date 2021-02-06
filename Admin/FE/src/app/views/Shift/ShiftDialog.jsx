import React, { Component } from "react";
import {
  IconButton,
  Dialog,
  Button,
  Icon,
  Grid,
  FormControlLabel,
  TablePagination,
  Switch,
  DialogActions,
  Checkbox,
} from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  addNewData,
  updateData,
  getItemById,
  checkCode,
  checkName,
} from "./ShiftService";
import DialogContent from "@material-ui/core/DialogContent";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
import DateFnsUtils from "@date-io/date-fns";
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
class ShiftDialog extends Component {
  state = {
    name: "",
    code: "",
    value: "",
    totalElements: 0,
    rowsPerPage: 25,
    page: 0,
  };

  handleChange = (event, source) => {
    event.persist();
    if (source === "switch") {
      this.setState({ isActive: event.target.checked });
      return;
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = () => {
    let { id } = this.state;
    let { t, i18n } = this.props;
    this.setState({ disabled: true });
    checkCode({ ...this.state }).then(({ data }) => {
      if (data) {
        toast.warn(t("Validation.code"));
        this.setState({ disabled: false });
      } else {
        if (!id) {
          addNewData({
            ...this.state,
          }).then(() => {
            toast.success(t("general.success"));
            this.props.handleOKEditClose();
          });
        } else {
          updateData(
            {
              ...this.state,
            },
            id
          ).then(() => {
            toast.success(t("general.success"));
            this.props.handleOKEditClose();
          });
        }
      }
    });
  };

  componentWillMount() {
    this.setState({
      ...this.props.item,
    });
  }
  handleChangeStartTime = (time) => {
    this.setState({
      startTime: time,
    });
  };
  handleChangeEndTime = (time) => {
    this.setState({
      endTime: time,
    });
  };

  render() {
    let { id } = this.state;
    let { name, code, startTime, endTime, totalHours, disabled } = this.state;
    let { open, handleClose, handleOKEditClose, t, i18n } = this.props;
    return (
      <Dialog open={open} PaperComponent={PaperComponent} maxWidth="sm">
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
            <Grid className="mb-10 mt-10" container spacing={3}>
              <Grid item md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  label={t("code")}
                  onChange={this.handleChange}
                  size="small"
                  variant="outlined"
                  type="text"
                  name="code"
                  value={code}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  label={t("name")}
                  onChange={this.handleChange}
                  type="text"
                  size="small"
                  variant="outlined"
                  name="name"
                  value={name}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} variant="outlined">
                  <KeyboardTimePicker
                    className="w-100"
                    id="time-picker"
                    inputVariant="outlined"
                    size="small"
                    label={t("startTime")}
                    value={startTime ? startTime : null}
                    onChange={this.handleChangeStartTime}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} variant="outlined">
                  <KeyboardTimePicker
                    className="w-100"
                    inputVariant="outlined"
                    size="small"
                    id="time-picker"
                    label={t("endTime")}
                    value={endTime ? endTime : null}
                    onChange={this.handleChangeEndTime}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextValidator
                  className="w-100"
                  variant="outlined"
                  label={t("totalHours")}
                  onChange={this.handleChange}
                  type="number"
                  size="small"
                  variant="outlined"
                  name="totalHours"
                  value={totalHours}
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

export default ShiftDialog;
