

class LoginService{
    login(reqData){
        const response={
            'isLoggedin':false,
            'role':'student'
        }
        if(reqData.email.toLowerCase() === "abc@gmail.com" && reqData.password.toLowerCase() ==="abc@123"){
            response.isLoggedin=true
        }else if(reqData.email.toLowerCase() === "admin@gmail.com" && reqData.password.toLowerCase() ==="abc@123"){
            response.isLoggedin=true
            response.role='admin'
        }
        return response;
    }
}

export default new LoginService();