import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('https://west-side-db-1.onrender.com/cart');
        setCartItems(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCartItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://west-side-db-1.onrender.com/cart/${id}`);
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id} style={styles.container}>
            <div style={styles.imageContainer}>
              <img
                src={item.image || 'default-image-url.jpg'}
                alt={item.name}
                style={styles.image}
              />
            </div>
            <div style={styles.detailsContainer}>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <p>Delivery by 5-7 days</p>
            </div>
            <div style={styles.subtotalContainer}>
              <p style={{ fontSize: "20px", fontWeight: "500" }}>Total:- {item.price}</p>
            </div>
            <div style={styles.deleteContainer}>
              <button onClick={() => handleDelete(item.id)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '200px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  },
  imageContainer: {
    flex: '1',
  },
  image: {
    width: '65%',
    objectFit: 'cover',
  },
  detailsContainer: {
    flex: '3',
    padding: '0 20px',
  },
  subtotalContainer: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
  },
  deleteContainer: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default Cart;
