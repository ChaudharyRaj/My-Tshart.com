import React, {useState, useEffect} from "react"
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper";
import {getCategories,}  from "./helper/adminapicall";
import { Link } from "react-router-dom";


export const ManageCategories = () =>{

    const [categories, setCategories] = useState([])

    const {user, token} = isAutheticated();
    
    const preload = () =>{
      getCategories().then(data =>{
          if(data.error){
            console.log(data.error)
          }else{
            setCategories(data)
          }
        });
    };

    useEffect(()=>{
      preload();

    },[]);



    return(
    <Base title="Welcome To The Admin area." Description="Now You can manage your all Cotegoris here.!" className="container-sm p-4">
      <h2 className="mb-4">All Cotegoris:</h2>
        <div className="row">
        <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">&lt;&lt;Dashboard</span>
      </Link>
        <div className="col-12 card">
        <div class="table-responsive-md table-hover pad1y">
        <table class="table">
            <tbody>
            {categories.map((category, index) =>{
              return(
                <tr key={index}>
                <td>{category.name}</td>
                <td><Link className="btn btn-secondary btn-sm" to={""}><span className="">Edit</span></Link></td>
                <td><button onClick="" className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
              );
              })}
            </tbody>
        </table>
        </div>
      </div>
      </div>
    </Base>
    )
}
export default ManageCategories;