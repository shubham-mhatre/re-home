import React from 'react'
import { Link } from 'react-router-dom';


const StudentSearchItem = () => {
    document.body.classList.remove('home-background');
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
                <h2>Search Items</h2>
                <table className="center">
                    <tbody>
                    <tr>
                        <th><label htmlFor="name"><b>Name</b></label></th>
                        <td>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="type"><b>Type</b></label></th>
                        <td>
                            <input
                                type="text"
                                name="type"
                                id="type"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Search Available Items"
                                />
                            </div>
                            <br />
                        </td>
                    </tr>
                </tbody>
                </table>
                <br />
                <h2>Search Results</h2>
                <table className="ftable">
                    <thead className='bgColorPink'>
                        <tr>
                            <th>Item Name</th>
                            <th>Brand/Model</th>
                            <th>Type</th>
                            <th>Condition</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th>Bookmark</th>
                            <th>Request Owner</th>
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
                                <td>
                                    <div className="button-container">
                                        <a href="student_Dashboard.html" className="dashbutton">Bookmark</a>
                                    </div>
                                </td>
                                <td>
                                    <div className="button-container">
                                        <a href="student_Dashboard.html" className="dashbutton">Purchase Request</a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="button-container">
                    <Link to={"/studentdashboard"} className="dashbutton">
                        Back to Dashboard
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default StudentSearchItem
