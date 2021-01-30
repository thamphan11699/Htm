import ConstantList from "./appConfig";
export const navigations = [
  {
    name: "Dashboard.dashboard",
    icon: "home",
    path: ConstantList.ROOT_PATH + "dashboard/analytics",
  }, 
  {
    name: "Customer",
    icon: "web_asset",
    children: [
      {
        name: "CheckIn.title",
        path: ConstantList.ROOT_PATH + "check-in",
        icon: "category",
      },
      {
        name: "UserBook.title",
        path: ConstantList.ROOT_PATH + "user-booking",
        icon: "category",
      },
      {
        name: "UserBook.wait",
        path: ConstantList.ROOT_PATH + "wait-check-in",
        icon: "category",
      },
      {
        name: "ExistingCustomers.title",
        path: ConstantList.ROOT_PATH + "existing-customers",
        icon: "category",
      },
      {
        name: "CheckOut.title",
        path: ConstantList.ROOT_PATH + "check-out",
        icon: "category",
      },
      {
        name: "CustomerReject.title",
        path: ConstantList.ROOT_PATH + "customer-reject",
        icon: "category",
      },
      {
        name: "ListCustomer.title",
        path: ConstantList.ROOT_PATH + "list-customer",
        icon: "category",
      },
      {
        name: "CustomerUsed.title",
        path: ConstantList.ROOT_PATH + "customer-used",
        icon: "category",
      },
    ]
  }, 
  {
    name: "Dashboard.title",
    icon: "web_asset",
    children: [
      {
        name: "News.title",
        path: ConstantList.ROOT_PATH + "news",
        icon: "category",
      },
      {
        name: "Price.title",
        path: ConstantList.ROOT_PATH + "price",
        icon: "category",
      },
      {
        name: "Type.title",
        path: ConstantList.ROOT_PATH + "type",
        icon: "category",
      },
      {
        name: "Ameniti.title",
        path: ConstantList.ROOT_PATH + "ameniti",
        icon: "category",
      },
      {
        name: "Room.title",
        path: ConstantList.ROOT_PATH + "room",
        icon: "category",
      },
      {
        name: "Promotion.title",
        path: ConstantList.ROOT_PATH + "promotion",
        icon: "category",
      },
      {
        name: "Advertisement.title",
        path: ConstantList.ROOT_PATH + "advertisement",
        icon: "category",
      },
      {
        name: "Shift.title",
        path: ConstantList.ROOT_PATH + "shift",
        icon: "category",
      },
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
