import React from 'react'

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="admin-menu">
                <ul>
                    <li>
                        <a href="/admin/users">Manage Users</a>
                    </li>
                    <li>
                        <a href="/admin/products">Manage Products</a>
                    </li>
                    <li>
                        <a href="/admin/orders">Manage Orders</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminDashboard
