import React , {useState, useEffect} from "react"
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/CartHelper";

const Card = ({product, addtoCart = true, removeFromCart =  false ,setReload = f => f, reload = undefined}) => {

  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

    const cartTitle = product ? product.name : "A photo from pexels";
    const cartDescription = product ? product.Description : "Description";
    const cartPrice = product ? product.price : "$10";

    const addToCart = () =>{
      addItemToCart(product, () => setRedirect(true))
    }

    const getRedirect = redirect =>{

      if(redirect){
        return <Redirect to="/cart"/>;
      }
    };

    const showAddtocart = addtoCart =>{
      return(
        addtoCart &&(   
          
          <button onClick={addToCart} className="btn btn-danger btn-block"><small>ADD TO CART</small></button>
      ))
    }


    const showRemoveFromcart = removeFromCart =>{
      return(
        removeFromCart && (
          <button onClick={() => {removeItemFromCart(product._id);setReload(!reload);}} className="btn btn-block btn-outline-danger mt-2 mb-2"> Remove</button>
        )
    )
  }

    return (
  
      <div className="card-group">
            <div className="card">
            {getRedirect(redirect)}
              <ImageHelper  product = {product} />
                <div className="card-body">
                    <h5 className="card-title" style={{marginBottom:"0rem"}}>{cartTitle}</h5>
                    <p style={{marginBottom:"0rem"}}><small>{cartDescription}</small></p>
                    <p><small>Rs. {cartPrice}/-</small></p>
                    {showAddtocart(addtoCart)}
                    {showRemoveFromcart(removeFromCart)}
                </div>
            </div>
        </div>
    );
}
export default Card;