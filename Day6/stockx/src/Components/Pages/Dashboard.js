import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Dashboard.css';

function Dashboard() {
  const overallTraffic = 15000; // Total website traffic
  const totalUsers = 5000; // Total registered users
  const activeUsers = 3000; // Active users currently online
  const eComActivity = 1200; // E-commerce activity (e.g., orders placed)
  const totalSales = 25000; // Total sales revenue

  // Sample category data (replace with your actual data)
  const categoryData = {
    fruits: [
      { name: 'Apple', sales: 100 },
      { name: 'Banana', sales: 150 },
    ],
    vegetables: [
      { name: 'Carrot', sales: 80 },
      { name: 'Broccoli', sales: 120 },
      // Add more vegetable data
    ],
    dairy: [
      { name: 'Milk', sales: 200 },
      { name: 'Cheese', sales: 90 },
      // Add more dairy data
    ],
  };

  // Calculate total sales for each category
  const totalSalesByCategory = {
    fruits: categoryData.fruits.reduce((total, item) => total + item.sales, 0),
    vegetables: categoryData.vegetables.reduce((total, item) => total + item.sales, 0),
    dairy: categoryData.dairy.reduce((total, item) => total + item.sales, 0),
  };

  // Calculate the percentage of sales for each category
  const percentagesByCategory = {
    fruits: ((totalSalesByCategory.fruits / totalSales) * 100).toFixed(2),
    vegetables: ((totalSalesByCategory.vegetables / totalSales) * 100).toFixed(2),
    dairy: ((totalSalesByCategory.dairy / totalSales) * 100).toFixed(2),
  };

  return (
    <div className="dashboard">
      <h1>StockX Dashboard</h1>
      <div className="dashboard-stats">
        <div className="dashboard-stat">
          <h2>Overall Traffic</h2>
          <p>{overallTraffic} visits</p>
        </div>
        <div className="dashboard-stat">
          <h2>Total Users</h2>
          <p>{totalUsers} users</p>
        </div>
        <div className="dashboard-stat">
          <h2>Active Users</h2>
          <p>{activeUsers} online</p>
        </div>
        <div className="dashboard-stat">
          <h2>Inventory Activity</h2>
          <p>{eComActivity} orders placed</p>
        </div>
        <div className="dashboard-stat">
          <h2>Total Sales</h2>
          <p>${totalSales} revenue</p>
        </div>
      </div>
      <div className="category-links">
        <Link >T-shirts({percentagesByCategory.fruits}%)</Link>
        <Link >Shoes ({percentagesByCategory.vegetables}%)</Link>
        <Link >Trousers ({percentagesByCategory.dairy}%)</Link>
      </div>
    </div>
  );
}

export default Dashboard;