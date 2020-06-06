import React from "react"
import Menu from "./Menu";

const Base = ({
    title= "My Title",
    Description = "My Description",
    className = "text-center",
    children
}) =>(
        <div>
            <Menu></Menu>
            <div className="container-fluid">
                <div className="jumbotron    text-center">
                    <h1 className="display-5">{title}</h1>
                    <p className="lead">{Description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark" >
                <div className="row">
                    <div className="col-4">
                    <span className="text-white">
                        <i className="small">Devloped &amp; Desidend By : </i>
                        <span className="small">Raj kumar chaudhary</span>
                    </span>
                    </div>
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                     <span className="text-white">Support:<i className="small"> MyTshirt@.com</i></span>
                    </div>

                </div>
            </footer>
        </div>
    )
export default Base;