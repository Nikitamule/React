import React, { useState } from 'react';

// Sample data for demonstration
const productsData = [
  { id: 1, name: 'Product A', category: 'Category 1', price: 10, stock: 100 },
  { id: 2, name: 'Product B', category: 'Category 2', price: 20, stock: 50 },
  { id: 3, name: 'Product C', category: 'Category 1', price: 15, stock: 75 },
];

const ordersData = [
  { orderId: 1, customerName: 'Customer 1', orderDate: '2024-03-14', status: 'Pending' },
  { orderId: 2, customerName: 'Customer 2', orderDate: '2024-03-13', status: 'Shipped' },
  { orderId: 3, customerName: 'Customer 3', orderDate: '2024-03-12', status: 'Delivered' },
];

const Dashboard = ({ products, orders }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total number of products: {products.length}</p>
      <p>Total number of orders: {orders.length}</p>
    </div>
  );
};

const ProductManagement = ({ products, setProducts }) => {
  // State for form inputs
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleAddProduct = () => {
    // Check if price and stock are valid numbers
    if (isNaN(parseFloat(price)) || isNaN(parseInt(stock))) {
      // Handle invalid input
      alert('Please enter valid numbers for price and stock.');
      return;
    }

    // Generate a unique ID for the new product
    const newProductId = products.length + 1;
    const newProduct = {
      id: newProductId,
      name: productName,
      category: category,
      price: parseFloat(price),
      stock: parseInt(stock),
    };

    // Add the new product to the list
    setProducts([...products, newProduct]);

    // Clear the form inputs
    setProductName('');
    setCategory('');
    setPrice('');
    setStock('');
  };

  return (
    <div>
      <h2>Product Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Add New Product</h3>
      <div>
        <input type="text" value={productName} onChange={e => setProductName(e.target.value)} placeholder="Product Name" />
        <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" />
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
        <input type="number" value={stock} onChange={e => setStock(e.target.value)} placeholder="Stock" />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

const OrderManagement = ({ orders }) => {
  return (
    <div>
      <h2>Order Management</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [orders] = useState(ordersData);

  return (
    <div>
      <Dashboard products={products} orders={orders} />
      <ProductManagement products={products} setProducts={setProducts} />
      <OrderManagement orders={orders} />
    </div>
  );
};

export default App;