import axios from "axios";
import ConstantList from "../appConfig";
const API_PATH = ConstantList.API_ENPOINT + "/api/type";

export const getType = (search) => {
    let url = API_PATH + "/searchByPage";
    return axios.post(url, search);
}
