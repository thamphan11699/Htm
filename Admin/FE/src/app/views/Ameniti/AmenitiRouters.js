import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const Ameniti = EgretLoadable({
  loader: () => import("./Ameniti")
});
const ViewComponent = withTranslation()(Ameniti);
const AmenitiRouters = [
  {
    path: ConstantList.ROOT_PATH + "ameniti",
    exact: true,
    component: ViewComponent
  }
];

export default AmenitiRouters;