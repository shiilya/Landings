import "../components_style/header_content_style.css"

function HeaderContent() {
    return ( 
        <div className="header_row">
        <div className="header_content"  data-aos="flip-right">
            <h1 className="header_heading">John Doe<br/><span>Designer & Developer</span></h1>
            <p>I’m a portrait, fashion and lifestyle photographer living In New York City. During my thirteen
                year tenure here.</p>
        </div>
        <div className="header_img"  data-aos="flip-left">
            <picture>
                <source media="(max-width: 799px)" srcset="./img/hero_mobile.png"/>
                <img src="./img/hero.png" alt=""/>
            </picture>
        </div>
    </div>
     );
}

export default HeaderContent;