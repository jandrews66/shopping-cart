import {Outlet, Link } from "react-router-dom"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IconBtn } from '../components/Buttons'
import styled, { css } from 'styled-components';


const CartCount = styled.span`
  font-size: 0.4em; /* Adjust the font size as needed */
  color: white;
  background-color: #0000ffe7;
  border: 3px solid #0000ffe7;
  padding: 0 0.3em;
  border-radius: 20px;
  `;

export default function Root() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    function handleClick(){
        navigate(`/shop/cart/`)
    }

    return (
        <>
            <h1>Big Joe's Discount Electronics</h1>
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
                <IconBtn 
                $cart 
                onClick={handleClick}>
                <FaShoppingCart />
                <CartCount>{cart.length}</CartCount>
                </IconBtn>
            </nav>
            <div id="content">
                <Outlet context={[cart, setCart]}/>
            </div>
        </>
    )
}