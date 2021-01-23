import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const CheckIn = EgretLoadable({
  loader: () => import("./CheckIn")
});
const ViewComponent = withTranslation()(CheckIn);
const CheckInRouters = [
  {
    path: ConstantList.ROOT_PATH + "check-in",
    exact: true,
    component: ViewComponent
  }
];

export default CheckInRouters;