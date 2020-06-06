import React, { useState, useEffect } from "react"
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import {getProducts, deleteProduct} from "./helper/adminapicall";

export const ManageProducts = () =>{
     
    const [products, setProducts] = useState([])

    const {user, token} = isAutheticated();
    
    const preload = () =>{
      getProducts().then(data =>{
          if(data.error){
            console.log(data.error)
          }else{
            setProducts(data)
          }
        });
    };

    useEffect(()=>{
      preload();

    },[]);

    const deleteThisProduct = productId => {
      deleteProduct(productId, user._id, token).then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          preload();
        }
      });
    };



    return(
        <Base title="Welcome To The Admin area." Description="Now You can manage your all Products here.!" className="container-sm p-4">
      <h2 className="mb-4">All Products:</h2>
      <div className="row">
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">&lt;&lt;Dashboard</span>
      </Link>
        <div className="col-12 card">
        <div class="table-responsive-md table-hover pad1y">
        <table class="table">
          
            <tbody>
            {products.map((product, index) => {
              return(
                <tr key={index}>
                  <td>{product.name}</td>
                  <td><Link className="btn btn-secondary btn-sm" to={`/admin/product/update/${product._id}`}><span className="">Edit</span></Link></td>
                  <td> <button onClick={() => {deleteThisProduct(product._id)}} className="btn btn-danger btn-sm">Delete </button></td>
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
export default ManageProducts;