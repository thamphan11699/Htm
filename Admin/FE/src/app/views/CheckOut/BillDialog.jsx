import React, { Component, useRef } from "react";
import {
  Dialog,
  Button,
  Grid,
  Checkbox,
  IconButton,
  Icon,
  DialogActions,
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import MaterialTable, {
  MTableToolbar,
  Chip,
  MTableBody,
  MTableHeader,
} from "material-table";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
import { divide } from "lodash";
import moment from "moment";
// import html2canvas from 'html2canvas';
// import { jsPDF } from "jspdf";
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
}

class BillDialog extends React.Component {
  state = {
    AssetAllocation: [],
    item: {},
    asset: {},
    assetVouchers: [],
    shouldOpenEditorDialog: false,
    shouldOpenViewDialog: false,
    shouldOpenConfirmationDialog: false,
    selectAllItem: false,
    selectedList: [],
    totalElements: 0,
    shouldOpenConfirmationDeleteAllDialog: false,
  };

  componentWillMount() {
    let { open, handleClose, item } = this.props;
    if (item && item.details && item.details.length > 0) {
      item.details.sort((a, b) =>
        a.orderNumber > b.orderNumber
          ? 1
          : a.orderNumber === b.orderNumber
          ? a.sampleTube.code > b.sampleTube.code
            ? 1
            : -1
          : -1
      );
    }
    this.setState(
      {
        ...this.props.item,
      },
      function () {}
    );

    // this.setState({})
  }

  componentDidMount() {}

  handleFormSubmit = () => {
    let content = document.getElementById("divcontents");
    let pri = document.getElementById("ifmcontentstoprint").contentWindow;
    pri.document.open();

    pri.document.write(content.innerHTML);

    pri.document.close();
    pri.focus();
    pri.print();
  };
  //   handleExportPdf = () => {
  //     let content = document.getElementById("divcontents");
  //     html2canvas(content)
  //       .then((canvas) => {
  //         const imgData = canvas.toDataURL('image/png');
  //         const pdf = new jsPDF();
  //         pdf.addImage(imgData, 'JPEG', 0, 0);
  //         // pdf.output('dataurlnewwindow');
  //         pdf.save("download.pdf");
  //       })
  //     ;
  //     this.props.handleOKEditClose();
  //   }

  render() {
    const { t, i18n } = this.props;
    let { open, handleClose, handleOKEditClose, item } = this.props;

    return (
      <Dialog
        open={open}
        PaperComponent={PaperComponent}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
        ></DialogTitle>
        <iframe
          id="ifmcontentstoprint"
          style={{ height: "0px", width: "0px", position: "absolute" }}
        ></iframe>
        <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
          <DialogContent
            id="divcontents"
            style={{
              width: "210mm",
              minHeight: "auto",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
              <h1>Hóa đơn thanh toán</h1>
          </DialogContent>
          <DialogActions>
            <div className="flex flex-space-between flex-middle">
              <Button
                variant="contained"
                color="secondary"
                className="mr-12"
                onClick={() => this.props.handleClose()}
              >
                {t("general.cancel")}
              </Button>
              {this.props.print && (
                <Button variant="contained" color="primary" type="submit">
                  {t("In")}
                </Button>
              )}
              {this.props.pdf && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleExportPdf}
                >
                  {t("Xuất PDF")}
                </Button>
              )}

              {/* <Example></Example> */}
            </div>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    );
  }
}

export default BillDialog;
