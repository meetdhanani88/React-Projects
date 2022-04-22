import classes from './ProfileForm.module.css';
import React, { useRef, useContext } from 'react'
import AuthContext from '../../store/Auth-contex';


const ProfileForm = () => {
  const Newpass = useRef();
  const Auth = useContext(AuthContext)

  function submit(event) {
    event.preventDefault();
    const pass = Newpass.current.value;

    (async () => {

      const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCrVfJ9anE9xWGPSYi9UovgHD45e_FmA0M", {
        method: "POST",
        body: JSON.stringify({
          idToken: Auth.token,
          password: pass,
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
  return (
    <form className={classes.form} onSubmit={submit}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={Newpass} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
