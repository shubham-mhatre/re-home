import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const StudentEditItemDetails = () => {
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');
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
                                    <input type="text" name="itemName" id="itemName" value={itemName}  />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="brand"><b>Brand</b></label></th>
                                <td>
                                    <input type="text" name="brand" id="brand" value={brand}  />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="type"><b>type</b></label></th>
                                <td>
                                <select style={{ width: '100%' }}
                                        name="type"
                                        id="type"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        required
                                    >
                                        <option value="" disabled>Select Type</option>
                                        {typeData.map(type=>(
                                        <option value={type.value}>
                                            {type.text}
                                        </option>))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="condition"><b>Condition</b></label></th>
                                <td>
                                    <input type="text" name="condition" id="condition" value={condition}  />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="price"><b>Price</b></label></th>
                                <td>
                                    <input type="email" name="price" id="price" value={price}  />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <br />
                <div className="button-container">
                    <a href='#' className="dashbutton" onClick={(e)=>alert("item details updated successfully.")}>update</a>
                    <Link to={"/studentdashboard"} className="dashbutton">Back to Dashboard</Link>
                </div>
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

const typeData = [{ "value": "Electronic", "text": "Electronic" },
{ "value": "Furniture", "text": "Furniture" },
{ "value": "Clothing", "text": "Clothing" }];

export default StudentEditItemDetails
