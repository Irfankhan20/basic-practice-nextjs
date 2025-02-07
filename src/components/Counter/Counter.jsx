"use client";
import React, { useState } from "react";

const Counter = () => {
  const [couter, setCounter] = useState(0);
  return (
    <div>
      <p>Count: {couter}</p>

      <div className="flex gap-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 p-3 text-white"
          onClick={() => setCounter(couter + 1)}
        >
          Increase
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 p-3 text-white"
          onClick={() => setCounter(couter - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
