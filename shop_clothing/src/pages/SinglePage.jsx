import "../pages_style/singlePage_style.css";
import Footer from "../components/footer";

import Header from "../components/header";

import NavBar from "../components/nav_bar";
import PreFooter from "../components/pre_footer";
import Subscribe from "../components/subscribe";
import PostNavBar from "../components/post_nav_bar";
import ProductSinglePage from "../components/singlePage/product_singlePage";
import AlsoSinglePage from "../components/singlePage/also_singlePage";

function SinglePage() {
  return (
    <div className="singlePage">
      <Header />
      <NavBar />
      <PostNavBar />
      <ProductSinglePage />
      <AlsoSinglePage />
      <Subscribe />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default SinglePage;
