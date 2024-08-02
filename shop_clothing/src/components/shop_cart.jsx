import "../components_style/shop_cart_style.css"
import Button from "./button_item";

function Shop_cart() {
    return ( 
        <>
        <summary className="basket__title">
							<img src="img/basket.png" alt="basket"/>
						</summary>
						<div className="basket__menu">
							<div className="basket__card">
								<a href="#" className="basket__link"></a>

								{/* <a href="#" class="basket__close"></a>  */}

								<div className="basket__img">
									<img src="img/basket1.jpg" alt="basket1"/>
								</div>
								<div className="busket__info">
									<h4>redox zane</h4>
									<p><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i
											className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i
											className="fa fa-star-half-o" aria-hidden="true"></i></p>
									<p className="busket__info-price">1 x $250</p>
								</div>
								<div className="basket__close">
									<p className="basket__close-link"><i className="fa fa-times-circle" aria-hidden="true"></i></p>
								</div>
							</div>
							<div className="basket__card">
								<a href="#" className="basket__link"></a>

								{/* <a href="#" class="basket__close"></a>  */}

								<div className="basket__img">
									<img src="img/basket2.jpg" alt="basket2"/>
								</div>
								<div className="busket__info">
									<h4>redox zane</h4>
									<p><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i
											className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i
											className="fa fa-star-half-o" aria-hidden="true"></i></p>
									<p className="busket__info-price">1 x $250</p>
								</div>
								<div className="basket__close">
									<p className="basket__close-link"><i className="fa fa-times-circle" aria-hidden="true"></i></p>
								</div>
							</div>
							<div className="basket__price">
								<p>total</p>
								<p>$500.00</p>
							</div>
<div className="basket__check">
							<Button link="/checkout-page" target="_blank" name="checkout"/>
							</div>
							<Button link="/cart-page" name="go to cart"/>

						</div>
        </>
     );
}

export default Shop_cart;