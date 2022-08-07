import "./style.css"
import { CgMenu } from "react-icons/cg"

function Header(props){
    return (
        <div className="header">
            <div className="header__button"><div onClick={props.menuActive}><CgMenu /></div></div>
            <div className="header__title"><h1 className="header__titletext">{props.title}</h1></div>
            </div>
    )
}

export default Header