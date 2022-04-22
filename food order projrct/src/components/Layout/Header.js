import mealimg from "../../assets/meals.jpeg"
import style from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {

    return (
        <>
            <header className={style.header}>
                <h1>React meal</h1>
                <HeaderCartButton onHeaderbtn={props.onHeadercart}></HeaderCartButton>
            </header>
            <div className={style["main-image"]}>
                <img src={mealimg} alt="no img" />
            </div>
        </>
    )

}
export default Header;