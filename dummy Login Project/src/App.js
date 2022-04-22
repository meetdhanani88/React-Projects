import React, { useEffect, useState } from 'react';
import auth from './components/store/auth-contex';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("islogin") === "true") {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    localStorage.setItem("islogin", "true")
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("islogin")
    setIsLoggedIn(false);
  };

  return (

    <auth.Provider
      /*No value than App crash else other option Do not use auth.provider & directly consume default value)*/
      value={{ isLoggedIn: isLoggedIn }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </auth.Provider>

  );
}

export default App;
