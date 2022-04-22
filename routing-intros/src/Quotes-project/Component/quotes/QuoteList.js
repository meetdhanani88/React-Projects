import { Fragment } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import QuoteItem from './QuoteItem';

import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {

  const history = useHistory();
  const location = useLocation();

  const queryPara = new URLSearchParams(location.search);
  const sortmethod = queryPara.get("sort") === "asc";
  const Sortedquotes = sortQuotes(props.quotes, sortmethod);

  function Sorting() {
    history.push(`/quotes/?sort=${sortmethod ? "desc" : "asc"}`);
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={Sorting}>Short {sortmethod ? "Desending" : "Assending"}</button>
        <ul className={classes.list}>
          {Sortedquotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.username}
              text={quote.name}
            />
          ))}
        </ul>
      </div>

    </Fragment>
  );
};

export default QuoteList;
