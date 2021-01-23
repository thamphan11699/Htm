import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const ExistingCustomers = EgretLoadable({
  loader: () => import("./ExistingCustomers")
});
const ViewComponent = withTranslation()(ExistingCustomers);
const ExistingCustomersRouters = [
  {
    path: ConstantList.ROOT_PATH + "existing-customers",
    exact: true,
    component: ViewComponent
  }
];

export default ExistingCustomersRouters;