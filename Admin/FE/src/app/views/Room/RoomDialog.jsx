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
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  addNewData,
  updateData,
  checkCode
} from "./RoomService";
import {searchByPage as getType} from "../Type/TypeService";
import {searchByPage as getPrice} from "../Price/PriceService";
import {searchByPage as getPromotion} from "../Promotion/PromotionService";
import { Autocomplete } from "@material-ui/lab";
import MenuItem from "@material-ui/core/MenuItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
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
class RoomDialog extends Component {
  state = {
    code: "",
    name: "",
    status: false,
    listType: [],
    listPrice: [],
    listPPromotion: [],
    types: [],
    prices: [],
    promotions : [],
    totalElements: 0,
    rowsPerPage: 25,
    page: 0,
    confirmPassword: "",
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
          updateData({
            ...this.state
          }, id).then(() => {
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
  componentDidMount() {
    getPrice({pageSize: 1000000, pageIndex: 0}).then(({ data}) => {
        this.setState({
            listPrice: [...data.content]
        })
    })
    getType({pageSize: 1000000, pageIndex: 0}).then(({ data}) => {
        this.setState({
            listType: [...data.content]
        })
    })
    getPromotion({pageSize: 1000000, pageIndex: 0}).then(({ data}) => {
        this.setState({
            listPPromotion: [...data.content]
        })
    })
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
  selectPromotions = (select) => {
      this.setState({
          promotions: select,
      })
  }
  selectType = (select) => {
      this.setState({
          types: select,
      })
  }
  selectPrice = (select) => {
      this.setState({
          prices: select,
      })
  }

  render() {
    let {
      id,
      code,
      name,
      disabled,
      listPPromotion,
      listPrice,
      listType,
      types,
      prices,
      promotions,
    } = this.state;
    let { open, handleClose, handleOKEditClose, t, i18n } = this.props;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
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
            <Grid className="mb-10 mt-10" container spacing={3}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  label={
                    <span>
                      <span style={{ color: "red" }}>*</span>
                      {t("Code")}
                    </span>
                  }
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
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  label={t("Name")}
                  variant="outlined"
                  size="small"
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  value={name ? name : ""}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                {listType && (
                  <Autocomplete
                    multiple
                    options={listType ? listType : []}
                    defaultValue={types ? types : []}
                    disableClearable
                    inputVariant="outlined"
                    size="small"
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
                        variant="outlined"
                        label={
                          <span>
                            <span style={{ color: "red" }}>*</span>
                            {t("Loại phòng")}
                          </span>
                        }
                        fullWidth
                        validators={["required"]}
                        errorMessages={[t("Validation.this_field_is_required")]}
                      />
                    )}
                  />
                )}
              </Grid>
              <Grid item lg={6}md={6} sm={6} xs={12}>
                {listPPromotion && (
                  <Autocomplete
                    multiple
                    size="small"
                    options={listPPromotion ? listPPromotion : []}
                    defaultValue={promotions ? promotions : []}
                    disableClearable
                    // disableCloseOnSelect
                    getOptionSelected={(option, value) =>
                      option.id === value.id
                    }
                    getOptionLabel={(option) => option.name}
                    onChange={(event, value) => {
                      this.selectPromotions(value);
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
                        value={promotions}
                        variant="outlined"
                        label={
                          <span>
                            <span style={{ color: "red" }}>*</span>
                            {t("Khuyến mãi")}
                          </span>
                        }
                        fullWidth
                        validators={["required"]}
                        errorMessages={[t("Validation.this_field_is_required")]}
                      />
                    )}
                  />
                )}
              </Grid>                
              <Grid item lg={12}md={12} sm={6} xs={12}>
                {listPrice && (
                  <Autocomplete
                    multiple
                    size="small"
                    options={listPrice ? listPrice : []}
                    defaultValue={prices ? prices : []}
                    disableClearable
                    // disableCloseOnSelect
                    getOptionSelected={(option, value) =>
                      option.id === value.id
                    }
                    getOptionLabel={(option) => option.name}
                    onChange={(event, value) => {
                      this.selectPrice(value);
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
                        value={prices}
                        variant="outlined"
                        label={
                          <span>
                            <span style={{ color: "red" }}>*</span>
                            {t("Gía phòng")}
                          </span>
                        }
                        fullWidth
                        validators={["required"]}
                        errorMessages={[t("Validation.this_field_is_required")]}
                      />
                    )}
                  />
                )}
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

export default RoomDialog;
