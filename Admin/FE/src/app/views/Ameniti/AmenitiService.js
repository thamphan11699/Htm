import axios from "axios";
import ConstantList from "../../appConfig";
const API_PATH = ConstantList.API_ENPOINT + "/api/ameniti";

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

export const addNewData = (ameniti) => {
  var url = API_PATH;
  return axios.post(url, ameniti);
};

export const updateData = (ameniti, id) => {
  var url = API_PATH + "/" + id;
  return axios.put(url, ameniti);
};

export const checkCode = (ameniti) => {
  var url = API_PATH + "/" + "check-code";
  return axios.post(url, ameniti);
};

export const checkName = (ameniti) => {
  var url = API_PATH + "/" + "check-name";
  return axios.post(url, ameniti);
};
