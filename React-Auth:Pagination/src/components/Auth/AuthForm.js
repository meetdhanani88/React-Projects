import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/Auth-contex';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const email = useRef();
  const pass = useRef();
  const auth = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  function submithandel(event) {
    event.preventDefault();
    if (isLogin) {

      const Email = email.current.value;
      const Pass = pass.current.value;


      (async () => {

        const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCrVfJ9anE9xWGPSYi9UovgHD45e_FmA0M", {
          method: "POST",
          body: JSON.stringify({
            email: Email,
            password: Pass,
            returnSecureToken: true
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const data = await res.json();
        console.log(data);
        auth.login(data.idToken);
      })();

    } else {
      const Email = email.current.value;
      const Pass = pass.current.value;
      (async () => {

        const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCrVfJ9anE9xWGPSYi9UovgHD45e_FmA0M", {
          method: "POST",
          body: JSON.stringify({
            email: Email,
            password: Pass,
            returnSecureToken: true
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const data = await res.json();

        console.log(data);
      })();
    }
  }


  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submithandel}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={email} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={pass} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
