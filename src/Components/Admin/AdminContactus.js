import React, { useState } from 'react'

const AdminContactus = () => {
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');

    const [email, setEmail] = useState('');
    const [response, setReponse] = useState('');
    const handleRepondBtnClick = (email) => {
        setEmail(email);
    }
    const handleSendMail=(e)=>{
        e.preventDefault();
        if(email===""){
            alert('click on respond button from above queries');
        }else if(response===""){
            alert('provide respond message');
        }else{
            alert('respond sent successfully');
        }
    }


    return (
        <div className="container">
            <section className="card">
                <h2> User Requests</h2>
                <table className="ftable">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Comment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {queriesData.map((result) => (
                            <tr key={result.id}>
                                <td >{result.email}</td>
                                <td >{result.comment}</td>
                                <td><button onClick={() => handleRepondBtnClick(result.email)}>respond</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <form>
                    <table class="form-group">
                        <tr>
                            <th><label for="email"><b>User Email</b></label></th>
                            <td><input type="email" name="email" id="email" placeholder="Enter email" readOnly
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
            </section>
        </div>
    )
}

const queriesData = [{
    "id": 1,
    "email": "user1@gmail.com",
    "comment": "whats status of my order id 'E12345' ?"
}, {
    "id": 2,
    "email": "user2@gmail.com",
    "comment": "notice me when new tv models are available"
}]

export default AdminContactus
