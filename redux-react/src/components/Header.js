import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../store/auth';

const Header = () => {
  const isAuth = useSelector(state => state.auth.isauth)

  const authdispatch = useDispatch();


  function logout() {
    authdispatch(authAction.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/' onClick={(e) => e.preventDefault()}>My Products</a>
          </li>
          <li>
            <a href='/' onClick={(e) => e.preventDefault()}>My Sales</a>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
