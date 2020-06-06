import React from "react";
import Base from "../core/Base";
import {isAutheticated} from "../auth/helper/index";
import { Link } from "react-router-dom";

const AdminDashboard = () =>{
    const {user: {name, email, role}
} = isAutheticated();

const adminrightside = () =>{

    return(
        <div className="card border-secondary ">
        <div className="card-header   text-white"></div>
        <ul className="list-group text-success">
            <li className="list-group-item list-group-item-action">
                <Link  to="/admin/create/cotegory" className="list-group-item-action">Create Categories</Link>
            </li>
            <li className="list-group-item list-group-item-action">
                <Link  to="/admin/cotegories" className="list-group-item-action">Manage Categories</Link>
            </li>
            <li className="list-group-item list-group-item-action">
                <Link  to="/admin/create/product" className="list-group-item-action">Add New Product</Link>
            </li>
            <li className="list-group-item list-group-item-action">
                <Link  to="/admin/products" className="list-group-item-action">Manage Products</Link>
            </li>
            <li className="list-group-item list-group-item-action">
                <Link  to="/admin/orders" className="list-group-item-action">Manage Order</Link>
            </li>
        </ul>
        </div>

    );

};
const adminleftside = () =>{
    return(
        <div className="card border-secondary mb-3">
        <div className="card-header"><b>Details:</b> <span className="float-right">Your Privilege : <span className="badge badge-danger">{role == 1 ? "ADMIN":"USER" } </span></span></div>
        <div className="card-body text-secondary">
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Name :</b> {name} </li>
            <li className="list-group-item"><b>Email :</b> {email} </li>
        </ul>
        </div>
        </div>
    )
}
    return(
        <Base title="Welcome To The Admin area." Description="Now You can manage your business here."
        className="container-sm bg-dark p-4">

        <div className="row">
            <div className="col-3">
                {adminrightside()}
            </div>  
            <div className="col-9">
                {adminleftside()}
            </div>

        </div>      
    </Base>
    );
};

export default AdminDashboard;