import React, { useState } from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";
import {createCategory} from "./helper/adminapicall";


const AddCategory = () =>{

    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const {user,token} = isAutheticated();

    const goBack = ()=>{
        return(
            <div className="mt-3">
            <Link className="btn btn-sm btn-outline-light bg-dark "  to="/admin/dashboard">  Admin Home</Link>
        </div>
        )
    }
const handleChange= event=>{
    setError("");
    setName(event.target.value);
};

const onSubmit=event =>{
    event.preventDefault();
    setError("");
    setSuccess(false);

    //backend request fired
    createCategory(user._id, token, { name }).then(data =>{
        if(data.error){
            setError(true);
        }else{
            setError("");
            setSuccess(true);
            setName("");
        }
    });
};

const seccessMessage = ()=>{
    if(success){
        return <h4 className="text-success">Category created successfully</h4>
    }
}

const errorMessage =()=>{
    if(error){
        return <h4 className="text-denger">Failed to create category</h4>
    }
}


    const CategoryForm =()=>{
        return(
            <form className="border border-success  p-2">
                <div className="form-group input-group-sm">
                    <p className="lead">Enter the Category</p>
                    <input type="text" 
                        className="form-control " 
                        autoFocus
                        required
                        placeholder="Ex. Summer"
                        onChange={handleChange}
                        value={name}
                        />
                    <small className="form-text text-muted">This will direct effect to our System</small>
                </div>
                <button onClick={onSubmit} type="submit" class="btn btn-outline-info btn-sm btn-block">Submit</button>
          </form>
        );
    };


    return(

        <Base
         title="Create a new Category"
         Description="Create a new category for new T-Shirts"
         className="container bg-dark p-4"
        >
            {goBack()}
        <div className="row bg-light rounded">
             
            <div className="col-md-8 offset-md-2">
                {seccessMessage()}
                {errorMessage()}
                {CategoryForm()}
            </div>
        </div>
        </Base>
    );
};

export default AddCategory;