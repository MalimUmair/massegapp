import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const NavBar = ({setSearch}) => {
    const cartItem =useSelector ((state)=> state.groupReducer.cart)
    return (
        <div>
            <h2>Movies Data</h2>
            <Link to="/">Home</Link>
            <input onChange={(e)=> setSearch(e.target.value)} type="search" placeholder='Search movie here' />    
            {/* <button>search</button> */}
            
        </div>
    );
};

export default NavBar;