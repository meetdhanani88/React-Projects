import style from "./SubmitedFiels.module.css"
function SubmitedField(props) {

    const content =
        props.datass.map((item) => { return <p key={item.id}>My Name is {item.username} and Age is {item.age}</p > })
    return (
        <div className={style.submiteddata}>
            {content}
        </div>
    )


}
export default SubmitedField;