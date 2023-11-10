import axios from "axios";
import { backendUrl } from "../Constants";


class StudentPurchase{

    requestForPurchase(reqData){
        return axios.post(backendUrl.base+backendUrl.studentPurchase,reqData);
    }
}

export default new StudentPurchase();