"use client";
import Item from "./item.js";
import { useState } from "react";

export default function ItemList({
  items,
  onItemSelect,
  onDeleteItem,
  onEditItem,
}) {
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
    items.sort((a, b) =>
      a.category.toLowerCase() > b.category.toLowerCase() ? 1 : -1
    );
  }

  return (
    <section>
      <h1 className="text-2xl inline-block font-medium">Sort By: </h1>
      <button
        className={`h-[50px] w-[100px] border-2 rounded-md my-10 mx-5 border-gray-300 inline-block text-white ${
          sortBy === "name" ? "bg-orange-400" : "bg-blue-400"
        }`}
        onClick={nameButton}
      >
        Name
      </button>
      <button
        className={`h-[50px] w-[100px] border-2 rounded-md my-10 mx-5 border-gray-300 text-white ${
          sortBy === "category" ? "bg-orange-400" : "bg-blue-400"
        }`}
        onClick={CategoryButton}
      >
        Category
      </button>
      <button
        className={`h-[50px] w-[120px] border-2 rounded-md my-10 mx-5 border-gray-300 text-white text-sm ${
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
              <li className="flex gap-4" key={item.id}>
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  onSelect={() => onItemSelect(item.name)}
                />
                <button
                  onClick={() => onDeleteItem(item.id)}
                  className="w-[75px] h-[40px] text-sm mt-6 bg-red-400 text-center rounded-lg text-black hover:bg-blue-400 flex gap-1 items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                  delete
                </button>
                <button
                  onClick={() => onEditItem(item.id)}
                  className="w-[75px] h-[40px] text-sm mt-6 bg-blue-400 text-center rounded-lg text-black hover:bg-red-400 flex gap-1 items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                  </svg>
                  edit
                </button>
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
                          onSelect={onItemSelect}
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
