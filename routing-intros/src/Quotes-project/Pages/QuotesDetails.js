import React, { useState, useEffect } from 'react';
import { useParams, Route, Link, useLocation, } from 'react-router-dom';
import Comments from '../Component/comments/Comments';
import HighlightedQuote from "../Component/quotes/HighlightedQuote.js"
// const Dummy_data = [
//     { id: "q1", author: "meet", text: "Learning React Router" },
//     { id: "q2", author: "selin", text: "Learning React Routerv5" }
// ]

function QuotesDetails() {
    const { qid } = useParams();
    const location = useLocation();
    const [data, setdata] = useState(location.state);

    useEffect(() => {
        setdata((pre) => pre);
    }, [])


    if (!data) {
        return <h1>No Quotes Found</h1>
    }

    return (
        <div>
            <HighlightedQuote text={data.text} author={data.author} ></HighlightedQuote>
            <Route path={`/quotes/${qid}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`/quotes/${qid}/comment`} >Goto Comment</Link>
                </div>
            </Route>
            <Route path='/quotes/:qid/comment'>
                <Comments></Comments>
            </Route>
        </div>
    )
}

export default QuotesDetails;



