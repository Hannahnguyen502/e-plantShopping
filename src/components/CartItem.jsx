import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css'; // Optional: For styling your cart layout

function CartItem({ setView }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Parse price string (e.g., "$15" -> 15) to perform calculations
  const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace('$', '')) || 0;
  };

  // Calculate grand total amount for all items in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + (parsePrice(item.cost) * item.quantity);
    }, 0).toFixed(2);
  };

  // Handle incrementing item quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Handle decrementing item quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // If quantity would drop below 1, remove the item from the cart entirely
      dispatch(removeItem(item.name));
    }
  };

  // Handle removing item entirely
  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  // Calculate subtotal cost for a specific item type
  const calculateTotalCost = (item) => {
    return (parsePrice(item.cost) * item.quantity).toFixed(2);
  };

  // Simulation handler for the checkout button
  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference.');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is empty. Let's find some green companions!</p>
          <button className="continue-shopping-btn" onClick={() => setView('products')}>
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="cart-content">
          <h3 className="cart-grand-total">Total Amount: ${calculateTotalAmount()}</h3>
          
          <div className="cart-items-list">
            {cartItems.map((item, index) => (
              <div className="cart-item-card" key={index}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-unit-price">Price: {item.cost}</p>
                  
                  <div className="cart-item-quantity-controls">
                    <button className="quantity-btn control-minus" onClick={() => handleDecrement(item)}>-</button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button className="quantity-btn control-plus" onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  
                  <p className="cart-item-subtotal">Subtotal: ${calculateTotalCost(item)}</p>
                  
                  <button className="remove-item-btn" onClick={() => handleRemove(item.name)}>
                    Remove Item
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-action-buttons">
            <button className="continue-shopping-btn" onClick={() => setView('products')}>
              Continue Shopping
            </button>
            <button className="checkout-btn" onClick={handleCheckoutShopping}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
