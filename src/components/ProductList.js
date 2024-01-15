import { useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import ProductContext from '../context/product';

function ProductList() {
  const { products, fetchProducts } = useContext(ProductContext);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product._id}
          name={product.name}
          price={product.price}
          imageURL={product.image_url}
          id={product._id}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
}

export default ProductList;
