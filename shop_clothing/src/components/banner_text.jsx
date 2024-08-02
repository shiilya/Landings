import "../components_style/banner_text_style.css"

function BannerText(props) {
    return ( 
        <div className="banner__info-card banner__info-card_flex">
						<a href="#" className="banner__info-link"></a>
						<div className="banner__info-img">
							<img src={props.img} alt="delivery"/>
						</div>
						<div className="banner__info-text">
							<h4 className="banner__info-title">{props.title}</h4>
							<p className="banner__info-subtitle">{props.subtitle}</p>
						</div>
					</div>
					
     );
}

export default BannerText;