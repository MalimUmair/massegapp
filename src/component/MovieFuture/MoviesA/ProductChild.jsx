import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Redux.css"

const ProductChild = ({item}) => {
    const dispatch = useDispatch()
    return (
      
        <div className='card'>
           
            <img className='image' src={item.Poster} height="300px" width="200px" alt="" />
            <h3>{item.Title}</h3>
            <h4>Year: {item.Year}</h4>
            <h4>Rating: {item.Rating}</h4>
            <Link to= "/details">
            <button onClick={()=>dispatch ({type: "Selected-Product" , data:item})}>Details</button>    
            </Link>
            </div>
         
    );
};

export default ProductChild;