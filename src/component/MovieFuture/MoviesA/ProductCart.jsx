import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.groupReducer.cart);
  console.log("===", cartItem);
  return (
    <div>
      <h1>This is product cart</h1>
      <div className="card-parent">
        {cartItem.map((item) => {
          return (
            <div className="card">
              <img className="image" src={item.image} alt="" />
              <h3>{item.title.substr(0, 20) + "..."}</h3>
              <h4>price: ${item.price}</h4>

              <button onClick={()=>dispatch ({type:"Remove-Product", data:item})}>Remove</button> 
              <Link to="/details">
              <button onClick={()=>dispatch ({type:"Selected-Product", data:item})}>View Detils</button>
              </Link>

            </div>
            // dispatch in this action is give to update two key  what type of object is desied
          );
        })}
      </div>
    </div>
  );
};
export default ProductCart;

// Remove at one time all product in delete  why same key same value in cart and delelt time all porduct delet this not good 
/// unic id to do
