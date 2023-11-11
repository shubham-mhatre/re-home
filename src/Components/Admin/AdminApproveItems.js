import React, { useState, useEffect } from 'react';
import AdminService from '../../Services/AdminService';
import { role,backendUrl } from '../../Constants';

import { Link } from 'react-router-dom';



const AdminApproveItems = () => {
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');
    const [itemDetails, setItemDetails] = useState([]);

    useEffect(() => {
        AdminService.fetchAllItem()
            .then((response) => {
                console.log(response);
                setItemDetails(response.data.phpresult);
            })
            .catch((error) => {
                alert("error " + error);
            });
    }, []); 

    const handleAccept=(jid)=>{
            alert('You have accepted the item.');
                    const resdata = {                    
                        "role": role.acceptItem,
                        "jid": jid
                    };
                    AdminService.AcceptItem(resdata)
                    .then((response)=>{
                        console.log(response);						
                    }).catch((error) => {
                        alert("error " + error);
                    });


    };
     
    const handleDecline=(jid)=> {
        alert(`Declined job position `);
        const resdata = {                    
            "role": role.declineItem,
            "jid": jid
        };
        AdminService.DeclineItem(resdata)
        .then((response)=>{
            console.log(response);						
        }).catch((error) => {
            alert("error " + error);
        });
    };

    return (
        <div className="container">
            <section className="card">
                <h2>Items For Approval</h2>
                <table className="ftable">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Brand/Model</th>
                            <th>Type</th>
                            <th>Condition</th>
                            <th>Price</th>
                            <th> Accept </th>
                            <th> Decline </th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemDetails.map((items) => (
                            <tr key={items.ITEM_ID}>
                            <td>{items.ITEM_NAME}</td>
                            <td>{items.ITEM_BRAND}</td>
                            <td>{items.ITEM_TYPE}</td>
                            <td>{items.ITEM_CONDITION}</td>
                            <td>{items.ITEM_PRICE}</td>
                                <td>
                                    <div className="button-container">
                                        <button className="dashbutton"
                                        onClick={() => handleAccept(items.ITEM_ID)}>Accept</button>
                                    </div>
                                </td>
                                <td>
                                    <div className="button-container">
                                        <button className="dashbutton"
                                         onClick={() => handleDecline(items.ITEM_ID)}>Decline</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="button-container">
                    <Link to={`/AdminDashboard`} className="dashbutton">Back to Dashboard</Link>
                </div>
            </section>
        </div>
    )
}


export default AdminApproveItems
