import "../components_style/button_item_style.css"
import { Link } from "react-router-dom"

function Button(props) {
    return ( 
        <Link to={props.link} target={props.target} class="button" >{props.name}</Link>
     );
}

export default Button;