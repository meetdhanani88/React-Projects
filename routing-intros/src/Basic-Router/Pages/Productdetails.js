import React from 'react'
import { useParams } from "react-router-dom"

function Productdetails() {
    const para = useParams();
    console.log(para.pid);
    return (
        <div>
            <h1>Product {para.pid} details</h1>
            <p>{para.pid}</p>
        </div>
    )
}

export default Productdetails