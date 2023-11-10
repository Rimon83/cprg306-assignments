"use client";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context.js";



import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Week7() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
   const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();

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
   const handleSignOut = async () => {
     try {
      const auth=  await firebaseSignOut();
     
     } catch (error) {
       console.log(error);
     }
   };
   const handleGithubSignIn = async () => {
     try {
       await gitHubSignIn();
     } catch (error) {
       console.log(error);
     }
   };
   const handleGoogleSignIn = async () => {
     try {
       await googleSignIn();
     } catch (error) {
       console.log(error);
     }
   };
 

  
  return (
    <>
      {user ? (
        <article className="min-h-screen bg-slate-400 p-15 flex flex-col text-black">
          <div className="flex gap-4 justify-end p-10 border-b-2 border-gray-500 w-[90%] self-center">
            <p>{user.displayName}</p>
            <button onClick={handleSignOut}>Signout</button>
          </div>
          <div className="flex w-full mt-20 p-20">
            <div className=" w-1/2 ">
              <NewItem onAddItem={handleAddItem} />
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/2 ">
              <MealIdeas name={selectedItemName} />
            </div>
          </div>
        </article>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center w-1/2 mx-auto p-20 border-2 dark:border-white border-gray-500 rounded-lg mt-12">
          <h1 className="text-4xl">Welcome to shopping list</h1>
          <button
            className="p-2 bg-blue-600 w-1/2 rounded-lg hover:bg-blue-500"
            onClick={handleGithubSignIn}
          >
            Sign in with Github
          </button>
          <button
            className="p-2 bg-blue-600 w-1/2 rounded-lg hover:bg-blue-500"
            onClick={handleGoogleSignIn}
          >
            Sign in with Gmail
          </button>
        </div>
      )}
    </>
  );
}
