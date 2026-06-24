import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css'; // Optional: For specific product grid layout styles

function ProductList({ setView }) {
  const dispatch = useDispatch();
  
  // Get list of item names already in the cart to handle disabling the "Add to Cart" button
  const cartItems = useSelector(state => state.cart.items);
  const cartItemNames = cartItems.map(item => item.name);

  // Hardcoded plants array categorized as required by the project specifications
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://images.unsplash.com/photo-1593487568522-746db8894941?q=80&w=600&auto=format&fit=crop",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://images.unsplash.com/photo-1572688062740-23590e7f3c6b?q=80&w=600&auto=format&fit=crop",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        }
      ]
    },
    {
      category: "Aromatic Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=600&auto=format&fit=crop",
          description: "Calming scent that helps reduce stress and anxiety.",
          cost: "$20"
        },
        {
          name: "Mint",
          image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=600&auto=format&fit=crop",
          description: "Refreshing aroma, great for culinary use.",
          cost: "$10"
        }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "Cast Iron Plant",
          image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=600&auto=format&fit=crop",
          description: "Thrives in low light and survives irregular watering.",
          cost: "$25"
        },
        {
          name: "Succulent Trio",
          image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
          description: "Beautiful geometric varieties requiring minimal water.",
          cost: "$18"
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-listing-container">
      {plantsArray.map((categoryGroup, index) => (
        <div key={index} className="category-section">
          <h2 className="category-title">{categoryGroup.category}</h2>
          <div className="product-grid">
            {categoryGroup.plants.map((plant, pIndex) => {
              const isAdded = cartItemNames.includes(plant.name);
              return (
                <div key={pIndex} className="product-card">
                  <img src={plant.image} alt={plant.name} className="product-image" />
                  <div className="product-details">
                    <h3 className="product-name">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <p className="product-cost">{plant.cost}</p>
                    <button
                      className={`add-to-cart-btn ${isAdded ? 'disabled' : ''}`}
                      disabled={isAdded}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
