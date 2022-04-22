import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext, useState, useEffect } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const Cartctx = useContext(CartContext);
    const [isbump, setisbump] = useState(false)
    useEffect(() => {
        if (Cartctx.items.length === 0) {
            return;
        }
        setisbump(true)
        const timer = setTimeout(() => setisbump(false), 300);

        return () => { clearInterval(timer); }
    }
        , [Cartctx.items])


    const NumOfCartItems = Cartctx.items.reduce((curItem, item) => {
        return curItem + item.amount;
    }, 0)

    const btnclass = `${classes.button} ${isbump ? classes.bump : ""}`
    return (

        <button className={btnclass} onClick={props.onHeaderbtn} >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{NumOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;