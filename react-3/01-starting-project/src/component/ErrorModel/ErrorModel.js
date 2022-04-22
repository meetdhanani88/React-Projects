import style from "./ErrorModel.module.css"
import { useState } from "react"

function ErrorModel(props) {

    const [errorbox, seterrorbox] = useState(true);
    function close() {
        seterrorbox(false)
        props.setError(false);
    }
    return (
        errorbox && < div className={style.divs} >
            <h1>{props.title}</h1>
            <p>{props.msg}</p>

            <button onClick={close}>exit</button>
        </div >
    )
}
export default ErrorModel;