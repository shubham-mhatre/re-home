import axios from 'axios';
import { role,backendUrl } from '../Constants'

class StudentService{

    getProfileDatails(id){
        const studentFormData = {                        
            "role": role.StudentProfiledetails,
            "id": id
        };
        return axios.get(backendUrl.base+backendUrl.studentDashboard,  { params: studentFormData })
    }
    Postitem(studentFormData){
        return axios.post(backendUrl.base+backendUrl.studentDashboard, studentFormData)
    }
    updateStudentProfile(id){
        const studentFormData = {                    
            "role": role.Updatestudentprofile,
            "id": id
        };  
        return axios.get(backendUrl.base+backendUrl.studentDashboard, { params: studentFormData } )
    }

    changedetailsofStudentProfile(studentFormData){
       
        return axios.post(backendUrl.base+backendUrl.studentDashboard, studentFormData)
    }

    Studentitems(id){
        const studentFormData = {                    
            "role": role.Fetchitems,
            "id": id
        };  
        return axios.get(backendUrl.base+backendUrl.studentDashboard, { params: studentFormData } )
    }
   

    fetchItem(itemid){
        const studentFormData = {                    
            "role": role.FetchItemtoupdate,
            "itemid": itemid
        };  
        return axios.get(backendUrl.base+backendUrl.studentDashboard, { params: studentFormData } )
    }

    updateItem(studentFormData){
       
        return axios.post(backendUrl.base+backendUrl.studentDashboard, studentFormData)
    }

    markSold(studentFormData){
       
        return axios.post(backendUrl.base+backendUrl.studentDashboard, studentFormData)
    }


    fetchSoldItem(id){
        const studentFormData = {                    
            "role": role.FetchSoldItem,
            "id":id
        };
        return axios.get(backendUrl.base+backendUrl.studentDashboard, { params: studentFormData })
    }

    fetchBookmarkItem(id){
        const studentFormData = {                    
            "role": role.FetchBookmarkItem,
            "id" : id
        };
        return axios.get(backendUrl.base+backendUrl.studentDashboard, { params: studentFormData })
    }

    getFilterItems(name,type){
        const studentFormData = {                    
            "role": role.GetFilterItems,
            "name": name,
            "type": type
        };
        console.log("studentFormData",studentFormData);
       return axios.get(backendUrl.base+backendUrl.studentDashboard, { params: studentFormData } )
    }

    markBookmark(studentFormData){
       
        return axios.post(backendUrl.base+backendUrl.studentDashboard, studentFormData)
    }


}

export default new StudentService();