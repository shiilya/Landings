import "../../components_style/cartPage/card_cartPage_style.css"

function CardCartPage(props) {
    return ( 
        <div class="cart__product">
					<div class="cart__info">
						<img src={props.img} alt="cart1" class="card__img"/>
					</div>
					<div class="cart__description">
						<p class="cart__description-title">{props.title}</p>
						<p class="cart__description-text">Color:<span>{props.color}</span></p>
						<p class="cart__description-text">Size:<span>{props.size}</span></p>
					</div>
				</div>
     );
}

export default CardCartPage;