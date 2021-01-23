import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const WaitCheckIn = EgretLoadable({
  loader: () => import("./WaitCheckIn")
});
const ViewComponent = withTranslation()(WaitCheckIn);
const WaitCheckInRouters = [
  {
    path: ConstantList.ROOT_PATH + "wait-check-in",
    exact: true,
    component: ViewComponent
  }
];

export default WaitCheckInRouters;