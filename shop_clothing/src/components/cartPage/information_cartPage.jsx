import "../../components_style/cartPage/information_cartPage_style.css"

function InformationCartPage() {
    return ( 
        <div class="cart__information">
				<div class="cart__adress">
					<p class="cart__adress-title">Shipping Adress</p>
					<form action="#" class="cart__adress-form">
						<select class="cart__adress-form-country" name="country">
							<option class="cart__adress-form-country-option" value="Bangladesh">Bangladesh</option>
							<option class="cart__adress-form-country-option" value="Russian Federation">Russian
								Federation</option>
							<option class="cart__adress-form-country-option" value="Chile">Chile</option>
							<option class="cart__adress-form-country-option" value="Egypt">Egypt</option>
						</select>

						<input type="text" class="cart__adress-form-text" placeholder="State"/>
						<input type="text" class="cart__adress-form-text" placeholder="Postcode / Zip"/>
						<button type="submit" class="cart__form-btn">get a quote</button>
					</form>
				</div>
				<div class="cart__discount">
					<p class="cart__adress-title">coupon discount</p>
					<p class="cart__discount-subtitle">Enter your coupon code if you have one</p>
					<form action="#" class="cart__discount-form">
						<input type="text" class="cart__discount-form-text" placeholder="State"/>
						<button type="submit" class="cart__form-btn">Apply coupon</button>
					</form>
				</div>
				<div class="cart__total">
					<p class="cart__total-suptitle">Sub total <span> $900</span></p>
					<p class="cart__total-title">GRAND TOTAL <span>$900</span> </p>
					<a href="javascript:void(0);" class="cart__total-btn">proceed to checkout</a>

				</div>
			</div>
     );
}

export default InformationCartPage;