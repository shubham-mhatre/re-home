import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import StudentService from '../../Services/StudentService';

export default function StudentDashboard(){
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');
    
        const [posteditemDetails, setPostedItemDetails] = useState([]);
    
        const { id } = useParams();
    
        const [userDetails, setUserDetails] = useState({
                 uname:"",
                 phoneno:"",                
                 email:"",
                 address:"",
                 mavid:""
        });
    
        useEffect(() => {
            StudentService.getProfileDatails(id)
                .then((response) => {
                    console.log(response);
                    const userData = response.data.phpresult[0]; // Extract the object from the array
                    console.log(userData);
                    if (userData) {
                        setUserDetails({
                            mavid: userData.mavid,
                            uname: userData.uname,
                            phoneno: userData.Phoneno,
                            address: userData.address,
                            email: userData.email,
                        });
                        console.log("userData",userData);
                    } else {
                        // Handle the case where the array is empty or undefined
                        console.error("Profile data not found");
                    }
                    
                })
                .catch((error) => {
                    alert("error " + error);
                });
        }, [id]);
        
    
        useEffect(() => {
            
            StudentService.Studentitems(id)
                .then((response)=>{
                    console.log(response);
                    setPostedItemDetails(response.data.phpresult);
                }).catch((error) => {
                    alert("error " + error);
                });
          }, []);
        
          const PostItem = ({ rs }) => {
            return (
            <div>
                <h3>{rs.ITEM_NAME}</h3>                
                <Link to={`/studentedititemdetail/${id}/${rs.ITEM_ID}`}><button className="dashbutton">Edit</button></Link>
                <Link to={`/studentitemdetail/${id}/${rs.ITEM_ID}`}><button className="dashbutton">Details</button></Link>
            </div>
            );
        };

    return (
        <div>
            <h1 className="dashhead">User Dashboard</h1>
            <div className="content">

                <div className="left-side">
                    <Link to={`/studenteditprofile/${id}`} className="dashbutton">Edit Profile</Link>
                    <Link to={`/studentbookmarkitem/${id}`} className="dashbutton">Bookmarked Items </Link>
                    <Link to={`/studentsearchitem/${id}`} className="dashbutton">Search Items </Link>
                    <h2>
                        <p>Personal Information</p>
                    </h2>
                    <div className="perinfo">
                        <label>Student ID:</label>
                        <input type="text" value={userDetails.mavid} readOnly />
                        <label>Name:</label>
                        <input type="text" value={userDetails.uname} readOnly />
                        <label>Phone No:</label>
                        <input type="text" value={userDetails.phoneno} readOnly />
                        <label>Email:</label>
                        <input type="text" value={userDetails.email} readOnly />
                        <label>Address:</label>
                        <input type="text" value={userDetails.address} readOnly />
                    </div>
                    <br />
                </div>
                <div className="right-side">
                    <div className="button-container">
                        <Link to={`/studentadditem/${id}`}> <button className="dashbutton">Add Item</button></Link>
                        <Link to={`/studentsolditems/${id}`}> <button className="dashbutton">Sold Items</button></Link>
                    </div>
                    <h2>Items List</h2>
                    <div className="itemlist">

                        {posteditemDetails.map((rs) => (
                                                    <PostItem key={rs.ITEM_ID} rs={rs} /> // Use the new component and pass the data as props
                                                    ))} 
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

