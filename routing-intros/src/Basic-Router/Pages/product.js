import React from 'react';
import { Link } from "react-router-dom"

function Product() {
    return (
        <div>
            <h1>product</h1>
            <ul>
                <li>
                    <Link to="/product/p1">p1</Link>
                </li>

                <li>
                    <Link to="/product/p2">p2</Link>
                </li>

                <li>
                    <Link to="/product/p3">p3</Link>
                </li>
            </ul>
        </div>
    )
}

export default Product