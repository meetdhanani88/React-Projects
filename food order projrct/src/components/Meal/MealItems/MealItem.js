import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';

const MealItem = (props) => {

    const cartctx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandeler = (amount) => {
        cartctx.addItem({ id: props.id, amount: amount, name: props.name, price: props.price })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddcart={addToCartHandeler} />
            </div>
        </li>
    );
};

export default MealItem;