import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const Employee = EgretLoadable({
  loader: () => import("./Employee")
});
const ViewComponent = withTranslation()(Employee);
const EmployeeRouters = [
  {
    path: ConstantList.ROOT_PATH + "manager/employee",
    exact: true,
    component: ViewComponent
  }
];

export default EmployeeRouters;