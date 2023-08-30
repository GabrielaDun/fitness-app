import NavBar from "./components/NavBar/NavBar";
import Container from './components/Container/Container.js';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.js';


const App = () => {
  return (
    <main>  
      <NavBar />
      <Container>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
