import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";



function App() {
  const [cartIsShown, setcartIsShown] = useState(false)

  function Cartshow() {
    setcartIsShown(true);
  }
  function Carthide() {
    setcartIsShown(false);
  }
  return (

    <CartProvider>
      {cartIsShown && <Cart oncartclose={Carthide}></Cart>}
      <Header onHeadercart={Cartshow}></Header>
      <main>
        <Meals></Meals>
      </main>

    </CartProvider>
  );
}

export default App;
