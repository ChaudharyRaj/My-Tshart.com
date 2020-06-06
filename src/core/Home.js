import React, {useState, useEffect} from 'react'
import "../styles.css"
import {API} from "../backend"
import Base from './Base';
import Card from './Card';
import NewCard from './newCard';
import { getProducts } from './helper/coreapicalls';

export default function Home(){
    const [products, setProducts] = useState([]);
    const [error, setError]  = useState(false);

    const loadAllProduct = () =>{
        getProducts().then(data=>{
            if (data.error){
                setError(data.error)
            }else{
                setProducts(data);
            }
        });
    };

    useEffect(() =>{
        loadAllProduct()
    },[])
    
    return(
        <Base title="MyT-shirt.com" Description ="Now you can Buy Your favorite-shirt Online.">
                    <div className="row">
                        {products.map((product, index) =>{
                            return(
                                <div key={index} className="col-3">
                                    <Card product ={product} />
                                </div>
                            )
                        })}
                    </div>
        </Base>
    )
}

