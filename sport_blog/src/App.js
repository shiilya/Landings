
import './App.css';
import Contacts from './components/contacts';
import Footer from './components/footer';
import Header from './components/header';
import HowItWorks from './components/howItWorks';
import Intro from './components/intro';
import OurBlog from './components/ourBlog';
import Services from './components/services';
import Subscribe from './components/subscribe';
import Team from './components/team';

function App() {
  return (
    <div className="App">
     <Header/>
     <Intro/>
     <Services/>
     <HowItWorks/>
     <Team/>
     <OurBlog/>
     <Contacts/>
     <Subscribe/>
     <Footer/>
    </div>
  );
}

export default App;
