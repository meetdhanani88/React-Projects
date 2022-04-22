import React from 'react'
import { useRouter } from "next/router"

function subnews() {
    const router = useRouter();
    const params = router.query.anything;

    return (
        <div>
            <h1>{params}</h1>
        </div>
    )
}

export default subnews;