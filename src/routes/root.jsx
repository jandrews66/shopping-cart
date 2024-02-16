import {Outlet, Link } from "react-router-dom"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { LuShoppingBasket } from "react-icons/lu";
import { IconBtn } from '../components/Buttons'
import styled, { css } from 'styled-components';


const CartCount = styled.span`
  font-size: 0.4em; /* Adjust the font size as needed */
  color: white;
  background-color: #0000ffe7;
  border: 3px solid #0000ffe7;
  padding: 0 0.3em;
  margin-left: -0.6em;
  border-radius: 20px;
  `;

export default function Root() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    function handleClick(){
        navigate(`/shop/cart/`)
    }
    // get url path
    let location = window.location.pathname
    return (
        <> 
        {/* If path is / show background image */}
        <div className={location == "/" ? "backg" : null}>
        <div id="header">
            <img src="./src/assets/logo2.png"></img>
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`shop`}>Shop</Link>
                    </li>
                    <li>
                        <Link to={`contact`}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <div id="cartIcon">
                    <IconBtn
                        type="button" 
                        $cart 
                        onClick={handleClick}>
                        <LuShoppingBasket style={{color: "white",}}/>
                        <CartCount>{cart.length}</CartCount>
                    </IconBtn>
            </div>

            
            </div>
            <div id="content">
                <Outlet context={[cart, setCart]}/>
            </div>
        </div>
        </>

    )
}