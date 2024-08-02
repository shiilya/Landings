import "../../components_style/mainPage/cards_mainPage_style.css"
import CardItem from "../card_item";

function CardsMainPage() {
    return ( 
        <section class="items">
		<div class="container">
			<div class="items__title">
				<p>Fetured Items</p>
				<p class="items__subtitle">Shop for items based on what we featured in this week</p>
			</div>
			<div class="items__wrapper">
				<CardItem name="Mango People T-shirt" price="$52.00" src="./img/item1.jpg"/>
                <CardItem name="Mango People T-shirt" price="$53.00" src="./img/item2.jpg"/>
                <CardItem name="Mango People T-shirt" price="$54.00" src="./img/item3.jpg"/>
                <CardItem name="Mango People T-shirt" price="$52.00" src="./img/item4.jpg"/>
                <CardItem name="Mango People T-shirt" price="$58.00" src="./img/item5.jpg"/>
                <CardItem name="Mango People T-shirt" price="$51.00" src="./img/item6.jpg"/>
                <CardItem name="Mango People T-shirt" price="$52.00" src="./img/item7.jpg"/>
                <CardItem name="Mango People T-shirt" price="$59.00" src="./img/item8.jpg"/>
			</div>
		</div>
		<a href="product.html" class="product__btn">Browse All Product <i class="fa fa-long-arrow-right"
				aria-hidden="true"></i></a>
	</section>
     );
}

export default CardsMainPage;