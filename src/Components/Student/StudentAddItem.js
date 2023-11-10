import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StudentService from '../../Services/StudentService';
import { role,backendUrl } from '../../Constants';

const StudentAddItem = () => {
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');
    const { id } = useParams();
    const [itemDetails, setItemDetails] = useState({
        itemName:"",
        brand:"",
        type:"",
        condition:"",
        price:"",
        itemImage:""
    });
  

   /* const handleFileChange = (event) => {
        setItemDetails.itemImage({
          [event.target.name]: event.target.files[0],
        });
    };*/

    const handleInputChange = (event) => {
		const { name, value } = event.target;
		setItemDetails((prevItemDetails) => ({
			...prevItemDetails,
			[name]: value,
		}));
	};

    const handleSave = (e) => {
        e.preventDefault();
        const {itemName ,brand ,type ,condition , price , itemImage} = itemDetails;
        

        const respData={
            "itemName":itemName,
            "brand":brand,
            "type":type,
            "condition":condition,
            "price":price,
            "itemImage":itemImage,
            "role": role.addItem,
            
        }
    
    StudentService.Postitem(respData)
		  .then((response)=>{
			  console.log(response);
			  alert(response.data);
			  setItemDetails({
                itemName: "",
                brand: "",
                type: "",
                condition: "",
                price: "",
                itemImage: ""
            });
		  }).catch((error) => {
			  alert("error " + error);
		  });  
  

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
                                        value={itemDetails.itemName}
                                        onChange={handleInputChange}
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
                                        value={itemDetails.brand}
                                        onChange={handleInputChange}
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
                                        value={itemDetails.type}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="" disabled>Select Type</option>
                                        {typeData.map(type=>(
                                        <option key={type.value} value={type.value}>
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
                                        value={itemDetails.condition}
                                        onChange={handleInputChange}
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
                                        value={itemDetails.price}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="itemImage"><b>Item image</b></label></th>
                                    <td><input type="file" id="itemImage" name="itemImage"  value={itemDetails.itemImage}
                                        onChange={handleInputChange} required/>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <br />
                <div className="button-container">
                    <a href="#" className="dashbutton" onClick={handleSave}>Save</a>
                    <Link to={`/StudentDashboard/${id}`} className="dashbutton">Back to Dashboard</Link>
                </div>
            </section>
        </div>
    )
}

const typeData = [{ "value": "Electronic", "text": "Electronic" },
{ "value": "Furniture", "text": "Furniture" },
{ "value": "Clothing", "text": "Clothing" }];

export default StudentAddItem
