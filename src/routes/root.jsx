import {Outlet, Link } from "react-router-dom"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { LuShoppingBasket } from "react-icons/lu";
import { IconBtn, CartCount } from '../components/Buttons'

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
            <img src="/assets/logo2.png"></img>
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