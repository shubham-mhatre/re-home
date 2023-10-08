import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const StudentAddItem = () => {
    const [itemName, setItemName] = useState('');
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [condition, setCondition] = useState('');
    const [price, setPrice] = useState('');

    const handleSave=(e)=>{
        e.preventDefault();
        if(itemName==="" || brand==="" || type==="" || condition===""||price===""){
            alert('All fields are required');
        }else{
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
                                    <input
                                        type="text"
                                        name="type"
                                        id="type"
                                        placeholder="Enter type"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        required
                                    />
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
                                        type="email"
                                        name="price"
                                        id="price"
                                        placeholder="Enter price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        required
                                    />
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

export default StudentAddItem
