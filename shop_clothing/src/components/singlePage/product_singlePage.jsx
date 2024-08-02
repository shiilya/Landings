import "../../components_style/singlePage/product_singlePage_style.css"
import { Link } from "react-router-dom"

function ProductSinglePage() {
    return ( 
       <>
       <section className="product">
		<div className="product__left">
			<i className="fa fa-chevron-left" aria-hidden="true"></i>
		</div>
		<div className="product__right">
			<i className="fa fa-chevron-right" aria-hidden="true"></i>
		</div>

		<div className="container product__wrapper_single">
			<div className="product__img">
				<img src="img/product.jpg" alt="#"/>
			</div>
		</div>
	</section>

	<section className="description">
		<div className="container description__wrapper">
			<div className="description__title">
				<h3>WOMEN COLLECTION</h3>
				<div className="description__line">
					<div className="description__grey"></div>
					<div className="description__red"></div>
					<div className="description__grey"></div>
				</div>
				<p>Moschino Cheap And Chic</p>
			</div>
			<div className="description__info">
				Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate
				collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather
				than exceptional portals.
			</div>
			<div className="description__material">
				<p>MATERIAL: <span>COTTON</span></p>
				<p>DESIGNER: <span>BINBURHAN</span></p>
			</div>
			<div className="description__price">
				$561
			</div>

			<form action="#" className="description__form">
				<div className="description__box">
					<div className="description__color">
						CHOOSE COLOR <br/>
						
						<select name="color" size="1">

							<option value="red">red</option>
							<option value="yellow">yellow</option>
							<option value="blue">blue</option>
							<option value="black">black</option>
						</select> 

					</div>

					<div className="description__size">
						CHOOSE SIZE <br/>
						<select name="size">
							<option value="xs">xs</option>
							<option value="s">s</option>
							<option value="m">m</option>
							<option value="l">l</option>
							<option value="xl">xl</option>
							<option value="xxl" selected>xxl</option>
						</select>
					</div>

					<div className="description__quantity">
						QUANTITY <br/>
						<input type="text"/>
					</div>
				</div>
				<div className="description__button">
					<Link to="/cart-page" className="description__button_link">
					<button type="submit" className="description__btn">
						Add to Cart</button>
						</Link>
				</div>
			</form>
		</div>
	</section>
       </> 
     );
}

export default ProductSinglePage;