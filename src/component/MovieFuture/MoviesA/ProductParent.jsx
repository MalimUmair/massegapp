import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import ProductChild from "./ProductChild";

import { useSelector } from 'react-redux';


const ProductParent = ({search}) => {
    const [products , setProducts] = useState([]);
    const stateProducts = useSelector ((state)=> state.groupReducer.product)
    const dispatch = useDispatch();
    const getApiData = async()=>{
        const allproducts = await axios.get("movies.json");
        setProducts(allproducts.data.Search);
       stateProducts.length<=0 &&
        dispatch({type:"Add-product" , data:allproducts.data.Search})                 // dispatch is a pull data in cart
        // console.log("----->",allAdd-Productproducts.data)
    }
    useEffect(()=>{
        getApiData();

    },[])                                  /// component did mout ho ne ke baad  getApi call hoga
   useEffect(()=>{
        const filteredProducts = stateProducts.filter((item)=>
         item.title.toUpperCase().includes(search.toUpperCase())
         );
        setProducts(filteredProducts)
   },[search])  // att time of serach on to be serach
    return (
   
        <div >
            <h1>This is Parent</h1>
            <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>       
                {products.map((item)=>{
                    return <ProductChild item={item}/> 
                })}   

           </div>

        </div>
    
    );
};

export default ProductParent;