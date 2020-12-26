import axios from "axios";
import ConstantList from "../../appConfig";
const API_PATH = ConstantList.API_ENPOINT + "/api/employee";

export const searchByPage = (searchObject) => {
  var url = API_PATH + "/searchByPage";
  return axios.post(url, searchObject);
};

export const getItemById = id => {  
  var url = API_PATH + "/" + id;
  return axios.get(url);
};
export const deleteItem = id => {
  var url = API_PATH + "/" + id;
  return axios.delete(url);
};

export const addNewData = (employee) => {
    var url = ConstantList.API_ENPOINT + "/public/signin";
    return axios.post(url, employee);
}

export const updateData = (employee, employeeId, userId) => {
    var url = ConstantList.API_ENPOINT + "/public/signin"  + "/" + employeeId + "/" + userId;
    return axios.put(url, employee);
}

export const getRole = () => {
    var url = ConstantList.API_ENPOINT + "/api/role/searchByPage";
    return axios.post(url, {pageSize: 10000, pageIndex: 0});
}

export const checkUsername= (employee) => {
    var url = ConstantList.API_ENPOINT + "/public/check-username";
    return axios.post(url, employee);
}

export const checkEmail= (employee) => {
    var url = ConstantList.API_ENPOINT + "/public/check-email";
    return axios.post(url, employee);
}