import React, {useState, useEffect} from 'react'
import "../styles.css"
import {API} from "../backend"
import Base from './Base';
import Card from './Card';
import { getProducts } from './helper/coreapicalls';
import {loadCart} from "./helper/CartHelper";
import { Link } from 'react-router-dom';
import StripeCheckout from './StripeCheckout';
import Paymentb from './Paymentb';
 
    
const Cart =() =>{
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() =>{
        setProducts(loadCart())
    }, [reload]);


    const loadAllProduct = (products) =>{
        return(
            <div>
                <h6>My Shopping cart ({products.length} {products.length > 1 ? "Items":"Item"})</h6>
                {products.map((product, index) =>(
                    <Card key={index}
                        product={product}
                        removeFromCart={true}
                        addtoCart={false}
                        setReload={setReload}
                        reload={reload}
                    />
                    
                ))}
            </div>
        )

       
    }

    // const loadCheckout =()=>{
    //     return(
    //         <div>
    //             <h2>This is checkout section</h2>
    //             <Link to="/" className="btn btn-outline-info">Back To Home</Link>
    //         </div>
    //     )
    // }

    return(
        <Base title="YOUR CART" Description ="Welcome To Online T-Shirt Store">
           <div className="row text-center">
                <div className="col-3">
                    {products.length > 0 ? loadAllProduct(products): (<h4>Cart is Empty</h4>) }
                </div>

                <div className="col-9">
                    {/* <StripeCheckout products={products} setReload={setReload} /> */}
                     <Paymentb 
                        products={products} 
                        setReload={setReload}
                     />
                </div>
            </div>
        </Base>
    )
    
}

export default Cart;

