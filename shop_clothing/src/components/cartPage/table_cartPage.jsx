import "../../components_style/cartPage/table_cartPage_style.css"
import Button from "../button_item";
import CardCartPage from "./card_cartPage";
import DataCartPage from "./data_cartPage";
import InformationCartPage from "./information_cartPage";

function TableCartPage() {
    return ( 
        <section class="cart">
		<div class="container">
			<div class="cart__wrapper">
				<div class="cart__title cart__title-left">
					<p class="cart__column cart__column-width">Product Details</p>

				</div>
				<div class="cart__title cart__title-right">
					<p class="cart__column">unite Price</p>
					<p class="cart__column">Quantity</p>
					<p class="cart__column">shipping</p>
					<p class="cart__column">Subtotal</p>
					<p class="cart__column">ACTION</p>
				</div>
			</div>


			<div class="cart__item">
				<div class="cart__product">
					<CardCartPage img="../img/cart1.jpg" title="Mango People T-shirt" color="red" size="XXL"/>
				</div>
				<div class="cart__data">
					<DataCartPage price="$150" subtotal="$300"/>
				</div>
			</div>

			<div class="cart__item">
				<div class="cart__product">
					<CardCartPage img="../img/cart2.jpg" title="Mango People T-shirt" color="red" size="XXL"/>
				</div>
				<div class="cart__data">
					<DataCartPage price="$150" subtotal="$300"/>
				</div>
			</div>

			<div class="cart__item">
				<div class="cart__product">
					<CardCartPage img="../img/cart3.jpg" title="Mango People T-shirt" color="red" size="XXL"/>
				</div>
				<div class="cart__data">
					<DataCartPage price="$150" subtotal="$300"/>
				</div>
			</div>

			<div class="cart__buttons">
                <Button name="clear shopping cart"/>
                <Button name="cONTINUE sHOPPING" link="/product-page"/>
			</div>

			<InformationCartPage/>
		</div>
	</section>
     );
}

export default TableCartPage;