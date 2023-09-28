"use client";
import { useState } from "react";

export default function Week3() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("produce");

  function click() {
    alert(`Added item: ${item}, quantity: ${quantity}, category: ${category}`);
  }
  return (
    <main className="min-h-screen">
      <form className="w-1/4 mx-auto my-4 bg-black border p-2 flex flex-col justify-content-center gap-3">
        <input
          type="text"
          value={item}
          placeholder="item"
          className="p-2 rounded"
          onChange={(e) => setItem(e.target.value)}
        />
        <div className="flex justify-between">
          <input
            type="number"
            min="1"
            max="100"
            value={quantity}
            className="w-2/12 h-10 rounded ml-1 text-center"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <select
            value={category}
            className="w-1/3 h-10 rounded"
            onChange={(e) => setCategory(e.target.value)}
          >
            <optgroup label="Category" className="font-light">
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen food">Frozen food</option>
              <option value="canned goods">Canned goods</option>
              <option value="dry goods">Dry goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option vale="others">Others</option>
            </optgroup>
          </select>
        </div>
        <input
          type="submit"
          value="+"
          className="p-2 rounded bg-blue-500 text-white font-medium hover:bg-blue-600 cursor-pointer mt-3"
          onClick={click}
        />
      </form>
    </main>
  );
}
