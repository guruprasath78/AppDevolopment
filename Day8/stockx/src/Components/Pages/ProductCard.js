import React, { useState } from 'react';
import '../Assets/Card.css';

function ProductCard({ product }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={toggleDescription}>
        {isDescriptionVisible ? 'Hide Description' : 'View Description'}
      </button>

      {isDescriptionVisible && (
        <div className="product-description">
          <p>Description: {product.description}</p>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
