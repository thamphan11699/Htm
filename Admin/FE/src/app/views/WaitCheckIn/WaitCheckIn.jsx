import React, { Component } from "react";
import {
  IconButton,
  Grid,
  Icon,
  TablePagination,
  Button,
  TextField,
  Tooltip,
} from "@material-ui/core";
import MaterialTable, {
  MTableToolbar,
  Chip,
  MTableBody,
  MTableHeader,
} from "material-table";
import { checkIn, reject, searchByPage, getItemById } from "./WaitCheckInService";
import WaitCheckInDialog from "./WaitCheckInDialog";
import { Breadcrumb, ConfirmationDialog } from "egret";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { saveAs } from "file-saver";
import { Helmet } from "react-helmet";
import localStorageService from "../../services/localStorageService";
import history from "history.js";
import ConstantList from "../../appConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <Tooltip title="Reject">
        <IconButton onClick={() => props.onSelect(item, 1)}>
          <Icon color="error">block</Icon>
        </IconButton>
      </Tooltip>
    </div>
  );
}

class WaitCheckIn extends Component {
  state = {
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

  search() {
    this.setState({ page: 0 }, function () {
      var searchObject = {};
      searchObject.keyword = this.state.keyword;
      searchObject.pageIndex = this.state.page + 1;
      searchObject.pageSize = this.state.rowsPerPage;
      searchObject.customerType = 1;
      searchByPage(searchObject).then(({ data }) => {
        this.setState({
          itemList: [...data.content],
          totalElements: data.totalElements,
        });
      });
    });
  }

  updatePageData = () => {
    var searchObject = {};
    searchObject.keyword = this.state.keyword;
    searchObject.pageIndex = this.state.page + 1;
    searchObject.pageSize = this.state.rowsPerPage;
    searchObject.customerType = 1;
    searchByPage(searchObject).then(({ data }) => {
      this.setState({
        itemList: [...data.content],
        totalElements: data.totalElements,
      });
    });
  };

  // handleDownload = () => {
  //   var blob = new Blob(['Hello, world!'], { WaitCheckIn: 'text/plain;charset=utf-8' })
  //   saveAs(blob, 'hello world.txt')
  // }
  handleDialogClose = () => {
    this.setState({
      shouldOpenEditorDialog: false,
      shouldOpenConfirmationDialog: false,
      shouldOpenConfirmationDeleteAllDialog: false,
    });
  };

  handleOKEditClose = () => {
    this.setState({
      shouldOpenEditorDialog: false,
      shouldOpenConfirmationDialog: false,
    });
    this.updatePageData();
  };

  handleDeleteItem = (id) => {
    this.setState({
      id,
      shouldOpenConfirmationDialog: true,
    });
  };

  //   handleEditItem = (item) => {
  //     getItemById(item.id).then((result) => {
  //       this.setState({
  //         item: result.data,
  //         shouldOpenEditorDialog: true,
  //       });
  //     });
  //   };

  handleConfirmationResponse = () => {
    const { t, i18n } = this.props;
    if (this.state.itemList.length === 1) {
      let count = this.state.page - 1;
      this.setState({
        page: count,
      });
    } else if (this.state.itemList.length === 1 && this.state.page === 1) {
      this.setState({
        page: 1,
      });
    }
    // deleteItem(this.state.id)
    //   .then((res) => {
    //     this.handleDialogClose();
    //     this.updatePageData();
    //   })
    //   .catch((err) => {
    //     toast.warning(t("Category.checkduplicate"));
    //     this.handleDialogClose();
    //   });
  };

  componentDidMount() {
    this.updatePageData();
  }
  componentWillMount () {
    let user = localStorageService.getItem("auth_user");
    console.log(user);
    if (user == null) {
      history.push(ConstantList.LOGIN_PAGE);
    }
  }

  handleEditItem = (item) => {
    this.setState({
      item: item,
      shouldOpenEditorDialog: true,
    });
  };

  handleClick = (event, item) => {
    let { itemList } = this.state;
    if (item.checked == null) {
      item.checked = true;
    } else {
      item.checked = !item.checked;
    }
    var selectAllItem = true;
    for (var i = 0; i < itemList.length; i++) {
      if (itemList[i].checked == null || itemList[i].checked == false) {
        selectAllItem = false;
      }
      if (itemList[i].id == item.id) {
        itemList[i] = item;
      }
    }

    this.setState({
      selectAllItem: selectAllItem,
      itemList: itemList,
    });
  };
  handleSelectAllClick = (event) => {
    let { itemList } = this.state;
    for (var i = 0; i < itemList.length; i++) {
      itemList[i].checked = !this.state.selectAllItem;
    }
    this.setState({
      selectAllItem: !this.state.selectAllItem,
      itemList: itemList,
    });
  };

  handleDelete = (id) => {
    this.setState({
      id,
      shouldOpenConfirmationDialog: true,
    });
  };

  //   async handleDeleteList(list) {
  //     const { t, i18n } = this.props;
  //     let listAlert = [];
  //     for (var i = 0; i < list.length; i++) {
  //       try {
  //         await deleteItem(list[i].id);
  //       } catch (error) {
  //         listAlert.push(list[i].name);
  //       }
  //     }
  //     this.handleDialogClose();
  //     if (listAlert.length === list.length) {
  //       toast.warning(t("Validation.code"));
  //     } else if (listAlert.length > 0) {
  //       toast.warning(t("Category.checkdelete"));
  //     }
  //   }

  handleDeleteAll = (even) => {
    const { t, i18n } = this.props;
    if (this.data != null) {
      this.handleDeleteList(this.data).then(() => {
        this.updatePageData();
        this.handleDialogClose();
      });
    } else {
      toast.warning(t("Category.checkdeletenull"));
      this.handleDialogClose();
    }
  };

  render() {
    const { t, i18n } = this.props;
    let {
      keyword,
      rowsPerPage,
      page,
      totalElements,
      itemList,
      item,
      shouldOpenConfirmationDialog,
      shouldOpenEditorDialog,
      shouldOpenConfirmationDeleteAllDialog,
    } = this.state;
    let TitlePage = t("CheckIn.title");
    let columns = [
      //   { title: t("code"), field: "code", align: "left", width: "150" },
      { title: t("name"), field: "name", align: "left", width: "150" },
      {
        title: t("Ngày check in"),
        field: "checkInDate",
        align: "left",
        width: "150",
        render: (rowData) =>
          rowData.createDate ? (
            <span>{moment(rowData.checkInDate).format("YYYY-MM-DD")}</span>
          ) : (
            ""
          ),
      },
      {
        title: t("Ngày check out"),
        field: "checkOutDate",
        align: "left",
        width: "150",
        render: (rowData) =>
          rowData.createDate ? (
            <span>{moment(rowData.checkOutDate).format("YYYY-MM-DD")}</span>
          ) : (
            ""
          ),
      },
      { title: t("email"), field: "email", align: "left", width: "150" },
      { title: t("phone"), field: "phone", align: "left", width: "150" },
      {
        title: t("Số người lớn"),
        field: "adults",
        align: "left",
        width: "150",
      },
      { title: t("Số trẻ em"), field: "children", align: "left", width: "150" },
      {
        title: t("Mã khuyến mãi"),
        field: "promotionCode",
        align: "left",
        width: "150",
      },
      { title: t("desc"), field: "description", align: "left", width: "150" },
      {
        title: t("general.action"),
        field: "custom",
        align: "center",
        render: (rowData) => (
          <MaterialButton
            item={rowData}
            onSelect={(rowData, method) => {
              if (method === 0) {
                getItemById(rowData.id).then(({ data }) => {
                    this.setState({
                        item: data,
                        shouldOpenEditorDialog: true,
                      });
                });
              } else if (method === 1) {
                getItemById(rowData.id).then(({ data }) => {
                    reject(data, rowData.id).then(({ res }) => {
                        toast.warn("Đã từ chối");
                        this.updatePageData();
                      });
                });
              } else {
                alert("Call Selected Here:" + rowData.id);
              }
            }}
          />
        ),
      },
    ];

    return (
      <div className="m-sm-30">
        <Helmet>
          <title>HTM | {TitlePage}</title>
        </Helmet>
        <div className="mb-sm-30">
          <Breadcrumb routeSegments={[{ name: t("CheckIn.title") }]} />
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button
              className="mb-16 mr-16 align-bottom"
              variant="contained"
              color="primary"
              onClick={() => {
                this.handleEditItem({
                  startDate: new Date(),
                  endDate: new Date(),
                });
              }}
            >
              Check in
            </Button>
            {/* <Button
              className="mb-16 mr-36 align-bottom"
              variant="contained"
              color="primary"
              onClick={() =>
                this.setState({ shouldOpenConfirmationDeleteAllDialog: true })
              }
            >
              {t("general.delete")}
            </Button> */}

            {shouldOpenConfirmationDeleteAllDialog && (
              <ConfirmationDialog
                open={shouldOpenConfirmationDeleteAllDialog}
                onConfirmDialogClose={this.handleDialogClose}
                onYesClick={this.handleDeleteAll}
                text={t("general.deleteAllConfirm")}
                title={t("general.confirm")}
                agree={t("general.agree")}
                cancel={t("general.cancel")}
              />
            )}
            <TextField
              label={t("search")}
              className="mb-16 mr-10"
              style={{ width: 350 }}
              type="text"
              name="keyword"
              value={keyword}
              onKeyDown={this.handleKeyDownEnterSearch}
              onChange={this.handleTextChange}
            />
            <Button
              className="mb-16 mr-16 align-bottom"
              variant="contained"
              color="primary"
              onClick={() => this.search(keyword)}
            >
              <Icon fontSize="default">search</Icon>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <div>
              {shouldOpenEditorDialog && (
                <WaitCheckInDialog
                  t={t}
                  i18n={i18n}
                  handleClose={this.handleDialogClose}
                  open={shouldOpenEditorDialog}
                  handleOKEditClose={this.handleOKEditClose}
                  item={item}
                />
              )}

              {shouldOpenConfirmationDialog && (
                <ConfirmationDialog
                  title={t("general.confirm")}
                  open={shouldOpenConfirmationDialog}
                  onConfirmDialogClose={this.handleDialogClose}
                  onYesClick={this.handleConfirmationResponse}
                  text={t("general.deleteConfirm")}
                  agree={t("general.agree")}
                  cancel={t("general.cancel")}
                />
              )}
            </div>
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

export default WaitCheckIn;
