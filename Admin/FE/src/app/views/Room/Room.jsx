import React, { Component } from "react";
import {
  IconButton,
  Grid,
  Icon,
  TablePagination,
  Button,
  TextField,
  Tooltip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import MaterialTable, {
  MTableToolbar,
  Chip,
  MTableBody,
  MTableHeader,
} from "material-table";
import { deleteItem, searchByPage, getItemById } from "./RoomService";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import RoomDialog from "./RoomDialog";
import { Breadcrumb, ConfirmationDialog } from "egret";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { saveAs } from "file-saver";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function MaterialButton(props) {
  const { t, i18n } = useTranslation();
  const item = props.item;

  return (
    <div>
      <Tooltip title="Edit">
        <IconButton onClick={() => props.onSelect(item, 0)}>
          <Icon color="primary">edit</Icon>
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton onClick={() => props.onSelect(item, 1)}>
          <Icon color="error">delete</Icon>
        </IconButton>
      </Tooltip>
    </div>
  );
}

class Room extends Component {
  state = {
    rowsPerPage: 10,
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
    typeStatus: 0,
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
    searchObject.typeStatus = this.state.typeStatus;
    searchByPage(searchObject).then(({ data }) => {
      this.setState({
        itemList: [...data.content],
        totalElements: data.totalElements,
      });
    });
  };

  // handleDownload = () => {
  //   var blob = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' })
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

  handleEditItem = (item) => {
    getItemById(item.id).then((result) => {
      this.setState({
        item: result.data,
        shouldOpenEditorDialog: true,
      });
    });
  };

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
    deleteItem(this.state.id)
      .then((res) => {
        this.handleDialogClose();
        this.updatePageData();
      })
      .catch((err) => {
        toast.warning(t("Category.checkduplicate"));
        this.handleDialogClose();
      });
  };

  componentDidMount() {
    this.updatePageData();
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

  async handleDeleteList(list) {
    const { t, i18n } = this.props;
    let listAlert = [];
    for (var i = 0; i < list.length; i++) {
      try {
        await deleteItem(list[i].id);
      } catch (error) {
        listAlert.push(list[i].name);
      }
    }
    this.handleDialogClose();
    if (listAlert.length === list.length) {
      toast.warning(t("Category.checkduplicate"));
    } else if (listAlert.length > 0) {
      toast.warning(t("Category.checkdelete"));
    }
  }

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
  selectStatus = (event, selected) => {
    event.persist();
    this.setState(
      {
        typeStatus: event.target.value,
      },
      () => {
        this.updatePageData();
      }
    );
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
    let TitlePage = t("Room.title");
    let columns = [
      // {
      //   title: t('Category.stt'),
      //   field: 'code',
      //   width: '150',
      //   align: 'center',
      //   render: (rowData) => page * rowsPerPage + (rowData.tableData.id + 1),
      // },
      { title: t("code"), field: "code", align: "left", width: "150" },
      { title: t("name"), field: "name", align: "left", width: "150" },
      {
        title: t("status"),
        field: "name",
        align: "left",
        width: "150",
        render: (rowData) =>
          rowData.status == true ? (
            <p>Đang có người ở</p>
          ) : (
            <p>Chưa có người ở</p>
          ),
      },
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
                this.handleDelete(rowData.id);
              } else {
                alert("Call Selected Here:" + rowData.id);
              }
            }}
          />
        ),
      },
    ];

    const listStatus = [
      { id: 0, name: "Tất cả" },
      { id: 1, name: "Đang sử dụng" },
      { id: 2, name: "Đang trống" },
    ];
    return (
      <div className="m-sm-30">
        <Helmet>
          <title>HTM | {TitlePage}</title>
        </Helmet>
        <div className="mb-sm-30">
          <Breadcrumb routeSegments={[{ name: t("Room.title") }]} />
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item lg={4} md={4} sm={12} xs={12} style={{marginTop: 10}}>
                <Button
                  className="mr-16 align-bottom"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    this.handleEditItem({
                      startDate: new Date(),
                      endDate: new Date(),
                    });
                  }}
                >
                  {t("general.add")}
                </Button>
                <Button
                  className="mr-36 align-bottom"
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    this.setState({
                      shouldOpenConfirmationDeleteAllDialog: true,
                    })
                  }
                >
                  {t("general.delete")}
                </Button>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12} style={{marginTop: 10}}>
                <FormControl fullWidth={true} variant="outlined" size="small">
                  <InputLabel htmlFor="status">{t("Trạng thái")}</InputLabel>
                  <Select
                    value={this.state?.typeStatus ? this.state.typeStatus : ""}
                    label={t("Trạng thái")}
                    onChange={this.selectStatus}
                    inputProps={{
                      name: "status",
                      id: "status",
                    }}
                  >
                    {listStatus.map((item) => {
                      return (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <TextField
                  label={t("Tìm kiếm")}
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
            </Grid>

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
          </Grid>
          <Grid item xs={12}>
            <div>
              {shouldOpenEditorDialog && (
                <RoomDialog
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
                maxBodyHeight: "450px",
                minBodyHeight: "370px",
                selection: true,
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

export default Room;
