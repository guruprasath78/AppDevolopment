import React, { useState } from 'react';
import ProductCard from './ProductCard';
import productImage1 from '../Assets/lee.jpg'; // Import the image file
import productImage2 from '../Assets/raybon.jpg'; // Import the image file
import productImage3 from '../Assets/nike.jpg'; // Import the image file
import '../Assets/Products.css'; // Import the CSS file


function Products() {
 
  const initialProducts = [
    {
      id: 1,
      name: 'LeeCooper T-Shirt',
      description: 'High quality premium material',
      price: 19.99,
      image: productImage1, // Use the imported image variable
    },
    {
      id: 2,
      name: 'Raybon Sunglass',
      description: 'Protection from UV rays',
      price: 29.99,
      image: productImage2, // Use the imported image variable
    },
    {
      id: 3,
      name: 'Nike Turbo',
      description: 'Let your feet fly',
      price: 24.99,
      image: productImage3, // Use the imported image variable
    },
  ];
  

  const [products, setProducts] = useState(initialProducts);

  return (
    <div className="products-container">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
