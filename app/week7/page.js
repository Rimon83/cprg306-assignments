"use client";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import MealIdeas from "../week7/meal-ideas.js";

import { useState } from "react";

export default function Week7() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  const handleItemSelect = (name) => {
    const cleanedName = name
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .split(",")[0];

    setSelectedItemName(cleanedName);
  };
  return (
    <article className="min-h-screen bg-slate-400 p-24 flex text-black">
      <div className=" w-1/2 ">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2">
        <MealIdeas name={selectedItemName} />
      </div>
    </article>
  );
}
