import axios from "axios";
import ConstantList from "../../appConfig";
const API_PATH = ConstantList.API_ENPOINT + "/api/customer";

export const searchByPage = (searchObject) => {
  var url = API_PATH + "/searchByPage";
  return axios.post(url, searchObject);
};

export const getItemById = (id) => {
  var url = API_PATH + "/" + id;
  return axios.get(url);
};
export const deleteItem = (id) => {
  var url = API_PATH + "/" + id;
  return axios.delete(url);
};

export const accept = (dto ,id) => {
    var url = API_PATH + "/accept/" + id;
  return axios.put(url, dto);
}
export const reject = (dto, id) => {
    var url = API_PATH + "/reject/" + id;
  return axios.put(url, dto);
}