import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const UserBook = EgretLoadable({
  loader: () => import("./UserBook")
});
const ViewComponent = withTranslation()(UserBook);
const UserBookRouters = [
  {
    path: ConstantList.ROOT_PATH + "user-booking",
    exact: true,
    component: ViewComponent
  }
];

export default UserBookRouters;