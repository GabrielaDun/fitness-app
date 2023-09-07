
import { Routes, Route } from 'react-router-dom';
import Home from "./components/views/Home/Home";
import NavBar from './components/layout/NavBar/NavBar';
import Container from './components/common/Container/Container';
import NotFound from './components/views/NotFound/NotFound';


const App = () => {
  return (
    <main>  
      <NavBar />
      <Container>
        <Routes>
          <Route path="*" element={< NotFound />} />
          <Route path="/" element={< Home />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
