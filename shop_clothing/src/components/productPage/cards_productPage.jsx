import CardItem from "../card_item";
import "../../components_style/productPage/cards_productPage_style.css"
import CardsSlideProductPage from "./cards_slide_productPage";

function CardsProductPage() {
    return ( 
        <>
        <div className="cards_grid">
           
        <CardItem name="Mango People T-shirt" price="$52.00" src="./img/item13.jpg"/>
        <CardItem name="Mango People T-shirt" price="$52.00" src="./img/item14.jpg"/>  
        <CardItem name="Mango People T-shirt" price="$52.00" src="./img/item15.jpg"/>
        <CardItem name="Mango People T-shirt" price="$52.00" src="./img/item16.jpg"/>
        <CardItem name="Mango People T-shirt" price="$52.00" src="./img/item17.jpg"/>
        <CardItem name="Mango People T-shirt" price="$52.00" src="./img/item18.jpg"/>
        <CardItem name="Mango People T-shirt" price="$52.00" src="./img/item6.jpg"/>
        <CardItem name="Mango People T-shirt" price="$52.00" src="./img/item7.jpg"/>
        <CardItem name="Mango People T-shirt" price="$52.00" src="./img/item8.jpg"/>

        </div>

<CardsSlideProductPage/>

        </>
     );
}

export default CardsProductPage;