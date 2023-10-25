"use client"
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json"
import { useState } from "react";

export default function Week6() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  return (
    <article className="min-h-screen bg-slate-400 p-24 flex flex-col gap-6">
      <NewItem onAddItem={handleAddItem}/>
      <ItemList items={items}/>
    </article>
  );
}
