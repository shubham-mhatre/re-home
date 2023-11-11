import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import StudentService from '../../Services/StudentService';
import StudentpurchaseService from '../../Services/StudentpurchaseService';
import { role } from '../../Constants';

function StudentSearchItem(){

    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');
    const { id } = useParams();
    const [itemDetails, setitemDetails] = useState([]);
   
    const [searchDetails, setSearchDetails] = useState({
        itemName: '',
        itemtype:''
       
    });

      const handleSearch = (event) => {
		event.preventDefault();
		const { itemName, itemtype  } = searchDetails;
		
		const checknullitemName = itemName ? itemName : '';
		const checknullitemType = itemtype ? itemtype : '';
		console.log("checknullitemName",checknullitemName);
         console.log(checknullitemType);
			
			StudentService.getFilterItems(checknullitemName,checknullitemType)
			.then((response)=>{
				console.log(response);
                setitemDetails(response.data.phpresult);
                
			}).catch((error) => {
				alert("error " + error);      
			});
	  };

    const handleBookmarkItem=(itemid,id)=>{
       
        const respData={
           
            "role": role.markItemasBookmark,
            "itemid":itemid,
            "id":id
            
        }
    
        StudentService.markBookmark(respData)
        .then((response)=>{
            console.log(response);
            alert(response.data);
           
        }).catch((error) => {
            alert("error " + error);
        });
    }

    const handlePurchaseRequest=(itemname,itemid)=>{
        const respData={
            "itemid":itemid,
            "itemname":itemname,
            "id":id
            
        }
        StudentpurchaseService.requestForPurchase(respData)
        .then((resp)=>{
            console.log(JSON.stringify(resp));
            alert(resp.data.message);
        }).catch((error)=>{
            alert(error);
        });
        //alert("purchase requested submitted to owner");
    }
    
    return (
        <div className="container">
            <section className="card">
                <h2>Search Items</h2>
                <form onSubmit={handleSearch}>	
                    <table className="center">
                        <tbody>
                        <tr>
                            <th><label htmlFor="itemName"><b>Name</b></label></th>
                            <td>
                                <input  type="text" name="itemName" id="itemName"
                                 value={searchDetails.itemName} 
							onChange={(e) => setSearchDetails({ ...searchDetails, itemName: e.target.value })}  />
                            </td>
                        </tr>                         

                            <tr>
                                <th><label><b>Type</b></label></th>
                                <td>
                                    {typeData.map(type => (
                                        <div key={type.value}>
                                            <input
                                                type="radio"
                                                id={type.value}
                                                name="type"
                                                value={type.value}
                                                checked={searchDetails.itemtype === type.value}
                                                onChange={(e) => setSearchDetails({ ...searchDetails, itemtype: e.target.value })}
                                            />
                                            <label htmlFor={type.value}>{type.text}</label>
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        <tr>
                            <td colSpan="2">
                                <div className="form-group">
                                      <button type="submit" className="button" >Search Available Items</button>                                    
                                </div>
                                <br />
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </form>
                <br />
                <h2>Search Results</h2>
                <table className="ftable">
                    <thead className='bgColorPink'>
                        <tr>
                            <th>Item Name</th>
                            <th>Brand/Model</th>
                            <th>Type</th>
                            <th>Condition</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th>Bookmark</th>
                            <th>Request Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemDetails.map((items) => (
                           <tr key={items.ITEM_ID}>
                           <td>{items.ITEM_NAME}</td>
                           <td>{items.ITEM_BRAND}</td>
                           <td>{items.ITEM_TYPE}</td>
                           <td>{items.ITEM_CONDITION}</td>
                           <td>{items.ITEM_PRICE}</td>
                           <td>
                                    <div className="button-container">
                                        <Link to={`/studentitemdetail/${id}/${items.ITEM_ID}`} className="dashbutton">Details</Link>
                                    </div>
                                </td>
                                <td>
                                    <div className="button-container">
                                        <a className="dashbutton" onClick={()=>handleBookmarkItem(items.ITEM_ID,id)}>Bookmark</a>
                                    </div>
                                </td>
                                <td>
                                    <div className="button-container">
                                        <a className="dashbutton" onClick={()=>handlePurchaseRequest(items.ITEM_NAME,items.ITEM_ID,id)}>Purchase Request</a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

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
export default StudentSearchItem
