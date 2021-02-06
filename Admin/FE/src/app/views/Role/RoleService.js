import axios from "axios";
import ConstantList from "../../appConfig";
const API_PATH_ROLE = ConstantList.API_ENPOINT + "/api/role";

export const searchByPage = (searchObject) => {
  var url = API_PATH_ROLE + "/searchByPage";
  return axios.post(url, searchObject);
};
