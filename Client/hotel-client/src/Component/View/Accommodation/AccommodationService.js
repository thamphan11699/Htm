import axios from "axios";
import ConstantList from "../../appConfig";
const API_PATH = ConstantList.API_ENPOINT + "/api/type";

export const getTypeById = (id) => {
    let url = API_PATH + "/" + id;
    return axios.get(url);
}