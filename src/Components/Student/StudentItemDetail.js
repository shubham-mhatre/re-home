import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const StudentItemDetail = () => {
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');
    const { itemid } = useParams();
    const [itemName, setItemName] = useState('');
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [condition, setCondition] = useState('');
    const [price, setPrice] = useState('');
    const [productImage,setProductImage]=useState('');

    useEffect(() => {
        const itemDtls = itemDetials.find(item => item.id == itemid);//to be replace with api call to backend
        if(itemDtls){
            setItemName(itemDtls.itemName);
            setBrand(itemDtls.brand);
            setType(itemDtls.type);
            setCondition(itemDtls.condition);
            setPrice(itemDtls.price);
            setProductImage(itemDtls.image);
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
                            <tr>
                                <th><label htmlFor="productImage"><b>Image</b></label></th>
                                <td>
                                    <div className={productImage}></div>
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
    "price": "40$",
    "image":"microwave-img"
}, {
    "id": 2,
    'itemName': "Bed Frame",
    "brand": "xylo",
    "type": "Furniture",
    "condition": "Excellent",
    "price": "50$",
    "image":"bedframe-img"
}, {
    "id": 3,
    'itemName': "String lights",
    "brand": "sonic",
    "type": "Electronic",
    "condition": "Mint",
    "price": "8$",
    "image":"stringlights-img"
},{
    "id": 4,
    'itemName': "TV",
    "brand": "LG",
    "type": "Electronic",
    "condition": "Good",
    "price": "60$",
    "image":"tv-img"
},{
    "id": 5,
    'itemName': "refrigerator",
    "brand": "LG",
    "type": "Electronic",
    "condition": "Good",
    "price": "80$",
    "image":"refrigerator-img"
}];

const typeData = [{ "value": "Electronic", "text": "Electronic" },
{ "value": "Furniture", "text": "Furniture" },
{ "value": "Clothing", "text": "Clothing" }];

export default StudentItemDetail
