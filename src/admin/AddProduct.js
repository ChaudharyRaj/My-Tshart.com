import React, {useState, useEffect}from "react"
import Base from "../core/Base";
import { Link } from "react-router-dom";
import {getCategories, createaProduct} from "./helper/adminapicall"
import { isAutheticated } from "../auth/helper";

export const AddProduct = () =>{
    const {user , token} =isAutheticated();

    const [values, setValues] = useState({
        name:"",
        Description:"",
        price:"",
        stock:"",
        photo:"",
        categories:[],
        category:"",
        loading:false,
        error: "",
        createdProduct:"",
        getredirect: false,
        formData:""
    });
    const {name, 
        Description,
        price, 
        stock,
        photo,
        categories,
        category,
        loading,
        error,
        createdProduct,
        getredirect,
        formData
    } =values;
  
  const preload = () =>{
    getCategories().then(data =>{
      console.log(data)
      if(data.error){
        setValues({...values,error:data.error});
      }else{
        setValues({...values,categories: data , formData: new FormData() });
        
      }
    })
    
  };
  useEffect(() =>{
    preload();
  },[]);

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createaProduct(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          Description: "",
          price: "",
          photo: "",
          stock: "",
          loading: false,
          createdProduct: data.name
        });
      }
    });
  };


    const handleChange=name=> event =>{

      const value = name === "photo" ? event.target.files[0] : event.target.value
      formData.set(name, value);
      setValues({...values, [name]: value});
    };

  const seccessMessage = () =>(

    <div className="alert alert-success mt-3"
     style={{display: createdProduct ? "": "none"}}
     >
       <h4>{createdProduct} created successfully</h4>
     </div>

  );

    const createProductForm = () => (
        <form>
          <span>choose photo</span>
          <div className="form-group">
            <label className="btn btn-block btn-success">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="name"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("Description")}
              name="Description"
              className="form-control"
              placeholder="Description"
              value={Description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              {categories && categories.map((cate, index) =>(
                <option key={index} value={cate._id}>{cate.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("stock")}
              type="number"
              className="form-control"
              placeholder="Stock"
              value={stock}
            />
          </div>
    
          <button
            type="submit"
            onClick={onSubmit}
            className="btn btn-outline-success btn-block mb-3"
          >
            Create Product
          </button>
        </form>
    );
    return(
        <Base
             title="Welcome To The Admin area."
             Description="Now You can create a New Product "
             className="container bg-dark p-4"
        >
            <Link to="/admin/dashboard" className="btn btn-dark btn-outline-light">&lt;&lt;Dashboard</Link>

            <div className="row bg-light  rounded">
                <div className="col-md-8 offset-md-2 border-success">
                    {seccessMessage()}
                    {createProductForm()}
                </div>
            </div>
        </Base>
    )
}
export default AddProduct;