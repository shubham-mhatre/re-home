import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import StudentService from '../../Services/StudentService';

const StudentBookmarkItem = () => {
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');
    const { id } = useParams();

    const [itemDetails, setItemDetails] = useState([]);

    
    useEffect(() => {
        // Fetch the job details and update the state using the AdminService
        StudentService.fetchBookmarkItem(id)
            .then((response) => {
                console.log(response);
                setItemDetails(response.data.phpresult);
            })
            .catch((error) => {
                alert("error " + error);
            });
    }, [id]); 

    return (
        <div className="container">
            <section className="card">
                <h2>Bookmarked Items</h2>
                <table className="ftable">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Brand/Model</th>
                            <th>Type</th>
                            <th>Condition</th>
                            <th>Price</th>
                            <th>Details</th>
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
                                           <Link to={`/studentitemdetail/${id}/${items.ITEM_ID}`} className="dashbutton">Details</Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="button-container">
                      <Link to={`/StudentDashboard/${id}`} className="dashbutton">Back to Dashboard</Link>
                </div>
            </section>
        </div>
    )
}

export default StudentBookmarkItem
