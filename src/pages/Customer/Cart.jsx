// src/pages/Cart.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearBuyNow } from "../../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach((id) => dispatch(removeFromCart(id)));
    setSelectedItems([]);
  };

  const handleBuyNow = () => {
    const itemsToBuy = cartItems.filter((item) => selectedItems.includes(item.id));
    if (itemsToBuy.length === 0) return;
    dispatch(clearBuyNow());
    alert("Order placed successfully!");
    setSelectedItems([]);
  };

  const handleQuantityChange = (id, quantity) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    localStorage.setItem("cart", JSON.stringify(updated));
    window.location.reload();
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-8 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Cart</h2>

        {!cartItems || cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cartItems.map((dish) => (
                <div
                  key={dish.id}
                  className="border rounded-lg overflow-hidden shadow-md text-left bg-white relative"
                >
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(dish.id)}
                    onChange={() => toggleSelection(dish.id)}
                    className="absolute top-2 right-2 w-4 h-4"
                  />
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {dish.name}
                      </h3>
                      <span className="text-yellow-600 font-medium">
                        ${dish.price}
                      </span>
                    </div>

                    <div className="mb-4">
                      <label className="text-sm text-gray-700 mr-2">Quantity:</label>
                      <select
                        value={dish.quantity || 1}
                        onChange={(e) => handleQuantityChange(dish.id, e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>

                    <p className="text-sm text-gray-500">
                      Total: ${(dish.price * (dish.quantity || 1)).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <button
                onClick={handleRemoveSelected}
                className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 text-sm"
              >
                Remove Selected
              </button>
              <button
                onClick={handleBuyNow}
                className="bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600 text-sm"
              >
                Buy Selected
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
