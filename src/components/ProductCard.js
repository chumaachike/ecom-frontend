import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductCard({
  id, imageURL, name, price, quantity,
}) {
  return (
    <Link to={`/product/${id}`}>
      <div className="product-card">
        <img src={imageURL} alt={name} />
        <h2>{name}</h2>
        <div className="price">
          Price: $
          {price}
        </div>
        <div className="quantity">
          Quantity:
          {quantity}
        </div>
      </div>
    </Link>
  );
}
export default ProductCard;

ProductCard.propTypes = {
  imageURL: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

ProductCard.defaultProps = {
  imageURL: '',
  id: '',
  name: '',
  price: null,
  quantity: null,
};
