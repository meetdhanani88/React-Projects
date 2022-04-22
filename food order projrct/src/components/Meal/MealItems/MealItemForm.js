import { useRef } from 'react';
import Input from '../../Ui/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const enteredAmountinputRef = useRef();

    const submitHandeler = (event) => {
        event.preventDefault();
        const enteredamount = enteredAmountinputRef.current.value;
        const enteredamountNum = +enteredamount;
        props.onAddcart(enteredamountNum);
    }
    return (
        <form className={classes.form} onSubmit={submitHandeler}>

            <Input
                ref={enteredAmountinputRef}
                label='Amount'
                input={{
                    id: props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm;