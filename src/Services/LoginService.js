

class LoginService{
    login(reqData){
        const response={
            'isLoggedin':false
        }
        if(reqData.email === "abc@gmail.com" && reqData.password ==="abc@123"){
            response.isLoggedin=true
        }
        return response;
    }
}

export default new LoginService();