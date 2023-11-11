import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StudentService from '../../Services/StudentService';
import { role,backendUrl } from '../../Constants';

function StudentEditItemDetails(){
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');
    const { id, itemid } = useParams();

    const [itemDetails, setItemDetails] = useState({
        itemName:"",
        brand:"",
        type:"",
        condition:"",
        price:"",
        itemImage:""
    });

    
    useEffect(() => {
        // Fetch the job details and update the state using the AdminService
        StudentService.fetchItem(itemid)
            .then((response) => {
                console.log(response);
                const itemData = response.data.phpresult[0]; // Extract the object from the array
                setItemDetails({
                    itemName:itemData.ITEM_NAME,
                    brand:itemData.ITEM_BRAND,
                    type:itemData.ITEM_TYPE,
                    condition:itemData.ITEM_CONDITION,
                    price:itemData.ITEM_PRICE,
                    itemImage:itemData.ITEM_IMG,
                });
                console.log("itemData", itemData);
            })
            .catch((error) => {
                alert("error " + error);
            });
    }, []); 

    const handleInputChange = (event) => {
		const { name, value } = event.target;
		setItemDetails((prevItemDetails) => ({
			...prevItemDetails,
			[name]: value,
		}));
	};

    const navigate = useNavigate();

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
            "role": role.updateItem,
            "itemid":itemid
            
        }

    StudentService.updateItem(respData)
        .then((response)=>{
            console.log(response);
            alert(response.data);
           
        }).catch((error) => {
            alert("error " + error);
        });    

}
const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setItemDetails((prevItemDetails) => ({
          ...prevItemDetails,
          itemImage: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

const handleSold=(e)=>{
    e.preventDefault();
        

    const respData={
       
        "role": role.markItemasSold,
        "itemid":itemid
        
    }

    StudentService.markSold(respData)
    .then((response)=>{
        console.log(response);
        alert(response.data);
       
    }).catch((error) => {
        alert("error " + error);
    });  
    navigate(`/StudentDashboard/${id}`);
}

const handleDelete=(e)=>{
    e.preventDefault();
        

    const respData={
       
        "role": role.deleteItem,
        "itemid":itemid
        
    }

    StudentService.markDelete(respData)
    .then((response)=>{
        console.log(response);
        alert(response.data);
       
    }).catch((error) => {
        alert("error " + error);
    });  
    navigate(`/StudentDashboard/${id}`);
}
  return (
    <div className="container">
            <section className="card">
                <form    >
                    <br />
                    <table className="form-group">
                        <tbody>
                            <tr>
                                <th><label htmlFor="itemName"><b>Item Name</b></label></th>
                                <td>
                                    <input type="text" name="itemName" id="itemName" value={itemDetails.itemName} onChange={handleInputChange}  />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="brand"><b>Brand</b></label></th>
                                <td>
                                    <input type="text" name="brand" id="brand" value={itemDetails.brand}  onChange={handleInputChange} />
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
                                        <option value={type.value}>
                                            {type.text}
                                        </option>))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="condition"><b>Condition</b></label></th>
                                <td>
                                    <input type="text" name="condition" id="condition" value={itemDetails.condition}  onChange={handleInputChange} />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="price"><b>Price</b></label></th>
                                <td>
                                    <input type="text" name="price" id="price" value={itemDetails.price} onChange={handleInputChange} />
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
                    <a href='#' className="dashbutton" onClick={handleSave}>Update</a>
                    <a className="dashbutton" onClick={handleSold}>Mark as sold</a>
                    <a className="dashbutton" onClick={handleDelete}>Delete</a>
                </div>
                <div className="button-container">
                    <Link to={`/StudentDashboard/${id}`} className="dashbutton">Back to Dashboard</Link>
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
