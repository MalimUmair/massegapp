import React from 'react';
import { useSelector, useDispatch} from 'react-redux';


const ProductDetails = () => {
    const dispatch = useDispatch();
   const selectedItem = useSelector((state)=> state.groupReducer.selectedproduct)   // call back funcation to use selector
    return (
        <div className="card-parent">
            <div className="card">
            <h1>ProductDetails</h1>
            <img className="photos" src={selectedItem.Poster}  alt="" />                    
            <h3>{selectedItem.Title}</h3>
            <h4>Year: {selectedItem.Year}</h4>
            <h4>Rating: {selectedItem.Rating}</h4>
            <button onClick = {()=> dispatch({type: "Add-Cart" , data:selectedItem})}>ADD To Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;