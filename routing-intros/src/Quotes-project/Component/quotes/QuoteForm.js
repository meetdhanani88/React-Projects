import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';


const QuoteForm = (props) => {
  const [isEntring, setisEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  function submitHandel() {
    setisEntering(false);
  }
  function focusHandel() {
    setisEntering(true)
  }

  // window.onbeforeunload = function (e) {
  //   if (isEntring) {
  //     console.log(e);
  //     return ""
  //   }
  // }

  return (
    <>
      <Prompt when={isEntring} message={(location) => { return `Are you sure?` }} />
      <Card>
        <form className={classes.form} onFocus={focusHandel} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className='btn' onClick={submitHandel}>Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;



