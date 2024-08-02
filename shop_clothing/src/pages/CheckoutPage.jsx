import "../pages_style/checkoutPage_style.css";
import Footer from "../components/footer";
import Header from "../components/header";

import NavBar from "../components/nav_bar";
import PreFooter from "../components/pre_footer";
import Subscribe from "../components/subscribe";
import PostNavBar from "../components/post_nav_bar";
import AccordionCheckoutPage from "../components/checkoutPage/accordion_checkoutPage";

function CheckoutPage() {
  return (
    <div className="checkoutPage">
      <Header />
      <NavBar />
      <PostNavBar />
      <AccordionCheckoutPage />
      <Subscribe />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default CheckoutPage;
