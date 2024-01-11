function ProductCard({
  name, image_url, price, quantity,
}) {
  return (
    <div className="product-card">
      <img src={image_url} alt={name} />
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
  );
}
export default ProductCard;
