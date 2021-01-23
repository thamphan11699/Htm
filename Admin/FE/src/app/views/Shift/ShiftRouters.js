import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const Shift = EgretLoadable({
  loader: () => import("./Shift")
});
const ViewComponent = withTranslation()(Shift);
const ShiftRouters = [
  {
    path: ConstantList.ROOT_PATH + "shift",
    exact: true,
    component: ViewComponent
  }
];

export default ShiftRouters;