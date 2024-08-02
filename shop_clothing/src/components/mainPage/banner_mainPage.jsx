import "../../components_style/mainPage/banner_mainPage_style.css"
import BannerText from "../banner_text";

function BannerMainPage() {
    return ( 
        <section className="banner">
		<div className="container">
			<div className="banner__wrapper">
				<div className="banner__img">
					<a href="#" className="banner__link"></a>
					<p className="banner__title">30% <span>OFFER</span></p>
					<p className="banner__subtitle">FOR WOMEN</p>
				</div>
				<div className="banner__info">
					<BannerText title="Free Delivery" subtitle="Worldwide delivery on all. Authorit tively morph
								next-generation innov
								tion
								with extensive models." img="./img/delivery.png"  />
                    <BannerText title="Sales & discounts" subtitle="Worldwide delivery on all. Authorit tively morph
								next-generation innov
								tion
								with extensive models." img="./img/sales.png"/>
                    <BannerText title="Quality assurance" subtitle="Worldwide delivery on all. Authorit tively morph
								next-generation innov
								tion
								with extensive models." img="./img/quality.png"/>
				</div>
			</div>
		</div>
	</section>
     );
}

export default BannerMainPage;