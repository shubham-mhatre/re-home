import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminService from '../../Services/AdminService';
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
  
  export default class AdminDashboard extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        data:[],
        totalUsers:0,
        totalItemPosts:0,
        totalSoldItem:0,
        id:null
        
      };
      this.render = this.render.bind(this);
    }
  
    componentDidMount(){
     
     
      AdminService.getAdminHeaderData().then((resp)=>{ 
        this.setState(
          {
            totalUsers:resp.data[0].count,
            totalItemPosts:resp.data[1].count,
            totalSoldItem:resp.data[2].count
          })

      }).catch((error)=>{
        alert(error);
      });
    }
     
   
    render() {
        document.body.classList.remove('home-background');
        document.body.classList.add('dashboard-background');
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
                            Total Number of user: {this.state.totalUsers} 
                        </div>
                        <div className="box ">
                            Total number of items posted: {this.state.totalItemPosts}
                        </div>
                        <div className="box ">
                            Total number of sold items: {this.state.totalSoldItem}
                        </div>
                    </div>
                </div>
                <div className="button-container">

                    <Link to={"/admincontactus"}><button className="dashbutton">Contact us Questions</button></Link>
                    <Link to={"/approveitems"}><button className="dashbutton">Approve items</button></Link>
                    
 
                </div>
            </div>
            
        <br/>
            <div className="parent" >
                <div style={{ textAlign: "center" }}>
                    <h2>Item wise purchase request Analysis</h2>
                    <div className="Repo">
                        <PieChart width={350} height={450}>
                            <Pie
                                dataKey="users"
                                isAnimationActive={true}
                                data={data}
                                cx={200}
                                cy={200}
                                outerRadius={100}
                                fill="#36046D"
                                label={{ fill: 'white' }}
                                
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
                                tick={{ fill: 'white' }} 
                                axisLine={{ stroke: 'white' }}
                                
                            />
                            <YAxis 
                            tick={{ fill: 'white' }} 
                            axisLine={{ stroke: 'white' }} 
                            />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="users" fill="#36046D" background={{ fill: "#eee" }} />
                        </BarChart>
                    </div>
                </div>
            </div>
        </div>
    )
}

  }
