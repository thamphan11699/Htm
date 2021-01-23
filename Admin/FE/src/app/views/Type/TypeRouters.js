import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const Type = EgretLoadable({
  loader: () => import("./Type")
});
const ViewComponent = withTranslation()(Type);
const TypeRouters = [
  {
    path: ConstantList.ROOT_PATH + "type",
    exact: true,
    component: ViewComponent
  }
];

export default TypeRouters;