import React from 'react'
import { useHistory } from 'react-router-dom';
import QuoteForm from '../Component/quotes/QuoteForm';


function NewQuotes() {
    const his = useHistory();
    function quotedatahandeler(data) {
        console.log(data);
        his.push("/quotes")
    }
    return (
        <QuoteForm onAddQuote={quotedatahandeler}></QuoteForm>
    )
}

export default NewQuotes;