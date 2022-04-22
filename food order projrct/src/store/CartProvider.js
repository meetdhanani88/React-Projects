import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultstate = {
    items: [],
    totalAmount: 0
}
function cartreduser(prestate, action) {

    if (action.type === "ADD") {
        //EX:items={id: 'm1', amount: 1, name: 'Sushi', price: 22.99}
        const updatedTotalamt = prestate.totalAmount + (action.item.amount * action.item.price);

        //find index of existing items
        const existingitemsIndex = prestate.items.findIndex(item => item.id === action.item.id);

        //get existimg items using index ({id: 'm1', amount: 3, name: 'Sushi', price: 22.99})
        const existingitems = prestate.items[existingitemsIndex];

        let updatedItems

        if (existingitems) {

            //Changing Amount(quantity) Of item which already in cart(array)
            const updatedItem = {
                ...existingitems,
                amount: existingitems.amount + action.item.amount
            };
            //getting all items of previous state and store into updatedItems
            updatedItems = [...prestate.items];

            //updating only Item which already Availble using existingitemsIndex to updatedItem(with new amount Not with new fiels)
            updatedItems[existingitemsIndex] = updatedItem;

        }
        else {
            //update item using new field
            updatedItems = prestate.items.concat(action.item);  //[].concat(item)=[{}]
        }

        //Here cartstate update whenever user click on +Add
        //So - re-render page with updated cartcontext value(bcz cartcontext using cartstate values )
        /*this updated cartcontext Value also update cartbtn showing value 
        (bcz sumofall{cartcontex.items.amount} use to show cartitems number in UI )*/
        return {
            items: updatedItems,
            totalAmount: updatedTotalamt
        }


    }

    if (action.type === "REMOVE") {
        console.log(action.id);
        //find index of clicked items
        const ClickeditemsIndex = prestate.items.findIndex(item => item.id === action.id);

        //get clicked items using index ({id: 'm1', amount: 3, name: 'Sushi', price: 22.99})
        const clickeditems = prestate.items[ClickeditemsIndex];
        console.log("clickeditems", clickeditems);
        const updatedTotalamt = prestate.totalAmount - clickeditems.price;
        let updatedItems


        if (clickeditems.amount === 1) {
            updatedItems = prestate.items.filter(item => item.id !== action.id)
        }
        else {
            updatedItems = [...prestate.items];
            const updatedItem = { ...clickeditems, amount: clickeditems.amount - 1 };
            updatedItems[ClickeditemsIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalamt
        }
    }

    return defaultstate;
}
const CartProvider = (props) => {
    const [cartstate, dispatchcartstate] = useReducer(cartreduser, defaultstate)

    const addItemToCartHandler = (itemdata) => {
        dispatchcartstate({ type: "ADD", item: itemdata })
    };

    const removeItemFromCartHandler = (id) => {
        dispatchcartstate({ type: "REMOVE", id: id })
    };

    const cartContext = {
        items: cartstate.items,
        totalAmount: cartstate.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    console.log(cartContext);

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;