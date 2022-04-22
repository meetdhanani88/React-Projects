import style from "./form.module.css";
import { useState, useRef } from "react";
import ErrorModel from "../ErrorModel/ErrorModel";


const InputItems = (props) => {
    // const [UserName, setUserName] = useState();
    // const [age, setage] = useState();
    const UserName = useRef();
    const age = useRef();
    const [isError, setisError] = useState();

    function submited(event) {
        event.preventDefault();
        try {
            if (!UserName.current.value.trim().length || !age.current.value.trim().length) {

                setisError({
                    title: 'Invalid Input',
                    message: 'Please enter Username & Age',
                });
                return
            }
        } catch (error) {
            setisError({
                title: 'Empty Value',
                message: 'Enter Input.',
            });
            return
        }
        let inputdata = {
            username: UserName.current.value,
            age: age.current.value,
            id: Math.random().toString()
        }
        props.getinputdata(inputdata);
        UserName.current.value = '';
        age.current.value = '';
    }



    return (
        <>
            {isError &&
                <ErrorModel title={isError.title} msg={isError.message} setError={setisError} />}

            <form className={style.form} onSubmit={submited}>
                <label>username:</label>
                <input type="text" ref={UserName} />
                <br></br>
                <label>Age:</label>
                <input type="number" min={1} max={100} ref={age} />
                <br />
                <button type="submit">add USer</button>
            </form>
        </>
    )
}
export default InputItems;