import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/checkout' exact element={<Checkout />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
