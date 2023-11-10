import axios from 'axios';
import { role,backendUrl } from '../Constants'

class AdminService{
    getAdminHeaderData(){

        return axios.get(backendUrl.base+backendUrl.adminDashboardHeader)
    }
    fetchConatctusQuestion(){
        const adminFormData = {                    
            "role": role.FetchConatctusQuestion
        };
        return axios.get(backendUrl.base+backendUrl.adminDashboard, { params: adminFormData })
    }
    fetchAllItem(){
        const adminFormData = {                    
            "role": role.FetchAllItem
        };
        return axios.get(backendUrl.base+backendUrl.adminDashboard, { params: adminFormData })
    }

    DeclineItem(adminFormData){
        
        return axios.post(backendUrl.base+backendUrl.adminDashboard,  adminFormData )
    }
    AcceptItem(adminFormData){
        
        return axios.post(backendUrl.base+backendUrl.adminDashboard,  adminFormData )
    }



}

export default new AdminService();