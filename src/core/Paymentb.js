import React, {useState,useEffect} from "react";
import { loadCart, cartEmpty } from "./helper/CartHelper";
import { Link } from "react-router-dom";
import { createOrder } from "./helper/orderHelper";
import {getmeToken, processPayment} from "./helper/Paymentbhelper";
import { isAutheticated } from "../auth/helper";
import DropIn  from "braintree-web-drop-in-react";
import imgurl from "../assets/img/cart.png"


const Paymentb = ({products, setReload = f => f, reload = undefined}) =>{
  //  console.log("products lenght :",products.length)
    const [info, setInfo] = useState({
        loading: false,
        success:  false,
        clientToken: null,
        error: "",
        instance: {}
    });

    const userId = isAutheticated() && isAutheticated().user._id;
    const token = isAutheticated() && isAutheticated().token;

    // console.log("USER ID", userId);
    // console.log("TOKEN : ", token);

    const getToken = (userId, token) =>{
        getmeToken(userId, token).then(info =>{
           // console.log("INFORMATION: ",info);

            if (info.error) {
                setInfo({...info, error: info.error})
            }else{
                const clientToken = info.clientToken
                setInfo({clientToken})
            }
        })
    };

    const showbtdropIn = () =>{
        //console.log("Product Length is : ",products.length);
        return(
            <div>
            {info.clientToken !== null && products.length > 0 ? (
                <div>
                  <h3>Total:<small> Rs.</small> {getAmount()}<small>/-</small> </h3>
                <DropIn
                  options={{ authorization: info.clientToken }}
                  onInstance={(instance) => (info.instance = instance)}
                />
                <button className="btn btn-outline-success btn-block" onClick={onParchase}>Buy</button>
              </div>
            ) : (
                
                //  <span>
                //      <button className="btn btn-danger">Login</button>
                //      <h3>add somthing in ti cart</h3>
                //  </span>

                <div>
                    <img src={imgurl} height="200 px"/>
                    <br/>
                    <small>There is nothing in your cart. Let's add some items.</small>
                    <Link to="" className="btn btn-danger btn-block"> ADD ITEAMS</Link>
                   
                </div>
               
            ) }
        </div>
        )
    }

    const onParchase = () =>{
        setInfo({loading:  true});
        let nonce;
        let getNonce =  info.instance.requestPaymentMethod().then(data =>{
            nonce = data.nonce
            const paymentData = {
                paymentMethodNonce: nonce,
                amount: getAmount()
            };
            processPayment(userId, token, paymentData)
            .then(response =>{
                setInfo({...info, success: response.success, loading: false })
                console.log("PAYMENT SUCCESS", response);

                const orderData = {
                    products: products,
                    transaction_id: response.transaction.id,
                    amount: response.transaction.amount
                  };
              console.log("order Data  : ",orderData);

                createOrder(userId, token, orderData);

                cartEmpty(() =>{
                   // console.log("did you get a crash")
                });
                setReload(!reload);
            })
            .catch(error =>{
                setInfo({loading: false, success: false})
                console.log("PAYMENT FAILD")
            });
        });
    };

    const getAmount = () =>{
        let amount = 0;
        products.map(p =>{
            amount = amount + p.price
        })
        return amount;
    }

    useEffect(() =>{
        getToken(userId,token);

    },[]);

    return(
        <div className="row">
            <div className="col-6 offset-3">
            {showbtdropIn()}
            </div>
        </div>
    )
}

export default Paymentb;