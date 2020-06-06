import React, { useState, useEffect } from "react"
import Base from "../core/Base";
import { Link } from "react-router-dom";
 
export const ManageOrders = () =>{
     
    return(
        <Base title="Welcome To The Admin area." Description="Now You can manage your all Product's Orders here.!" className="container">
      <div className="row text-center">
      <Link  to={`/admin/dashboard`}>
      <img className="center" src="https://www.psdstamps.com/wp-content/uploads/2019/11/grunge-coming-soon-label-png.png" height="400 px" width="600 px"/>
      </Link>
      </div>
      <div className="row">
     
        
      
      </div>
    </Base>
    )
}
export default ManageOrders;