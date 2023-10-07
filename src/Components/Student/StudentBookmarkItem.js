import React from 'react'
import { Link } from 'react-router-dom';


const StudentBookmarkItem = () => {
    document.body.classList.add('dashboard-background');
    const itemDetials = [{
        "id": 1,
        'itemName': "Microwave",
        "brand": "panasonic",
        "type": "Electronic",
        "condition": "Good",
        "price": "40$"
    }, {
        "id": 2,
        'itemName': "Bed Frame",
        "brand": "xylo",
        "type": "Furniture",
        "condition": "Excellent",
        "price": "50$"
    }, {
        "id": 3,
        'itemName': "String lights",
        "brand": "sonic",
        "type": "Electronic",
        "condition": "Mint",
        "price": "8$"
    }];
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
                        {itemDetials.map((items) => (
                            <tr key={items.id}>
                                <td>{items.itemName}</td>
                                <td>{items.brand}</td>
                                <td>{items.type}</td>
                                <td>{items.condition}</td>
                                <td>{items.price}</td>
                                <td>
                                    <div className="button-container">
                                        <a href="student_Dashboard.html" className="dashbutton">Details</a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="button-container">
                    <Link to={"/studentdashboard"} className="dashbutton">Back to Dashboard</Link>
                </div>
            </section>
        </div>
    )
}

export default StudentBookmarkItem
