import React, { useState } from "react";

const Home = () => {
  const [pricePerKg, setPricePerKg] = useState("");
  const [halfKgPrice, setHalfKgPrice] = useState(0);
  const [quarterKgPrice, setQuarterKgPrice] = useState(0);

  const handlePriceChange = (e) => {
    const value = parseFloat(e.target.value);
    setPricePerKg(e.target.value);

    if (!isNaN(value)) {
      setHalfKgPrice((value / 2).toFixed(2));
      setQuarterKgPrice((value / 4).toFixed(2));
    } else {
      setHalfKgPrice(0);
      setQuarterKgPrice(0);
    }
  };

  return (
    <div className="pt-[70px] min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Price Calculator</h2>
        <div className="mb-4">
          <label className="block font-medium mb-1 text-gray-700">
            Price per 1kg (in your currency)
          </label>
          <input
            type="number"
            value={pricePerKg}
            onChange={handlePriceChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-green-400"
            placeholder="Enter price for 1kg"
          />
        </div>

        <div className="mt-6">
          <p className="text-gray-700 font-medium">
            💡 Half Kg Price (500g):{" "}
            <span className="font-bold">{halfKgPrice}</span>
          </p>
          <p className="text-gray-700 font-medium mt-2">
            💡 Quarter Kg Price (250g):{" "}
            <span className="font-bold">{quarterKgPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
