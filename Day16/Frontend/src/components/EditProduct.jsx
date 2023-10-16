import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProduct, deleteProduct } from '../slices/product'; // Import your Redux actions
import Footer from './Footer';
import Header from './Navbar';
import productImage from '../assets/images/edit.png'; // Import your product image

function EditProduct() {
  const { productId } = useParams(); // Get the product ID from the URL
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(productId))
  );

  // Initialize state for product details with the fetched product data
  const [productName, setProductName] = useState(
    product ? product.name || '' : ''
  );
  const [productDescription, setProductDescription] = useState(
    product ? product.description || '' : ''
  );
  const [productImageUrl, setProductImageUrl] = useState(
    product ? product.imageUrl || '' : ''
  );
  const [productStocks, setProductStocks] = useState(
    product ? product.stocks || 0 : 0
  );
  const [productPrice, setProductPrice] = useState(
    product ? product.price || 0 : 0
  );

  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const productId = product.id;

    const updatedProduct = {
      name: productName,
      description: productDescription,
      imageUrl: productImageUrl,
      stocks: productStocks,
      price: productPrice,
    };

    dispatch(updateProduct({ id: productId, product: updatedProduct }));

    console.log('Updated Product:', updatedProduct);

    navigate('/products');
  };

  // Function to handle the delete operation without confirmation
  const handleDelete = () => {
    const productId = product.id;
    dispatch(deleteProduct(productId)); // Dispatch the delete action
    navigate('/products');
  };

  const contentStyle = {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    backgroundColor: '#f2f2f2',
    marginLeft: '20px',
  };

  const imageStyle = {
    maxWidth: '70%',
    height: 'auto',
  };

  return (
    <>
      <div>
        <Header />
        <div className="container my-5">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center mb-3">Edit Product</h1>
            </div>
          </div>

          <div className="row parent-container">
            <div className="col-md-6">
              <img
                src={productImage}
                style={imageStyle}
                alt="Product"
                className="product-image"
              />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit} className="product-form">
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label">
                    Product Description
                  </label>
                  <textarea
                    className="form-control"
                    id="productDescription"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="productImageUrl" className="form-label">
                    Image URL
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="productImageUrl"
                    value={productImageUrl}
                    onChange={(e) => setProductImageUrl(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productStocks" className="form-label">
                    Stocks Available
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="productStocks"
                    value={productStocks}
                    onChange={(e) => setProductStocks(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Price (in ₹)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="btn btn-danger"
                    style={{ marginLeft: '10px' }}
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
