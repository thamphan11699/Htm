import React, { Component } from 'react'
import {
  IconButton,
  Dialog,
  Button,
  Icon,
  Grid,
  DialogActions,
  Checkbox,
} from '@material-ui/core'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {
  addNewData,
  updateData,
  getRole,
  checkUsername,
  checkEmail,
} from './EmployeeService'
import { Autocomplete } from '@material-ui/lab';
import MenuItem from '@material-ui/core/MenuItem'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Draggable from 'react-draggable'
import Paper from '@material-ui/core/Paper';
import UploadImage from "./UploadImage";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useTranslation, withTranslation, Trans } from 'react-i18next'
toast.configure();
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  )
}
function MaterialButton(props) {
  const { t, i18n } = useTranslation()
  const item = props.item
  return (
    <div>
      <IconButton onClick={() => props.onSelect(item, 0)}>
        <Icon color="primary">edit</Icon>
      </IconButton>
      <IconButton onClick={() => props.onSelect(item, 1)}>
        <Icon color="error">delete</Icon>
      </IconButton>
    </div>
  )
}
class EmployeeDialog extends Component {
  state = {
    username : "", 
    password : "",
    fullName : "", 
    email : "", 
    phoneNumber : "", 
    birthDay : new Date(), 
    gender : "", 
    address : "", 
    role : {}, 
    roles : [], 
    userId: "",
    imagePath: "",
    totalElements: 0,
    rowsPerPage: 25,
    page: 0,
  }

  handleChange = (event, source) => {
    event.persist()
    if (source === 'switch') {
      this.setState({ isActive: event.target.checked })
      return
    }
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleDateChange = date => {
    this.setState({ birthDay: date });
  };
  selectRole = (roleSelected) => {
    this.setState({ role: roleSelected }, function () { });
  };

  handleFormSubmit = () => {
    let { email, username, id, userId } = this.state;
    this.setState({disabled:true})
    // this.props.handleOKEditClose();
    checkUsername({...this.state}).then((res) => {
        if(res.data) {
            toast.warn("Username đã được sử dụng");
            this.setState({disabled: false});
        } else {
            checkEmail({...this.state}).then((resemail) => {
                if(resemail.data) {
                    toast.warn("Email đã được sử dụng");
                    this.setState({disabled: false});
                } else {
                    if (!id) {
                        addNewData({
                            ...this.state
                        }).then(() => {
                            this.setState({loading:false})
                            this.props.handleOKEditClose()
                            var { t, i18n } = this.props;
                            toast.success(t('general.success'));
                        })
                    } else {
                        updateData({
                            ...this.state
                        }, id, userId).then(() => {
                            this.setState({loading:false})
                            this.props.handleOKEditClose()
                            var { t, i18n } = this.props;
                            toast.success(t('general.success'));
                        })
                        }

                        this.props.handleClose();
                }
            })
        }
    })
      
  }

  componentWillMount() {
    this.setState({
      ...this.props.item,
    })
    
  }
  componentDidMount() {
      this.setState({
          userId: this.props.userId,
      })
      getRole().then(role => {
          this.setState({roles: role.data.content});
      })
      console.log(this.props.userId);
  }
  handleImageSelect = (file) => {
    this.setState({ file: file })

  };
  handleImageRemove = () => {
    this.setState({
      file: null,
      imagePreviewUrl: "",
    });
  };

  render() {
    
    let { username, password, fullName, email, phoneNumber, birthDay, gender, address, role, roles, imagePath, disabled, image } = this.state
    let { open, handleClose, handleOKEditClose, t, i18n } = this.props
    let genders = ["Nam", "Nữ", "Không rõ"];
    console.log(username, password);
    return (
      <Dialog open={open} PaperComponent={PaperComponent} maxWidth="md">
        <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
          <div
            style={{ cursor: 'move' }}
            id="draggable-dialog-title"
            className="flex flex-space-between flex-middle pl-16 pr-8 py-8 bg-primary"
          >
            <h4 className="m-0 text-white">
              {this.state.id ? t('general.edit') : t('general.add')}
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
                  mainImageUrl={imagePath}
                  imagePreviewUrl={image}
                  t={t}
                />
              </Grid>
            <Grid item  md={12} sm={12} xs={12}>
                <TextValidator
                  className="w-100 mb-10"
                  label={t('employee.fullName')}
                  variant="outlined"
                  size="small"
                  onChange={this.handleChange}
                  type="text"
                  name="fullName"
                  value={fullName}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
              </Grid>
              <Grid item  md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100 mb-10"
                  label={t('employee.username')}
                  variant="outlined"
                  size="small"
                  onChange={this.handleChange}
                  type="text"
                  name="username"
                  value={username}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
              </Grid>
              <Grid item  md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  variant="outlined"
                  size="small"
                  label={t('employee.password')}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  value={password}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
              </Grid>
              <Grid item  md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  variant="outlined"
                  size="small"
                  label={t('employee.email')}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  value={email}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
              </Grid>
              <Grid item  md={6} sm={6} xs={12}>
                <TextValidator
                  className="w-100"
                  variant="outlined"
                  size="small"
                  label={t('employee.phone')}
                  onChange={this.handleChange}
                  type="number"
                  name="phoneNumber"
                  value={phoneNumber}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
              </Grid>
              <Grid item  md={6} sm={6} xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        style={{width: '100%', height: '100%', margin: 0}}
                        disableToolbar
                        variant="outlined"
                        size="small"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label={t('employee.birthDay')}
                        value={birthDay}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item  md={6} sm={6} xs={12}>
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
              <Grid item  md={12} sm={12} xs={12}>
                <TextValidator
                  className="w-100"
                  variant="outlined"
                  size="small"
                  label={t('employee.address')}
                  onChange={this.handleChange}
                  type="test"
                  name="address"
                  value={address}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
              </Grid>
              <Grid item  md={12} sm={12} xs={12}>
                <Autocomplete
                    disableClearable
                    options={roles}
                    size="small"
                    defaultValue={role}
                    disableCloseOnSelect
                    getOptionSelected={(option, value) =>
                      option.id === value.id
                    }
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
                {t('general.cancel')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
        
                disabled={disabled}
                >
                {t('general.save')}
              </Button>
             

            </div>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    )
  }
}

export default EmployeeDialog;
