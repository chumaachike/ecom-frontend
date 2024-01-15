import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { getProductById } from '../api/product';
import CartContext from '../context/cart';

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(id);
        setProduct(fetchedProduct);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleBuyNow = () => {
    if (quantity > product.quantity) {
      throw new Error('Cannot buy more items than available in stock.');
    }
  };

  const handleAddToCart = () => {
    if (quantity > product.quantity) {
      throw new Error('Cannot buy more items than available in stock.');
    }
    addToCart(product._id, quantity);
  };

  if (loading) {
    return <div>Loading products...</div>;
  }
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <img src={product.image_url} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div className="price">
        Price: $
        {product.price}
      </div>
      <div className="quantity">
        Items Left:
        {product.quantity}
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="quantity">
          Quantity:
          <input id="quantity" type="number" value={quantity} onChange={handleChangeQuantity} min="1" max={product.quantity} />
        </label>
        <button type="button" onClick={handleBuyNow} disabled={quantity > product.quantity}>Buy Now</button>
        <button type="button" onClick={handleAddToCart} disabled={quantity > product.quantity}>Add to Cart</button>
      </form>
    </div>
  );
}

export default ProductDetails;
