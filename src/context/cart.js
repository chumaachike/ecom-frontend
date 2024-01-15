import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const addToCart = (id, quantity) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.productId === id);

    if (index > -1) {
      updatedCart[index].quantity += parseInt(quantity, 10);
    } else {
      updatedCart.push({ productId: id, quantity: parseInt(quantity, 10) });
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartProvider };
export default CartContext;
