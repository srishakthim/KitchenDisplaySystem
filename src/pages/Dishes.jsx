// /pages/Dishes.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, buyNow } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import Dish1 from "../assets/Dish1.png";
import Dish2 from "../assets/Dish2.png";
import Dish3 from "../assets/Dish3.png";
import Dish4 from "../assets/Dish4.png";

const dishData = [
  {
    id: 1,
    name: "Chicken Manjoori",
    price: 15,
    image: Dish1,
    offer: "20% OFF",
    available: true,
    type: "Non-Veg",
  },
  {
    id: 2,
    name: "Paneer Tikka",
    price: 12,
    image: Dish2,
    offer: "10% OFF",
    available: true,
    type: "Veg",
  },
  {
    id: 3,
    name: "Chocolate Cake",
    price: 10,
    image: Dish3,
    offer: "Buy 1 Get 1",
    available: false,
    type: "Dessert",
  },
  {
    id: 4,
    name: "Fish Curry",
    price: 18,
    image: Dish4,
    offer: "15% OFF",
    available: true,
    type: "Non-Veg",
  },
];

const filters = ["All", "Veg", "Non-Veg", "Dessert"];

const Dishes = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredDishes =
    selectedFilter === "All"
      ? dishData
      : dishData.filter((dish) => dish.type === selectedFilter);

  const handleAddToCart = (dish) => {
    dispatch(addToCart(dish));
  };

 const handleBuyNow = (item) => {
  dispatch(buyNow(item));
  navigate("/order");
};
  return (
    <section className="bg-white py-16 px-4 sm:px-8 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">
          Menu
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Popular Dishes
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-10">
          Explore a variety of mouthwatering dishes, freshly prepared and
          perfect for your tastebuds.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 border rounded-full text-sm ${
                selectedFilter === filter
                  ? "bg-yellow-500 text-white"
                  : "text-yellow-500 border-yellow-500 hover:bg-yellow-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="border rounded-lg overflow-hidden shadow-md text-left bg-white relative"
            >
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                {dish.offer}
              </span>

              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-gray-800 font-semibold text-lg">
                    {dish.name}
                  </h3>
                  <span className="text-yellow-600 font-medium">
                    ${dish.price}
                  </span>
                </div>

                <p
                  className={`text-sm font-medium mb-3 ${
                    dish.available ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {dish.available ? "Available" : "Currently Unavailable"}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(dish)}
                    className="flex-1 border border-yellow-500 text-yellow-500 text-sm py-1 rounded hover:bg-yellow-500 hover:text-white transition"
                    disabled={!dish.available}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleBuyNow(dish)}
                    className="flex-1 bg-yellow-500 text-white text-sm py-1 rounded hover:bg-yellow-600 transition"
                    disabled={!dish.available}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 border border-yellow-500 text-yellow-500 px-6 py-2 text-sm hover:bg-yellow-500 hover:text-white transition">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default Dishes;
