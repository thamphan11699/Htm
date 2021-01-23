import React, { Component } from "react";
import {
  IconButton,
  Grid,
  Icon,
  TablePagination,
  Button,
  TextField,
  Tooltip,
  DialogActions,
  Checkbox,
  Dialog
} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import MaterialTable, {
  MTableToolbar,
  Chip,
  MTableBody,
  MTableHeader,
} from "material-table";
import { checkIn, getRoom } from "./CheckInService";
// import CheckInDialog from "./CheckInDialog";
import { Breadcrumb, ConfirmationDialog } from "egret";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { saveAs } from "file-saver";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { searchByPage as getType } from "../Type/TypeService";
import { Autocomplete } from "@material-ui/lab";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";
toast.configure();

function MaterialButton(props) {
  const { t, i18n } = useTranslation();
  const item = props.item;

  return (
    <div>
      <Tooltip title="Accept">
        <IconButton onClick={() => props.onSelect(item, 0)}>
          <Icon color="primary">add</Icon>
        </IconButton>
      </Tooltip>
    </div>
  );
}

class CheckIn extends Component {
  state = {
    name: "",
    code: "",
    description: "",
    children: "",
    disabled: "",
    email: "",
    phone: "",
    checkInDate: new Date(),
    checkOutDate: null,
    adults: "",
    promotionCode: "",
    listRoom: [],
    room: {},
    listType: [],
    types: {},
    identityCard: "",
    rowsPerPage: 25,
    page: 0,
    itemList: [],
    item: {},
    shouldOpenEditorDialog: false,
    shouldOpenConfirmationDialog: false,
    selectAllItem: false,
    selectedList: [],
    totalElements: 0,
    shouldOpenConfirmationDeleteAllDialog: false,
    keyword: "",
  };
  numSelected = 0;
  rowCount = 0;

  setPage = (page) => {
    this.setState({ page }, function () {
      this.updatePageData();
    });
  };

  handleTextChange = (event) => {
    this.setState({ keyword: event.target.value }, function () {});
  };

  handleKeyDownEnterSearch = (e) => {
    if (e.key === "Enter") {
      this.search();
    }
  };

  setRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value, page: 0 }, function () {
      this.updatePageData();
    });
  };

  handleChangePage = (event, newPage) => {
    this.setPage(newPage);
  };
  componentDidMount() {}

  componentWillMount() {
    getType({ pageSize: 1000000, pageIndex: 0 }).then(({ data }) => {
      this.setState(
        {
          listType: [...data.content],
        },
        () => {}
      );
    });
  }
  updateListType = () => {
    getRoom({
      pageIndex: 0,
      pageSize: 10000001,
      type: this.state.types.name,
    }).then(({ data }) => {
      this.setState({
        listRoom: [...data.content],
      });
    });
  };

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
  handleFormSubmit = () => {
    let { id } = this.state;
    let { t, i18n } = this.props;
    this.setState({ disabled: true });
    checkIn({ ...this.state }).then(({ data }) => {
      toast.success(t("general.success"));
      window.location.reload();
    });
  };
  render() {
    const { t, i18n } = this.props;
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
      identityCard,
    } = this.state;
    let TitlePage = t("CheckIn.title");
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    return (
      <div className="m-sm-30">
        <Helmet>
          <title>HTM | {TitlePage}</title>
        </Helmet>
        <div className="mb-sm-30">
          <Breadcrumb routeSegments={[{ name: t("CheckIn.title") }]} />
          <Grid>
            <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
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
                        autoOk
                        id="date-picker-inline"
                        disabled
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
                        autoOk
                        margin="normal"
                        minDate={new Date()}
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
                    //   validators={["required"]}
                    //   errorMessages={["this field is required"]}
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
                    //   validators={["required"]}
                    //   errorMessages={["this field is required"]}
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
                            fullWidth
                            variant="outlined"
                            validators={["required"]}
                            errorMessages={[
                              t("Validation.this_field_is_required"),
                            ]}
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
                            fullWidth
                            variant="outlined"
                            validators={["required"]}
                            errorMessages={[
                              t("Validation.this_field_is_required"),
                            ]}
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
                  <Button variant="contained" color="primary" type="submit">
                    {t("general.save")}
                  </Button>
                </div>
              </DialogActions>
            </ValidatorForm>
          </Grid>
        </div>
      </div>
    );
  }
}

export default CheckIn;
