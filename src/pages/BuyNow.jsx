import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearBuyNow } from "../redux/slices/cartSlice";

const BuyNow = () => {
  const dispatch = useDispatch();
  const buyNowItem = useSelector((state) => state.cart.buyNowItem);

  const [orderType, setOrderType] = useState(""); // "parcel" or "dining"
  const [hall, setHall] = useState("");
  const [table, setTable] = useState("");
  const [members, setMembers] = useState("");

  const handleOrder = () => {
    if (orderType === "dining" && (!hall || !table || !members)) {
      alert("Please select hall, table, and number of members.");
      return;
    }

    let orderInfo = `Order placed for: ${buyNowItem.name}\nType: ${orderType}`;
    if (orderType === "dining") {
      orderInfo += `\nHall: ${hall}\nTable: ${table}\nMembers: ${members}`;
    }

    alert(orderInfo);
    dispatch(clearBuyNow());
  };

  if (!buyNowItem) {
    return <div className="p-6 text-center text-gray-600">No item selected for Buy Now.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 border rounded-lg p-6 shadow bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Buy Now</h2>

      <div className="flex items-center gap-6 mb-6">
        <img src={buyNowItem.image} alt={buyNowItem.name} className="w-32 h-32 object-cover rounded" />
        <div>
          <h3 className="text-xl font-bold">{buyNowItem.name}</h3>
          <p className="text-gray-600">Price: ₹{buyNowItem.price}</p>
          <p className="text-sm text-green-600 mt-1">Quantity: {buyNowItem.quantity}</p>
        </div>
      </div>

      {/* Order Type Selection */}
      <div className="mb-4">
        <label className="font-semibold mb-2 block">Order Type:</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="orderType"
              value="parcel"
              onChange={() => setOrderType("parcel")}
              checked={orderType === "parcel"}
            />
            Parcel
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="orderType"
              value="dining"
              onChange={() => setOrderType("dining")}
              checked={orderType === "dining"}
            />
            Dining
          </label>
        </div>
      </div>

      {/* Dining Fields */}
      {orderType === "dining" && (
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Select Hall</label>
            <select
              value={hall}
              onChange={(e) => setHall(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">-- Choose Hall --</option>
              <option value="AC Hall">A/C Hall</option>
              <option value="Non-AC Hall">Non-A/C Hall</option>
              <option value="Rooftop">Rooftop</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Table Number</label>
            <select
              value={table}
              onChange={(e) => setTable(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">-- Choose Table --</option>
              <option value="T1">T1</option>
              <option value="T2">T2</option>
              <option value="T3">T3</option>
              <option value="T4">T4</option>
              <option value="T5">T5</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Number of Members</label>
            <input
              type="number"
              value={members}
              onChange={(e) => setMembers(e.target.value)}
              placeholder="e.g., 4"
              className="w-full border px-3 py-2 rounded"
              min={1}
            />
          </div>
        </div>
      )}

      <button
        onClick={handleOrder}
        disabled={!orderType}
        className={`mt-6 w-full py-2 rounded transition ${
          orderType
            ? "bg-yellow-500 hover:bg-yellow-600 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Confirm Order
      </button>
    </div>
  );
};

export default BuyNow;
