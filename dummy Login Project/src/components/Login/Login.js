import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


function emailreducer(prestate, action) {
  console.log("previousstate", prestate);
  console.log("action", action);

  if (action.type === "emailupdate") {
    //this return data pass to enteredEmail state And re-render.
    return { value: action.val, isvalid: "" };
  }
  if (action.type === "validity") {
    return { value: /*(enteredEmail_State.value)*/prestate.value, isvalid: prestate.value.includes('@') };
  }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [enteredEmail, dispatchenteredEmail] = useReducer(emailreducer, { value: '', isvalid: null })
  console.log("enteredemail", enteredEmail);

  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log("RE-render component after 2 sec");
      setFormIsValid(
        enteredEmail.value.includes('@') && enteredPassword.trim().length > 6
      );
    }, 2000);

    return () => {
      clearTimeout(timer);
      // console.log("time not taken more than 2 sec");
    }

  }, [enteredEmail.value, enteredPassword])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchenteredEmail(
      /* This Argument pass to Emailreduser as action parameter */
      /* previous Argument(Here initial state for first time) pass to Emailreduser as prestate parameter */
      { type: "emailupdate", val: event.target.value }
    )

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.value.includes('@')
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.value.includes('@'));
    dispatchenteredEmail({ type: "validity" })

  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${enteredEmail.isvalid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
