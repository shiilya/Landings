import "../../components_style/cartPage/data_cartPage_style.css"

function DataCartPage(props) {
    return ( 
        <div class="cart__data">
					<div class="cart__price">
						{props.price}
					</div>
					<div class="cart__quantity">
						<input type="number" class="cart__quantity-data" value="2" max="99"/>
					</div>
					<div class="cart__shipping">
						FREE
					</div>
					<div class="cart__subtotal">
						{props.subtotal}
					</div>
					<div class="cart__action">
						<a href="javascript:void(0);" class="cart__action-link"><i class="fa fa-times-circle"
								aria-hidden="true"></i></a>

					</div>
				</div>
     );
}

export default DataCartPage;