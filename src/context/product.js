import { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getProducts, getProductByName } from '../api/product';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    try {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  const searchProducts = async (value) => {
    try {
      const products = await getProductByName(value);
      setProducts([...products]);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <ProductContext.Provider value={{ products, fetchProducts, searchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductContext;
