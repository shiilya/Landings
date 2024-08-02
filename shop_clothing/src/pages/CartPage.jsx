
import "../pages_style/cartPage_style.css"
import Footer from '../components/footer';
import Header from '../components/header';
import NavBar from '../components/nav_bar';
import PreFooter from '../components/pre_footer';
import Subscribe from '../components/subscribe';
import PostNavBar from "../components/post_nav_bar";
import TableCartPage from "../components/cartPage/table_cartPage";

function CartPage() {
    return ( 
        <div className="cartPage">
      <Header/>
      <NavBar/>
     <PostNavBar/>
     <TableCartPage/>     
      <Subscribe/>
      <PreFooter/>
      <Footer/>
    </div>
     );
}

export default CartPage;