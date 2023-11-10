import React, { useState, useEffect } from 'react'
import AdminService from '../../Services/AdminService';
import AdmincontactService from '../../Services/AdmincontactService'

import { Link } from 'react-router-dom';

const AdminContactus = () => {
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');

    const [itemDetails, setItemDetails] = useState([]);

    const [email, setEmail] = useState('');
    const [response, setReponse] = useState('');
    const handleRepondBtnClick = (email) => {
        setEmail(email);
    }
    
    const handleSendMail=(e)=>{
        e.preventDefault();
       /* if(email===""){
            alert('click on respond button from above queries');
        }else if(response===""){
            alert('provide respond message');
        }else{
            alert('respond sent successfully');
        }*/
        const reqData={
            "email": email,
            "response":response
        };
        AdmincontactService.requestForContact(reqData)
        .then((resp)=>{
          debugger;
            console.log(JSON.stringify(resp));
            alert(resp.data.message);
            setEmail('');//reset email id after success.
            setReponse('');
        }).catch((error)=>{
          debugger;
            alert(error);
        });
        

    }

    useEffect(() => {
        AdminService.fetchConatctusQuestion()
            .then((response) => {
                console.log(response);
                setItemDetails(response.data.phpresult);
            })
            .catch((error) => {
                alert("error " + error);
            });
    }, []); 


    return (
        <div className="container">
            <section className="card">
                <h2> User Requests</h2>
                <table className="ftable">
                    <thead>
                        <tr>
                        <th>Name</th>
                            <th>Email</th>
                            <th>Comment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemDetails.map((result) => (
                            <tr key={result.CONTACTID}>
                                <td >{result.CNAME}</td>
                                <td >{result.EMAIL}</td>
                                <td >{result.COMMENTS}</td>
                                <td><button onClick={() => handleRepondBtnClick(result.EMAIL)}>respond</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <form  >
                    <table class="form-group">
                        <tr>
                            <th><label for="email"><b>User Email</b></label></th>
                            <td><input type="email" name="email" id="email"  placeholder="Enter email" readOnly
                                value={email} />
                            </td>
                        </tr>
                        <tr>
                            <th><label for="respondmsg"><b>response</b></label></th>
                            <td><input type="text" name="respondmsg" id="respondmsg" placeholder="Enter response"
                                value={response} onChange={e=>setReponse(e.target.value)}
                                />
                            </td>
                        </tr>
                    </table>
                    <br/>
                    <button className="dashbutton" style={{marginLeft:'40%'}}
                    onClick={handleSendMail}>send mail</button>
                </form>
                <div className="button-container">
                    <Link to={`/AdminDashboard`} className="dashbutton">Back to Dashboard</Link>
                </div>
            </section>
            
        </div>
        
    )
}


export default AdminContactus
