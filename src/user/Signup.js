import React, {useState} from "react"
import Base from "../core/Base"
import {Link} from "react-router-dom"
import {signup} from "../auth/helper"

const Signup = () =>{

    const [values, setValues] = useState({
        name: "",
        email: "",
        passwoed: "",
        error: "",
        success: false
    });

    const {name, email, password, error,success} =values;

    const handleChamge =  name => event =>{

        setValues({...values, error: false, [name]: event.target.value});
    }

    const onSubmit= event =>{

        event.preventDefault()
        setValues({...values, error:false})
        signup({name,email,password})
        .then(data =>{
            if(data.error){
                setValues({...values,error: data.error, success: false})
            }else{
                setValues({
                    ...values,
                    name:"",
                    email:"",
                    password:"",
                    error:"",
                    success: true
                });
            }
        })
        .catch(console.log("Error in signup"))
    };

    const signupForm =() =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div class="card">
                        <div class="card-body">
                        <form>
                            <div className="form-group">
                                <label className="text-light">Name</label>
                                <input className="form-control"
                                    onChange={handleChamge("name")} 
                                    value={name}
                                    autoFocus
                                    required
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>

                            <div className="form-group">
                                <label className="text-light">Email</label>
                                <input className="form-control"
                                    onChange={handleChamge("email")}
                                    value={email}
                                    autoFocus
                                    required
                                    type="email"
                                    placeholder="Ex. @gmail.com"
                                />
                            </div>

                            <div className="form-group">
                                <label className="text-light">Password</label>
                                <input
                                    onChange={handleChamge("password")}
                                    className="form-control"
                                    autoFocus
                                    required
                                    value={password}
                                    minLength="3"
                                    type="passwoed" 
                                    placeholder="Password"
                                />
                            </div>
                            <button type="submit" className="btn btn-danger btn-block" onClick={onSubmit}>SIGN UP</button>
                        </form>
                        </div>
                        </div>
                </div>
            </div>

        )
    }

    const successMessage =()=>{
        return(   
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" role="alert"
                        style={{display: success ? "": "none" }}>
                        New Account successfully created. please<Link to="/signin">Login here</Link>
                    </div>
                </div>
            </div>
        );
    };


    const errorMessage =()=>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">

                    <div className="alert alert-danger" role="alert"
                        style={{display: error ? "": "none" }}>
                        {error}
                    </div>
                </div>
            </div>    
        );
    };

    return(
        <Base title ="Sign Up" Description = "Create a new account !">
        {successMessage()}
        {errorMessage()}
        {signupForm()}
        <p className="text-white text-center">{JSON.stringify(values)} </p>
        </Base>
    )
}
export default Signup;