
import "../pages_style/productPage_style.css"
import Footer from '../components/footer';

import Header from '../components/header';



import NavBar from '../components/nav_bar';
import PreFooter from '../components/pre_footer';
import Subscribe from '../components/subscribe';
import AccordionProductPage from "../components/productPage/accordion_productPage";
import ChoiseProductPage from "../components/productPage/choice_productPage";
import PostNavBar from "../components/post_nav_bar";
import BannerText from "../components/banner_text";

function ProductPage() {
    return ( 
        <div className="productPage">
      <Header/>
      <NavBar/>
      <PostNavBar/>
      <div className="productPage_flex container">
      <AccordionProductPage/>
      <ChoiseProductPage/>
      </div>
<div className="productPage_banner">
<BannerText title="Free Delivery" subtitle="Worldwide delivery on all. Authorit tively
							morph
							next-generation innov
							tion
							with extensive models." img="img/delivery.png"/>
<BannerText title="Sales & discounts" subtitle="Worldwide delivery on all. Authorit tively
							morph
							next-generation innov
							tion
							with extensive models." img="img/sales.png"/>
<BannerText title="Quality assurance" subtitle="Worldwide delivery on all. Authorit tively
							morph
							next-generation innov
							tion
							with extensive models." img="img/quality.png"/>
</div>
      <Subscribe/>
      <PreFooter/>
      <Footer/>
    </div>
     );
}

export default ProductPage;