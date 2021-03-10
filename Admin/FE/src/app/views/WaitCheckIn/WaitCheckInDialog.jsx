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
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { Autocomplete } from "@material-ui/lab";
import { getRoom, checkIn, checkIn1 } from "./WaitCheckInService";
import { searchByPage as getType } from "../Type/TypeService";
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import DialogContent from "@material-ui/core/DialogContent";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import MaterialTable, {
  MTableToolbar,
  Chip,
  MTableBody,
  MTableHeader,
} from "material-table";
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
class WaitCheckInDialog extends Component {
  state = {
    name: "",
    code: "",
    value: "",
    totalElements: 0,
    rowsPerPage: 25,
    listRoom: [],
    listType: [],
    types: {},
    room: {},
    rooms: {},
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
    if ( id ) {
      checkIn1({ ...this.state }, id).then(({ data }) => {
        toast.success(t("general.success"));
        this.props.handleOKEditClose();
      });
    } else {
      checkIn({ ...this.state }).then(({ data }) => {
        toast.success(t("general.success"));
        this.props.handleOKEditClose();
      });
    }
    
  };

  updateListType = () => {
    getRoom({
      pageIndex: 0,
      pageSize: 10000001,
      type: this.state.types.name,
      typeStatus: 0,
      adults: this.state.adults,
      children: this.state.children, 
    }).then(({ data }) => {
      this.setState({
        listRoom: [...data.content],
      });
    });
  };

  componentWillMount() {
    this.setState({
      ...this.props.item,
    });
    getType({ pageSize: 1000000, pageIndex: 0 }).then(({ data }) => {
      this.setState(
        {
          listType: [...data.content],
        },
        () => {}
      );
    });
  }
  selectType = (roleSelected) => {
    this.setState({ types: roleSelected }, function () {
        this.updateListType();
    });
  };
  selectRoom = (select) => {
    this.setState({
      room: select,
    });
  };
  handleDateChange = (date, source) => {
    if (source === "checkInDate") {
      this.setState({
        checkInDate: date,
      })
      return;
    }
    if (source === "checkOutDate") {
      this.setState({
        checkOutDate: date,
      })
      return;
    }
  };

  render() {
    let { id } = this.state;
    let {
      name,
      code,
      description,
      children,
      disabled,
      email,
      phone,
      checkInDate,
      checkOutDate,
      adults,
      promotionCode,
      listRoom,
      room,
      listType,
      types,
      identityCard
    } = this.state;
    let { open, handleClose, handleOKEditClose, t, i18n } = this.props;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    return (
      <Dialog open={open} PaperComponent={PaperComponent} maxWidth="md">
        <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
          <div
            style={{ cursor: "move" }}
            id="draggable-dialog-title"
            className="flex flex-space-between flex-middle pl-16 pr-8 py-8 bg-primary"
          >
            <h4 className="m-0 text-white">
              Check in
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
                <TextValidator
                  className="w-100"
                  label={t("identityCard")}
                  onChange={this.handleChange}
                  type="text"
                  size="small"
                  variant="outlined"
                  name="identityCard"
                  value={identityCard}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  label={t("email")}
                  onChange={this.handleChange}
                  type="text"
                  size="small"
                  variant="outlined"
                  name="email"
                  value={email}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  label={t("phone")}
                  onChange={this.handleChange}
                  type="text"
                  size="small"
                  variant="outlined"
                  name="phone"
                  value={phone}
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
                    inputVariant="outlined"
                    size="small"
                    format="dd/MM/yyyy"
                    margin="normal"
                    minDate={new Date()}
                    id="date-picker-inline"
                    label={
                      <span>
                        <span style={{ color: "red" }}>*</span>
                        {t("checkInDate")}
                      </span>
                    }
                    value={checkInDate}
                    onChange={(date) =>
                      this.handleDateChange(date, "checkInDate")
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
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
                    inputVariant="outlined"
                    size="small"
                    format="dd/MM/yyyy"
                    margin="normal"
                    minDate={checkInDate}
                    id="date-picker-inline"
                    label={
                      <span>
                        <span style={{ color: "red" }}>*</span>
                        {t("checkOutDate")}
                      </span>
                    }
                    value={checkOutDate}
                    onChange={(date) =>
                      this.handleDateChange(date, "checkOutDate")
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  label={t("adults")}
                  onChange={this.handleChange}
                  type="number"
                  size="small"
                  variant="outlined"
                  name="adults"
                  value={adults}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  label={t("children")}
                  onChange={this.handleChange}
                  type="number"
                  size="small"
                  variant="outlined"
                  name="children"
                  value={children}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  label={t("promotionCode")}
                  onChange={this.handleChange}
                  type="text"
                  size="small"
                  variant="outlined"
                  name="promotionCode"
                  value={promotionCode}
                  // validators={["required"]}
                  // errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  label={t("desc")}
                  multiLine
                  rowsMax={4}
                  onChange={this.handleChange}
                  type="text"
                  size="small"
                  variant="outlined"
                  name="description"
                  value={description}
                  // validators={["required"]}
                  // errorMessages={["this field is required"]}
                />
              </Grid>
              {listType && (
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Autocomplete
                    disableClearable
                    options={listType}
                    variant="outlined"
                    size="small"
                    defaultValue={types}
                    // disableCloseOnSelect
                    getOptionSelected={(option, value) =>
                      option.id === value.id
                    }
                    getOptionLabel={(option) => option.name}
                    onChange={(event, value) => {
                      this.selectType(value);
                    }}
                    renderOption={(option, { selected }) => (
                      <React.Fragment>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {option.name}
                      </React.Fragment>
                    )}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextValidator
                        {...params}
                        value={types}
                        label={
                          <span>
                            <span style={{ color: "red" }}>*</span>
                            {t("Chọn loại phòng")}
                          </span>
                        }
                        variant="outlined"
                        fullWidth
                        validators={["required"]}
                        errorMessages={[t("Validation.this_field_is_required")]}
                      />
                    )}
                  />
                </Grid>
              )}
              {listRoom && (
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Autocomplete
                    disableClearable
                    options={listRoom}
                    variant="outlined"
                    size="small"
                    defaultValue={room ? room : null}
                    // disableCloseOnSelect
                    getOptionSelected={(option, value) =>
                      option.id === value.id
                    }
                    getOptionLabel={(option) => option.name}
                    onChange={(event, value) => {
                      this.selectRoom(value);
                    }}
                    renderOption={(option, { selected }) => (
                      <React.Fragment>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {option.name}
                      </React.Fragment>
                    )}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextValidator
                        {...params}
                        value={room}
                        label={
                          <span>
                            <span style={{ color: "red" }}>*</span>
                            {t("Chọn phòng")}
                          </span>
                        }
                        variant="outlined"s
                        fullWidth
                        validators={["required"]}
                        errorMessages={[t("Validation.this_field_is_required")]}
                      />
                    )}
                  />
                </Grid>
              )}
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

export default WaitCheckInDialog;
