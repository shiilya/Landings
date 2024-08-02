import "../components_style/header_style.css"
import Shop_cart from "./shop_cart";
import { Link } from "react-router-dom"

function Header() {
    return ( 
        <header class="header">
		<div class="container">
			<div class="header__wrapper">
				<div class="header__left">
					<div class="logo">
						<Link class="logo__link" to="/">
							<img class="logo__image" src="img/logo.png" alt="logo"/>
							<p>BRAN<span>D</span></p>
						</Link>
					</div>

					<details class="browse">
						<summary class="browse__title">Browse <i class="fa fa-caret-down" aria-hidden="true"></i>
						</summary>
						<div class="browse__menu">
							<p class="browse__menu-title">Women</p>
							<a class="browse__item" href="#">Dresse</a>
							<a class="browse__item" href="#">Tops</a>
							<a class="browse__item" href="#">Sweaters/Knits</a>
							<a class="browse__item" href="#">Jackets/Coats</a>
							<a class="browse__item" href="#">Blazers</a>
							<a class="browse__item" href="#">Denim</a>
							<a class="browse__item" href="#">Leggings/Pants</a>
							<a class="browse__item" href="#">Skirts/Shorts</a>
							<a class="browse__item" href="#">Accessories</a>
							<p class="browse__menu-title">Men</p>
							<a class="browse__item" href="#">Tees/Tank tops</a>
							<a class="browse__item" href="#">Shirts/Polos</a>
							<a class="browse__item" href="#">Sweaters</a>
							<a class="browse__item" href="#">Sweatshirts/Hoodies</a>
							<a class="browse__item" href="#">Blazers</a>
							<a class="browse__item" href="#">Jackets/Vests</a>
						</div>
					</details>

					<form action="#" class="search">
						<input class="search__input" type="text" placeholder="Search for Item..."/>
						<button class="search__btn" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
					</form>
				</div>

				<div class="header__right">
					<details class="basket">
						<Shop_cart/>
					</details>

					<details class="account">
						<summary class="account__title">My Account <i class="fa fa-caret-down" aria-hidden="true"></i>
						</summary>
					</details>
				</div>



			</div>
		</div>
	</header>
     );
}

export default Header;