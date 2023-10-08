import React from 'react'
import { Link } from 'react-router-dom';


const StudentDashboard = () => {
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');
    const itemDetails=[
        {'id':1,'item':'Item 1'},
        {'id':2,'item':'Item 2'},
        {'id':3,'item':'Item 3'},
        {'id':4,'item':'Item 4'},
        {'id':5,'item':'Item 5'}
    ]
    return (
        <div>
            <h1 className="dashhead">User Dashboard</h1>
            <div className="content">

                <div className="left-side">
                    <Link to={"/studenteditprofile"} className="dashbutton">Edit Profile</Link>
                    <Link to={"/studentbookmarkitem"} className="dashbutton">Bookmarked Items </Link>
                    <Link to={"/studentsearchitem"} className="dashbutton">Search Items </Link>
                    <h2>
                        <p>Personal Information</p>
                    </h2>
                    <div className="perinfo">
                        <label>Student ID:</label>
                        <input type="text" value="1001999745" readOnly />
                        <label>Name:</label>
                        <input type="text" value="Shax" readOnly />
                        <label>Phone No:</label>
                        <input type="text" value="(682)998444" readOnly />
                        <label>Email:</label>
                        <input type="text" value="shax@mavs.edu.in" readOnly />
                        <label>Address:</label>
                        <input type="text" value="USA" readOnly />
                    </div>
                    <br />
                </div>
                <div className="right-side">
                    <div className="button-container">
                        <Link to={"/studentadditem"}> <button className="dashbutton">Add Item</button></Link>
                        <Link to={"post_jobs.html"}> <button className="dashbutton">Sold Items</button></Link>
                    </div>
                    <h2>Items List</h2>
                    <div className="itemlist">
                        {itemDetails.map(item=>(
                            <div className="item-posting" key={item.id}>
                                <h3>{item.item}</h3>
                                <a href="Applicants_Academia.html"><button className="dashbutton">Edit</button></a>
                                <Link to={`/studentitemdetail/${item.id}`}><button className="dashbutton">Details</button></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDashboard
