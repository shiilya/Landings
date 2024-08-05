import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import HeaderContent from './components/header_content';
import Portfolio from './components/portfolio';
import Services from './components/services';


function App() {
  return (
    <>
    <div className="container container__bg">
     <Header/>
     <HeaderContent/>
    </div>
    <Services/>
<div className="container container__bg">
  <Portfolio/>
</div>
<Footer/>
    </>
  );
}

export default App;
