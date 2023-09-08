
import { Routes, Route } from 'react-router-dom';
import Home from "./components/views/Home/Home";
import NavBar from './components/layout/NavBar/NavBar';
import NotFound from './components/views/NotFound/NotFound';
import TourPage from './components/views/TourPage/TourPage';


const App = () => {
  return (
    <main>  
      <NavBar />
        <Routes>
          <Route path="*" element={< NotFound />} />
          <Route path="/" element={< Home />} />
          <Route path="/favorite" element={< TourPage />} />
        </Routes>
    </main>
  );
}

export default App;
