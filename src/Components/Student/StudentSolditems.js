import React from 'react'
import { Link } from 'react-router-dom';


const StudentSolditems = () => {
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');
    return (
        <div className='card'>
            <table className="ftable">
                <thead className='bgColorPink'>
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
                                    <Link to={`/studentitemdetail/${items.id}`} className="dashbutton">Details</Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

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
export default StudentSolditems
