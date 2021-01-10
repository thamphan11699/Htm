import ConstantList from "./appConfig";
export const navigations = [
  {
    name: "Dashboard.dashboard",
    icon: "dashboard",
    path: ConstantList.ROOT_PATH + "dashboard/analytics",
  }, 
  {
    name: "Dashboard.title",
    icon: "web_asset",
    children: [
      {
        name: "Quản lí tin tức",
        path: ConstantList.ROOT_PATH + "news",
        icon: "announcement",
      },
      {
        name: "Quản lí giá",
        path: ConstantList.ROOT_PATH + "price",
        icon: "announcement",
      },
      // {
      //   name: "Category.title",
      //   path: ConstantList.ROOT_PATH + "categories",
      //   icon: "category",
      // },
    ],
  },

  {
    name: "Dashboard.manage",
    icon: "engineering",
    children: [
      {
        name: "manage.employee",
        path: ConstantList.ROOT_PATH + "manager/employee",
        icon: "keyboard_arrow_right",
      },
    ],
  },
];
