
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./components/views/Home/Home";
import NavBar from './components/layout/NavBar/NavBar';
import NotFound from './components/views/NotFound/NotFound';
import TourPage from './components/views/TourPage/TourPage';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchTours } from './redux/toursRedux';
import CartPage from './components/views/CartPage/CartPage';
import CheckoutPage from './components/views/Checkout/CheckoutPage';
import Footer from './components/layout/Footer/Footer';
import ThankYou from './components/views/ThankYou/ThankYou';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import About from './components/views/About/About';
import ProdcutPage from './components/views/ProductPage/ProductPage';
import { fetchCategories } from './redux/categoryRedux';


const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => fetchTours(dispatch), [dispatch]);
  useEffect(() => fetchCategories(dispatch), [dispatch]);

  return (
    <main>  
      <NavBar />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="page-transition"
          >
        <Routes>
          <Route path="*" element={< NotFound />} />
          <Route path="/" element={< Home />} />
          <Route path="/cart" element={< CartPage/>} />
          <Route path="/tour/:url" element={< TourPage />} />
          <Route path="/checkout" element={ < CheckoutPage /> } /> 
          <Route path="/thank-you" element={ <ThankYou /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/products" element={ <ProdcutPage />} />
        </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </main>
  );
}

export default App;
