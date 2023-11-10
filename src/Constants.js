import { Component } from "react"

//application url related
export const AppUrl ={
    base:"/",
    contactUs:"/contactUs",
    signUp:"/SignUp",    
    login:"/login",
    Logout:"/logout",

}



export const role={
    "Student":"StudentSignup",
    "StudentProfiledetails":"StudentProfiledetails",
    "addItem":"addItem",
    "Updatestudentprofile":"Updatestudentprofile",
    "StudentProfilechange":"StudentProfilechange",
    "Fetchitems":"Fetchitems",
    "FetchItemtoupdate":"FetchItemtoupdate",
    "updateItem":"updateItem",
    "markItemasSold":"markItemasSold",
    "FetchSoldItem":"FetchSoldItem",
    "FetchBookmarkItem":"FetchBookmarkItem",
    "GetFilterItems":"GetFilterItems",
    "markItemasBookmark":"markItemasBookmark",
    "FetchConatctusQuestion":"FetchConatctusQuestion",
    "FetchAllItem":"FetchAllItem",
    "declineItem":"declineItem",
    "acceptItem":"acceptItem"

}

export const backendUrl={
    base:"http://127.0.0.1:8003", 
    login:"/login.php",
    contactus: "/contactus.php",    
    registerStudent:"/signup.php",
    studentDashboard:"/Studentdashboard.php",
    adminDashboard:"/Admindashboard.php",
    adminDashboardHeader:"/adminDashboardHeader.php",    
    forgetPassword:"/forgetPassword.php",
    adminContact:"/adminContact.php",
    studentPurchase:"/studentPurchase.php"

   
}   

