import React, {Fragment} from "react"
import {Link, withRouter} from "react-router-dom"
import {signout,isAutheticated} from "../auth/helper"

const currentTab = (history,path) =>{
    if(history.location.pathname === path){
        return {color:"#079809"}
    
    }else{
        return{color: "#ffffff"}
    }
}
const Menu =({history}) =>(
    <div className="navigation">
        <ul className="nav nav-tabs bg-dark sticky-top">
            <li className="nav-item">
                <Link style={currentTab(history, "/")} className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/cart")} className="nav-link" to="/cart">Cart</Link>
            </li>

            {isAutheticated() && isAutheticated().user.role === 0 &&(
                <li className="nav-item">
                <Link style={currentTab(history, "/user/Dashbrod")} className="nav-link" to="/user/Dashboard">U.Dashbrod</Link>
                </li>
            )}
            {isAutheticated() && isAutheticated().user.role === 1 &&(
                <li className="nav-item">
                    <Link style={currentTab(history, "/admin/Dashbrod")} className="nav-link" to="/admin/Dashboard">Dashbrod</Link>
                </li>
            )}


           {!isAutheticated() && <Fragment>
                <li className="nav-item">
                    <Link style={currentTab(history, "/Signup")} className="nav-link" to="/Signup">SignUp</Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/Signin")} className="nav-link" to="/Signin">Sign in</Link>
                </li>
            </Fragment>}
            
            {isAutheticated() && (
                <li className="nav-item">
                    <span className="nav-link text-light"
                    onClick={() =>{
                        signout(() =>{
                            history.push("/");
                        })
                    }}
                    >
                        Signout
                    </span>
                </li>
            )}
            
        </ul>
    </div>
)

export default withRouter(Menu); 