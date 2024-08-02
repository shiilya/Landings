import "../components_style/card_item_style.css"
import { Link } from "react-router-dom"

function CardItem(props) {
    return ( 
                <div class="items__card">
					<Link to="/single-page" className="items__info-link" target="_blank">
						<img src={props.src} alt="item1" className="items__img"/>
						<span className="items__name">{props.name}</span><br/>
						<span className="items__price">{props.price}</span>
					</Link>
					<div className="items__info">
						<Link to="/product-page" className="items__link">
                             <img src="img/basket_w.png" alt="basket"
								className="items__infoimg"/> Add to Cart</Link>
					</div>
				</div>
     );
}

export default CardItem;