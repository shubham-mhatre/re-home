import axios from 'axios';
import { role,backendUrl } from '../Constants'

class RegisterSerivce{

    registerStudent(registerFormData){
        return axios.post(backendUrl.base+backendUrl.registerStudent, registerFormData)
    }
}

export default new RegisterSerivce();