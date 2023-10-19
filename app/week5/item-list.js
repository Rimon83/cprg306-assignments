"use client";
import Item from "./item.js";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const nameButton = () => {
    setSortBy("name");
  };

  const CategoryButton = () => {
    setSortBy("category");
  };

  const group = () => {
    setSortBy("categoryGroup");
  };

  const groupCategory = items.reduce((group, item) => {
    const category = item.category;
    if (!group[category]) {
      group[category] = [];
    }
    group[category].push(item);
    return group;
  }, {});

  if (sortBy === "name") {
    items.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
  } else if (sortBy === "category") {
    items.sort((a, b) => a.category.toLowerCase() > b.category.toLowerCase() ? 1 : -1     
    );
  }

  return (
    <section>
     <h1 className="text-2xl inline-block font-medium">Sort By: </h1>
      <button
        className={`h-[50px] w-[140px] border-2 rounded-md my-10 mx-5 border-gray-300 inline-block text-white ${
          sortBy === "name" ? "bg-orange-400" : "bg-blue-400"
        }`}
        onClick={nameButton}
      >
        Name
      </button>
      <button
        className={`h-[50px] w-[140px] border-2 rounded-md my-10 mx-5 border-gray-300 text-white ${
          sortBy === "category" ? "bg-orange-400" : "bg-blue-400"
        }`}
        onClick={CategoryButton}
      >
        Category
      </button>
      <button
        className={`h-[50px] w-[140px] border-2 rounded-md my-10 mx-5 border-gray-300 text-white ${
          sortBy === "categoryGroup" ? "bg-orange-400" : "bg-blue-400"
        }`}
        onClick={group}
      >
        Category Group
      </button>
      {sortBy !== "categoryGroup" ? (
        <ul className="flex flex-col gap-4">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="flex flex-col gap-4">
          {Object.keys(groupCategory)
            .sort()
            .map((category) => {
              let singleCategory = groupCategory[category];

              return (
                <div key={category}>
                  <h1 className="text-3xl my-4 capitalize">{category}</h1>
                  {singleCategory.map((item) => {
                    return (
                      <li className="mb-4" key={item.id}>
                        <Item
                          name={item.name}
                          quantity={item.quantity}
                          category={item.category}
                        />
                      </li>
                    );
                  })}
                </div>
              );
            })}
        </ul>
      )}
    </section>
  );
}
