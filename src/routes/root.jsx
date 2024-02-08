import {Outlet, Link } from "react-router-dom"
import { useState } from 'react';


export default function Root() {

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
            </nav>
            <div id="content">
                <Outlet />
            </div>
        </>
    )
}