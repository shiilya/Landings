
import '../App.css';
import Footer from '../components/footer';
import { Link } from "react-router-dom"
import Header from '../components/header';
import BannerMainPage from '../components/mainPage/banner_mainPage';
import CardsMainPage from '../components/mainPage/cards_mainPage';
import Fashion from '../components/mainPage/fashion_mainPage';
import Offer from '../components/mainPage/offer_mainPage';
import NavBar from '../components/nav_bar';
import PreFooter from '../components/pre_footer';
import Subscribe from '../components/subscribe';

function MainPage() {
  return (
    <div className="mainPage">
      <Header/>
      <NavBar/>
      <Fashion/>
      <Offer/>
      <CardsMainPage/>
      <BannerMainPage/>
      <Subscribe/>
      <PreFooter/>
      <Footer/>
    </div>
  );
}

export default MainPage;