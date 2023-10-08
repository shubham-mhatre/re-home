

class LoginService{
    login(reqData){
        const response={
            'isLoggedin':false,
            'role':'student'
        }
        if(reqData.email === "abc@gmail.com" && reqData.password ==="abc@123"){
            response.isLoggedin=true
        }else if(reqData.email === "admin@gmail.com" && reqData.password ==="abc@123"){
            response.isLoggedin=true
            response.role='admin'
        }
        return response;
    }
}

export default new LoginService();