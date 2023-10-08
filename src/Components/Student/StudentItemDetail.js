import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const StudentItemDetail = () => {
    const { itemid } = useParams();
    const [itemName, setItemName] = useState('');
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [condition, setCondition] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        const itemDtls = itemDetials.find(item => item.id == itemid);//to be replace with api call to backend
        if(itemDtls){
            setItemName(itemDtls.itemName);
            setBrand(itemDtls.brand);
            setType(itemDtls.type);
            setCondition(itemDtls.condition);
            setPrice(itemDtls.price);
        }        
    },[itemid]);


    return (
        <div className="container">
            <section className="card">
                <form action="signupconfirmation.html" method="post">
                    <br />
                    <table className="form-group">
                        <tbody>
                            <tr>
                                <th><label htmlFor="itemName"><b>Item Name</b></label></th>
                                <td>
                                    <input type="text" name="itemName" id="itemName" value={itemName} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="brand"><b>Brand</b></label></th>
                                <td>
                                    <input type="text" name="brand" id="brand" value={brand} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="type"><b>type</b></label></th>
                                <td>
                                    <input type="text" name="type" id="type" value={type} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="condition"><b>Condition</b></label></th>
                                <td>
                                    <input type="text" name="condition" id="condition" value={condition} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="price"><b>Price</b></label></th>
                                <td>
                                    <input type="email" name="price" id="price" value={price} readOnly />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <br />
                <div className="button-container">
                    <Link to={"/studentdashboard"} className="dashbutton">Back to Dashboard</Link>
                </div>
            </section>
        </div>
    )
}

//to be replace with data from api call from backend
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
},{
    "id": 4,
    'itemName': "TV",
    "brand": "LG",
    "type": "Electronic",
    "condition": "Good",
    "price": "60$"
},{
    "id": 5,
    'itemName': "refrigerator",
    "brand": "LG",
    "type": "Electronic",
    "condition": "Good",
    "price": "80$"
}];

export default StudentItemDetail