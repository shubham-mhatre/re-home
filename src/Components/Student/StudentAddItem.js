import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const StudentAddItem = () => {
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');
    const [itemName, setItemName] = useState('');
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [condition, setCondition] = useState('');
    const [price, setPrice] = useState('');
    const [itemImage,setItemImage]=useState(null);

    const handleFileChange = (event) => {
        setItemImage({
          [event.target.name]: event.target.files[0],
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (itemName === "" || brand === "" || type === "" || condition === "" || price === ""|| itemImage===null) {
            alert('All fields are required');
        } else {
            alert('item saved successfully');
        }

    }
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
                                    <input
                                        type="text"
                                        name="itemName"
                                        id="itemName"
                                        placeholder="Enter Item Name"
                                        value={itemName}
                                        onChange={(e) => setItemName(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="brand"><b>Brand</b></label></th>
                                <td>
                                    <input
                                        type="text"
                                        name="brand"
                                        id="brand"
                                        placeholder="Enter Brand name"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                        required
                                    />
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
                                    <input
                                        type="text"
                                        name="condition"
                                        id="condition"
                                        placeholder="Enter Condition"
                                        value={condition}
                                        onChange={(e) => setCondition(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="price"><b>Price</b></label></th>
                                <td>
                                    <input
                                        type="text"
                                        name="price"
                                        id="price"
                                        placeholder="Enter price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="itemImage"><b>Item image</b></label></th>
                                    <td><input type="file" id="itemImage" name="itemImage" 
                                        onChange={handleFileChange} required/>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <br />
                <div className="button-container">
                    <a href="#" className="dashbutton" onClick={handleSave}>Save</a>
                    <Link to={"/studentdashboard"} className="dashbutton">Back to Dashboard</Link>
                </div>
            </section>
        </div>
    )
}

const typeData = [{ "value": "Electronic", "text": "Electronic" },
{ "value": "Furniture", "text": "Furniture" },
{ "value": "Clothing", "text": "Clothing" }];

export default StudentAddItem
