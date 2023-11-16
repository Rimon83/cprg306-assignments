"use client";
import { useState, useEffect } from "react";

const NewItem = ({ onAddItem, editItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const {
    name: existingName,
    quantity: existingQuantity,
    category: existingCategory,
    id,
  } = editItem;
  useEffect(() => {
    setName(existingName || "");
    setQuantity(existingQuantity || 1);
    setCategory(existingCategory || "Produce");
  }, [existingName, existingQuantity, existingCategory]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!id) {
      const item = {
        name,
        quantity,
        category,
      };
      onAddItem(item);
    } else {
      const item = {
        id,
        name,
        quantity,
        category,
      };
      onAddItem(item);
    }

    setName("");
    setQuantity(1);
    setCategory("produce");
  }
  return (
    <main>
      <h1 className="text-2xl font-bold">Add new item</h1>
      <form
        onSubmit={handleSubmit}
        className="sm:w-[80%] my-4 w-full bg-black border p-2 flex flex-col gap-3 rounded-md"
      >
        <input
          type="text"
          value={name}
          placeholder="item name"
          className="p-2 rounded-md"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="flex justify-between gap-2">
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            className="sm:w-[75px] w-full h-10 rounded p-2 ml-1"
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          <select
            value={category}
            className="sm:w-[150px] w-full h-10 rounded-md"
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
        />
      </form>
    </main>
  );
};

export default NewItem;
