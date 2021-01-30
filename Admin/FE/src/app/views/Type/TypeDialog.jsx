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
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { Autocomplete } from "@material-ui/lab";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  addNewData,
  updateData,
  checkCode,
} from "./TypeService";
import {searchByPage as getAmenities } from "../Ameniti/AmenitiService";
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
class TypeDialog extends Component {
  state = {
    name: "",
    code: "",
    value: "",
    adults: "",
    listAmenities: [],
    amenities: [],
    totalElements: 0,
    rowsPerPage: 10,
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
    getAmenities({pageSize: 10000, pageIndex: 1}).then(({data}) => {
      this.setState({
        listAmenities: [...data.content],
      })
    })
  }
  selectAmenities = (select) => {
    this.setState({
      amenities: select,
    })
  }


  render() {
    let { id } = this.state;
    console.log(id);
    let { name, code, description, children, adults, disabled, listAmenities, amenities } = this.state;
    let { open,  t } = this.props;
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
                <TextValidator
                  className="w-100"
                  label={t("children")}
                  onChange={this.handleChange}
                  type="text"
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
                  label={t("adults")}
                  onChange={this.handleChange}
                  type="text"
                  size="small"
                  variant="outlined"
                  name="adults"
                  value={adults}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item  md={6} sm={6} xs={12}>
                {listAmenities && (
                  <Autocomplete
                    multiple
                    options={listAmenities ? listAmenities : []}
                    defaultValue={amenities ? amenities : []}
                    disableClearable
                    inputVariant="outlined"
                    size="small"
                    getOptionSelected={(option, value) =>
                      option.id === value.id
                    }
                    getOptionLabel={(option) => option.name}
                    onChange={(event, value) => {
                      this.selectAmenities(value);
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
                        value={listAmenities}
                        variant="outlined"
                        label={
                          <span>
                            <span style={{ color: "red" }}>*</span>
                            {t("Tiện nghi")}
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

export default TypeDialog;
