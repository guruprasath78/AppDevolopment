import React, { useState } from 'react';
import axios from 'axios';
import Header from './Navbar';
import Footer from './Footer';
import backgroundImage from '../assets/images/bg.jpeg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useNavigate } from 'react-router-dom';

function TransferProductForm() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    totalProducts: 0,
    date: new Date(),
    pname: '',
  });

  // Set minDate and maxDate to null to remove date constraints
  const minDate = null;
  const maxDate = null;

  const handleSubmit = async (e) => {
    e.preventDefault();


    const newTransferData = {
      name: formData.name,
      totalProducts: formData.totalProducts,
      date: formData.date,
      pname: formData.pname,
    };

    try {
      const response = await axios.post('http://localhost:8082/api/dashboard/add', newTransferData);
      console.log('Data saved:', response.data);
      setFormData({
        name: '',
        totalProducts: 0,
        date: new Date(),
        pname: '',
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }
    navigate("/dashboard");
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  const wrapperStyle = {
    background: 'linear-gradient(to right, #4a90e2, #575757)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const formContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  const inputStyle = {
    marginBottom: '10px',
  };

  return (
    <div className="wrapper" style={wrapperStyle}>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-4">Sell Product</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit} style={formContainerStyle}>
              <label htmlFor="name" style={labelStyle}>
                Buyer Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
                required
              />
              <label htmlFor="totalProducts" style={labelStyle}>
                Quantity
              </label>
              <input
                type="number"
                className="form-control"
                id="totalProducts"
                value={formData.totalProducts}
                onChange={(e) => setFormData({ ...formData, totalProducts: parseInt(e.target.value) })}
                style={inputStyle}
                required
              />
              <label htmlFor="pname" style={labelStyle}>
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="pname"
                value={formData.pname}
                onChange={(e) => setFormData({ ...formData, pname: e.target.value })}
                style={inputStyle}
                required
              />
              <label htmlFor="date" style={labelStyle}>
                Date
              </label>
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                className="form-control"
                id="date"
                style={inputStyle}
                required
                minDate={minDate}
                maxDate={maxDate}
              />
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  SELL
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferProductForm;
