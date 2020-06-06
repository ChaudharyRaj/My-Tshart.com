import React , {useState, useEffect} from "react"
import ImageHelper from "./helper/ImageHelper";
 

const NewCard =  ()=> {
    return (
        <div className="card-deck">
            <div className="card">
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1700944/2019/6/8/c3d336e4-8c86-4434-94b2-c9b28b6dd6471559989322777-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--2.jpg" height="400: px" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p><small>Rs. 199/-</small></p>
                    <button className="btn btn-danger btn-block"><small>ADD TO CART</small></button>
                </div>
            </div>
        </div>
    );
}

export default NewCard;