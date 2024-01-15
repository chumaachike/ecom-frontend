import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductContext from '../context/product';
import UserContext from '../context/user';

function NavBar() {
  const { searchProducts } = useContext(ProductContext);
  const { deleteUser } = useContext(UserContext);
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    searchProducts(value);
  };
  const handleLogout = async () => {
    deleteUser();
  };
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <Link to="/login">Log in/Signup</Link>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default NavBar;
