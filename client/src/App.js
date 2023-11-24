
import { Routes, Route } from 'react-router-dom';
import Home from "./components/views/Home/Home";
import NavBar from './components/layout/NavBar/NavBar';
import NotFound from './components/views/NotFound/NotFound';
import TourPage from './components/views/TourPage/TourPage';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchTours } from './redux/toursRedux';
import CartPage from './components/views/CartPage/CartPage';
import CheckoutPage from './components/views/Checkout/CheckoutPage';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => fetchTours(dispatch), [dispatch]);

  return (
    <main>  
      <NavBar />
        <Routes>
          <Route path="*" element={< NotFound />} />
          <Route path="/" element={< Home />} />
          <Route path="/cart" element={< CartPage/>} />
          <Route path="/tour/:url" element={< TourPage />} />
          <Route path="/checkout" element={ < CheckoutPage /> } /> 
        </Routes>
    </main>
  );
}

export default App;
