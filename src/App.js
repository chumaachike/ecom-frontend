import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ProductDetails from './pages/ProductDetails';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
