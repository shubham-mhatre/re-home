import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import StudentService from '../../Services/StudentService';

function StudentItemDetail(){
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
                itemImage: itemData.ITEM_IMG
            });
            console.log("itemData", itemData);            
            console.log(itemDetails.itemImage);
   
        })
        .catch((error) => {
            alert("error " + error);
        });
        }, [itemid]); 
    
  
  


    return (
        <div className="container">
            <section className="card">
                <form>
                    <br />
                    <table className="form-group">
                        <tbody>
                            <tr>
                                <th><label htmlFor="itemName"><b>Item Name</b></label></th>
                                <td>
                                    <input type="text" name="itemName" id="itemName" value={itemDetails.itemName}  readOnly />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="brand"><b>Brand</b></label></th>
                                <td>
                                    <input type="text" name="brand" id="brand" value={itemDetails.brand} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="type"><b>type</b></label></th>
                                <td>
                                    <input type="text" name="type" id="type" value={itemDetails.type} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="condition"><b>Condition</b></label></th>
                                <td>
                                    <input type="text" name="condition" id="condition" value={itemDetails.condition} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="price"><b>Price</b></label></th>
                                <td>
                                    <input type="email" name="price" id="price" value={itemDetails.price} readOnly />
                                </td>
                            </tr>
                            <tr>                            
                                <th><label htmlFor="itemImage"><b>Image</b></label></th>
                                <td>
                                    <img src={itemDetails.itemImage} className="item-image" />

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <br />
                <div className="button-container">
                    <Link to={`/StudentDashboard/${id}`} className="dashbutton">Back to Dashboard</Link>
                </div>
            </section>
        </div>
    )
}


const typeData = [{ "value": "Electronic", "text": "Electronic" },
{ "value": "Furniture", "text": "Furniture" },
{ "value": "Clothing", "text": "Clothing" }];

export default StudentItemDetail
