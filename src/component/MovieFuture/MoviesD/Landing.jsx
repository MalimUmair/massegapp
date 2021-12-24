import React,{useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from '../NAV/NavBar';
import ProductCart from '../MoviesA/ProductCart';
import ProductParent from '../MoviesA/ProductParent';
import ProductDetails from '../MoviesA/ProductDetails';

const Landing = () => {
    const [search, setSearch] = useState("");
    return (
        <div>
            <BrowserRouter>
                 <NavBar setSearch= {setSearch}/>
                 <Routes>
                     <Route path ="/" element={<ProductParent search= {search}/>}   />
                     <Route path ="/details" element={<ProductDetails/>}   />
                 </Routes>
                 </BrowserRouter>
            
        </div>
    );
};

export default Landing;
// when at time of fillter persom i.e tieme seardch perperfom