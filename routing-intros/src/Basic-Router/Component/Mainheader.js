import React from 'react'
import { NavLink } from "react-router-dom"
import "./Mainheader.css"

function Mainheader() {
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName='active' to="/welcome">Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to="/product">product</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Mainheader