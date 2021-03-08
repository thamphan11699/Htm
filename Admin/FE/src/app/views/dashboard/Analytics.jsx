import React, { Component, Fragment } from "react";
import {
  Grid,
  TablePagination,
} from "@material-ui/core";
import MaterialTable, {
  MTableToolbar,
} from "material-table";
import TextField from '@material-ui/core/TextField';
import { Breadcrumb, SimpleCard, EgretProgressBar } from "egret";
import DashboardWelcomeCard from "../cards/DashboardWelcomeCard";
import { getAnalytics } from "./DashboardService";
import { format } from "date-fns";
import { withStyles } from "@material-ui/styles";
import { Helmet } from "react-helmet";
import { searchByPage as getAllRoom } from "../Room/RoomService";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";
import { searchByPage as getCustomer } from "../ListCustomer/ListCustomerService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
// import localStorageService from "../../services/localStorageService";

class Dashboard1 extends Component {
  state = {
    rowsPerPage: 10,
    startDate: new Date(),
    endDate: new Date(),
    revenue: 0,
    customers: 0,
    page: 0,
    totalElements: 0,
    itemList: [],
    analytics: {},
    assetCountByDate: [],
    allocationVoucherCountByDate: [],
    transferVoucherCountByDate: [],
    maintainRequestCountByDate: [],
  };

  componentDidMount() {
    this.updatePageData();
    this.updateAnalytics();
  }
  updateAnalytics = () => {
    getAnalytics({ startDate: this.state.startDate, endDate: this.state.endDate }).then(({ data }) => {
      this.setState({
        revenue: data.revenue,
        customers: data.totalCustomer,
      })
    })
  }
  updatePageData = () => {
    getAnalytics({ startDate: null, endDate: null }).then(({ data }) => {
      this.setState({ analytics: data });
    });
    getAllRoom({ pageSize: 1000000, pageIndex: 0, typeStatus: 0 }).then(
      ({ data }) => {
        this.setState({ totalRoom: data.totalElements });
      }
    );
    var searchObject = {};
    searchObject.keyword = this.state.keyword;
    searchObject.pageIndex = this.state.page + 1;
    searchObject.pageSize = this.state.rowsPerPage;
    searchObject.customerType = 0;
    getCustomer(searchObject).then(({ data }) => {
      this.setState({
        itemList: [...data.content],
        totalElements: data.totalElements,
      });
    });
  };
  handleChangePage = (event, newPage) => {
    this.setPage(newPage);
  };
  setRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value, page: 0 }, function () {
      this.updatePageData();
    });
  };
  handleDateChange = (date, source) => {
    let {endDate} = this.state;
    if (source === "startDate") {
      console.log(date.getTime() - endDate.getTime());
      if (date.getTime() - endDate.getTime() < 0) {
        this.setState({ startDate: date }, () => {
          this.updateAnalytics();
        });
      } else {
        toast.warning("Ngày bắt đầu phải nhỏ hơn ngày kết thúc")
      }
      
      return;
    }
    else if (source === "endDate") {
      this.setState({ endDate: date }, () => {
        this.updateAnalytics();
      });
    }
  }

  render() {
    const { theme } = this.props;
    const { t, i18n } = this.props;
    let TitlePage = t("Dashboard.dashboard");

    let {
      analytics,
      totalRoom,
      page,
      rowsPerPage,
      itemList,
      totalElements,
      startDate,
      endDate,
      revenue,
      customers,
    } = this.state;
    
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 2,
    });
    let newRevenue = formatter.format(revenue);
    console.log(newRevenue);
    let columns = [
      { title: t("name"), field: "name", align: "left", width: "150" },
      { title: t("email"), field: "email", align: "left", width: "150" },
      { title: t("phone"), field: "phone", align: "left", width: "150" },
      { title: t("status"), field: "status", align: "left", width: "150" },
      {
        title: "Số tiền thanh toán",
        field: "totalMoney",
        align: "left",
        width: "150",
        render: (rowData) => <p>{formatter.format(rowData.totalMoney)}</p>,
      },
    ];
    return (
      <div className="analytics m-sm-30">
        <Helmet>
          <title>{TitlePage}</title>
        </Helmet>
        <div className="mb-sm-30">
          <Breadcrumb routeSegments={[{ name: t("Dashboard.dashboard") }]} />
        </div>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <DashboardWelcomeCard
              t={t}
              analytics={analytics}
              totalRoom={totalRoom}
            />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <h4>Thống kê</h4>
            <Grid container spacing={3} className="mt-30">
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDateTimePicker
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: 0,
                      padding: "0px !important",
                    }}
                    disableToolbar
                    inputVariant="outlined"
                    size="small"
                    format="dd/MM/yyyy HH:mm"
                    margin="normal"
                    id="date-picker-inline"
                    label={
                      <span>
                        <span style={{ color: "red" }}>*</span>
                        Ngày bắt đầu
                      </span>
                    }
                    value={startDate}
                    onChange={(date) =>
                      this.handleDateChange(date, "startDate")
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDateTimePicker
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: 0,
                      padding: "0px !important",
                    }}
                    disableToolbar
                    inputVariant="outlined"
                    size="small"
                    format="dd/MM/yyyy HH:mm"
                    margin="normal"
                    minDate={startDate}
                    id="date-picker-inline"
                    label={
                      <span>
                        <span style={{ color: "red" }}>*</span>
                        Ngày kết thúc
                      </span>
                    }
                    value={endDate}
                    onChange={(date) =>
                      this.handleDateChange(date, "endDate")
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item lg={3}md={3} sm={6} xs={12}>
                <TextField
                  className="w-100"
                  label="Doanh thu"
                  style={{color: "red"}}
                  disabled={true}
                  type="text"
                  size="small"
                  variant="outlined"
                  name="revenue"
                  value={newRevenue}
                  // validators={["required"]}
                  // errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item lg={3}md={3} sm={6} xs={12}>
                <TextField
                  className="w-100"
                  label="Khách hàng"
                  style={{color: "red"}}
                  disabled={true}
                  type="text"
                  size="small"
                  variant="outlined"
                  name="customer"
                  value={customers}
                  // validators={["required"]}
                  // errorMessages={["this field is required"]}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <MaterialTable
              title={t("general.list")}
              localization={{
                body: {
                  emptyDataSourceMessage: `${t(
                    "general.emptyDataMessageTable"
                  )}`,
                },
                toolbar: {
                  nRowsSelected: `${t("general.select")}`,
                },
              }}
              data={itemList}
              columns={columns}
              parentChildData={(row, rows) =>
                rows.find((a) => a.id === row.parentId)
              }
              parentChildData={(row, rows) => {
                var list = rows.find((a) => a.id === row.parentId);
                return list;
              }}
              options={{
                headerStyle: {
                  color: "#ffffff",
                  backgroundColor: "#7467ef",
                },
                rowStyle: (rowData) => ({
                  backgroundColor:
                    rowData.tableData.id % 2 === 0 ? "#ffffff" : "#eeeeee",
                }),
                // selection: true,
                actionsColumnIndex: -1,
                paging: false,
                search: false,
              }}
              components={{
                Toolbar: (props) => <MTableToolbar {...props} />,
              }}
              onSelectionChange={(rows) => {
                this.data = rows;
                this.setState({ selectedItems: rows });
              }}
            />
            <TablePagination
              labelRowsPerPage={t("general.rowperpage")}
              align="left"
              className="px-16"
              rowsPerPageOptions={[1, 2, 3, 5, 10, 25, 50, 100]}
              component="div"
              count={totalElements}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                "aria-label": "Previous Page",
              }}
              nextIconButtonProps={{
                "aria-label": "Next Page",
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.setRowsPerPage}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles({}, { withTheme: true })(Dashboard1);
