import React from 'react'

const AdminApproveItems = () => {
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');
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
                        {itemDetials.map((items) => (
                            <tr key={items.id}>
                                <td>{items.itemName}</td>
                                <td>{items.brand}</td>
                                <td>{items.type}</td>
                                <td>{items.condition}</td>
                                <td>{items.price}</td>
                                <td>
                                    <div className="button-container">
                                        <button className="dashbutton"
                                        onClick={()=>alert('product request accepted')}>Accept</button>
                                    </div>
                                </td>
                                <td>
                                    <div className="button-container">
                                        <button className="dashbutton"
                                         onClick={()=>alert('product request declined')}>Decline</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
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

export default AdminApproveItems
