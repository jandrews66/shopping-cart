import {Outlet, Link } from "react-router-dom"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Root() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    function handleClick(){
        navigate(`/shop/cart/`)
    }

    return (
        <>
            <h1>My Shop</h1>
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
                <button onClick={handleClick}>Cart: {cart.length}</button>
            </nav>
            <div id="content">
                <Outlet context={[cart, setCart]}/>
            </div>
        </>
    )
}