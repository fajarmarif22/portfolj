import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Components/Header';

const App = () => {
  return (
      <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </Router>
  );
};

export default App;
