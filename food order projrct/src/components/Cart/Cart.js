import Modal from '../Ui/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import CartItem from './CartItem';



const Cart = (props) => {
    const cartctx = useContext(CartContext);

    function cartItemAddHandler(item) {
        //Keeping old item as it is & Giving Item with Updated Amount
        cartctx.addItem({ ...item, amount: 1 })
    };

    function cartItemRemoveHandler(id) {
        cartctx.removeItem(id);
    };

    const cartitems =
        <ul className={classes["cart-items"]}>
            {
                cartctx.items.map((item) =>
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={() => cartItemRemoveHandler(item.id)}
                        onAdd={() => cartItemAddHandler(item)}
                    >
                    </CartItem>
                )}
        </ul>




    return (
        <Modal onbackdrop={props.oncartclose}>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${cartctx.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.oncartclose}>Close</button>
                <button className={classes.button} >
                    <a className={classes.a} href="https://rzp.io/l/I8DophDa" target="_blank">order</a>
                </button>
            </div>
        </Modal>
    )

};

export default Cart;