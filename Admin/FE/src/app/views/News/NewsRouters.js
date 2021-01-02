import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const News = EgretLoadable({
  loader: () => import("./News")
});
const ViewComponent = withTranslation()(News);
const NewsRouters = [
  {
    path: ConstantList.ROOT_PATH + "news",
    exact: true,
    component: ViewComponent
  }
];

export default NewsRouters;