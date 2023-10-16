import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { fetchAllProducts, deleteProduct } from '../slices/product';

function Products() {
  const featuredProducts = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wrapperStyle = {
    backgroundColor: '#f2f2f2',
    minHeight: '100vh',
    position: 'relative',
  };
  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    zIndex: '1',
  };

  const cardImageStyle = {
    objectFit: 'cover',
    objectPosition: 'center center',
    maxHeight: '100%',
    maxWidth: '100%',
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="wrapper" style={wrapperStyle}>
      <div className="content" style={contentStyle}>
        <Header />
        <div className="container-fluid mx-1 col-12">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center mb-3">Products</h1>
              <Link to="/addproduct" className="btn btn-success">
                Add Product
              </Link>
            </div>
          </div>

          <div className="row">
            {featuredProducts.map((product) => (
              <div className="col-md-3 mb-3" key={product.id}>
                <div className="card h-100" style={{ cursor: "pointer" }}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="card-img-top"
                    style={cardImageStyle}
                  />
                  <div className="card-body d-flex flex-column">
                    <div className='d-flex flex-row'>
                      <div className='col-8'>
                        <h5 className="card-title">{product.name}</h5>
                        <h5 className="card-title">Stocks Available: {product.stocks}</h5>
                      </div>
                      <div className='col-4'>
                        <h4 className="card-title ms-auto"><strong>₹{product.price}</strong> </h4>
                      </div>
                    </div>
                    <div>
                      <Link to={`/editproduct/${product.id}`} className="btn btn-primary mt-2">
                        Edit
                      </Link>
                      <Button
                        variant="danger"
                        className="mt-2"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Products;
