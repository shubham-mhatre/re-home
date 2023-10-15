import React from 'react'
import { Link } from 'react-router-dom';
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";

const AdminDashboard = () => {
    const data = [
        { name: "Microwave", users: 2 },
        { name: "Bed Frame", users: 2 },
        { name: "String lights", users: 1 },
        { name: "TV", users: 4 },
        { name: "refrigerator", users: 1 }
      ];
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className='secondarycontent'>
                <div className="wrapper">
                    <div className="tile-container">
                        <div className="box ">
                            Total Number of user: 10
                        </div>
                        <div className="box ">
                            Total number of items posted:5
                        </div>
                        <div className="box ">
                            Total number of purchase request for the items: 3
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <Link to={"/admincontactus"}><button className="dashbutton">Contact us Questions</button></Link>
                </div>
            </div>
            
        <br/>
            <div className="parent" >
                <div style={{ textAlign: "center" }}>
                    <h2>item wise purchase request Analysis</h2>
                    <div className="Repo">
                        <PieChart width={350} height={450}>
                            <Pie
                                dataKey="users"
                                isAnimationActive={true}
                                data={data}
                                cx={200}
                                cy={200}
                                outerRadius={100}
                                fill="#80FF44"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                        <BarChart isAnimationActive={true} width={600} height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 25,
                                left: 90,
                                bottom: 5,
                            }}
                            barSize={21}
                        >
                            <XAxis
                                dataKey="name"
                                scale="point"
                                padding={{ left: 10, right: 10 }}
                            />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="users" fill="#80FF44" background={{ fill: "#eee" }} />
                        </BarChart>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
