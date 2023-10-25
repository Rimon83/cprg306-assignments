"use client"
import { useState } from 'react';

const NewItem = () => {
 const [name, setName] = useState("");
 const [quantity, setQuantity] = useState(1);
 const [category, setCategory] = useState("produce");

 function handleSubmit(event) {
   event.preventDefault();

   const item = {
     name,
     quantity,
     category,
   };

   console.log(item);
   alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);

   setName("");
   setQuantity(1);
   setCategory("produce");
 }
  return (
    <main className="min-h-screen bg-gray-300">
      <form
        onSubmit={handleSubmit}
        className="sm:w-1/4 mx-auto my-4 bg-black border p-2 flex flex-col justify-content-center gap-3 rounded-md"
      >
        <input
          type="text"
          value={name}
          placeholder="item name"
          className="p-2 rounded-md"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="flex justify-between">
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            className="sm:w-[75px] h-10 rounded p-2 ml-1"
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          <select
            value={category}
            className="sm:w-[150px] h-10 rounded-md"
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
}

export default NewItem