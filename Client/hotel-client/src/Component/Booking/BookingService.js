import axios from "axios";
import ConstantList from "../appConfig";

export const booking = (customer) => {
    var url =  ConstantList.API_ENPOINT + "/api/customer/booking";
    return axios.post(url, customer);
}