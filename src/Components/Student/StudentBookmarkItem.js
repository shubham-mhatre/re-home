import React from 'react'
import { Link } from 'react-router-dom';


const StudentBookmarkItem = () => {
    document.body.classList.add('dashboard-background');
    const itemDetials = [{
        'itemName': "",
        "brand": "",
        "type": "",
        "condition": "",
        "price": "",
        "details": ""
    }]
    return (
        <div className="container">
            <section className="card">
                <h2>Bookmarked Items</h2>
                <table className="ftable">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Brand/Model</th>
                            <th>Type</th>
                            <th>Condition</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Microwave</td>
                            <td>panasonic</td>
                            <td>Electronic</td>
                            <td>Good</td>
                            <td>40$</td>
                            <td>
                                <div className="button-container">
                                    <a href="student_Dashboard.html" className="dashbutton">Details</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Bed Frame</td>
                            <td>xylo</td>
                            <td>Furniture</td>
                            <td>Excellent</td>
                            <td>50$</td>
                            <td>
                                <div className="button-container">
                                    <a href="student_Dashboard.html" className="dashbutton">Details</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>String lights</td>
                            <td>sonic</td>
                            <td>Electronic</td>
                            <td>Mint</td>
                            <td>8$</td>
                            <td>
                                <div className="button-container">
                                    <a href="student_Dashboard.html" className="dashbutton">Details</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="button-container">
                    <Link to={"/studentdashboard"} className="dashbutton">Back to Dashboard</Link>
                </div>
            </section>
        </div>
    )
}

export default StudentBookmarkItem
