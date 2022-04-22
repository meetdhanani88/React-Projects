//xyz.com/news
import React from 'react'
import Link from "next/link"

function Newspage() {
    return (
        <div>
            <ul>
                <li><Link href="news/ok">Go to Another page</Link></li>
            </ul>
        </div>
    )
}

export default Newspage;