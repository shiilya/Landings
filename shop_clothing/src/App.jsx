import './App.css';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SinglePage from './pages/SinglePage';
import CheckoutPage from './pages/CheckoutPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="single-page" element={<SinglePage/>} />
          <Route path="checkout-page" element={<CheckoutPage/>} />
          <Route path="product-page" element={<ProductPage/>} />
          <Route path="cart-page" element={<CartPage/>} />
        </Routes>
        <Outlet />
    </BrowserRouter>
  );
}

export default App;
