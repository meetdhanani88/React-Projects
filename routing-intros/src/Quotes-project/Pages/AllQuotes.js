import React, { useState, useLayoutEffect } from 'react';

import QuoteList from '../Component/quotes/QuoteList';

function AllQuotes() {
    const [data, Setdata] = useState([]);

    const getUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const datas = await res.json();
        Setdata(datas);

    };


    useLayoutEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <QuoteList quotes={data} ></QuoteList>

        </>
    )
}

export default AllQuotes;