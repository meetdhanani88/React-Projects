import { Link } from 'react-router-dom';
import { useContext } from "react";

import classes from './MainNavigation.module.css';
import AuthContext from '../../store/Auth-contex';

const MainNavigation = () => {

  const Auth = useContext(AuthContext);

  function logout() {
    Auth.logout();
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!Auth.isLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}

          {Auth.isLoggedIn && <li>
            <Link to='/profile'>Profile</Link>
          </li>}

          {Auth.isLoggedIn && <li>
            <button onClick={logout}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
