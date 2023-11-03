"use client";

import { useEffect, useState } from "react";

const fetchMealIdeas = async (name) => {
  const cleanName = name.split(" ")[0];
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleanName}`
  );
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

const fetchIngredients = async (idMeal) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};
const MealIdeas = ({ name }) => {
  const [meals, setMeals] = useState([]);
  const [idMeal, setIdMeal] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const loadMealIdeas = async (name) => {
    const data = await fetchMealIdeas(name);
    setMeals(data.meals);
  };
  const loadIngredient = async (idMeal) => {
    const data = await fetchIngredients(idMeal);
    const meals = data.meals;

    // combine ingredient and measure values
    const ingredientValues = meals.reduce((result, obj) => {
      const ingredientMeasure = {};
      Object.keys(obj).forEach((key) => {
        if (key.startsWith("strIngredient") && obj[key] !== "") {
          const indexDigit = parseInt(key.replace("strIngredient", ""));
          ingredientMeasure[indexDigit] = obj[key];
        }

        if (key.startsWith("strMeasure") && obj[key] !== "") {
          const indexDigit = parseInt(key.replace("strMeasure", ""));
          const measure = obj[key];
          if (typeof ingredientMeasure[indexDigit] !== "undefined") {
            ingredientMeasure[indexDigit] += " (" + measure + ")";
          } else {
            ingredientMeasure[indexDigit] = measure;
          }
        }
      });

      const combinedValues = Object.values(ingredientMeasure);
      result.push(...combinedValues);

      return result;
    }, []);

    setIngredients(ingredientValues);
  };

  useEffect(() => {
    if (name !== "") {
      loadMealIdeas(name);
    }

    if (idMeal !== "") {
      loadIngredient(idMeal);
    }
  }, [name, idMeal]);

  return (
    <div>
      <h1 className="text-3xl font-medium mb-4">Meal ideas</h1>
      {!name && <p className="text-1xl">Select an item to see meal ideas</p>}
      <div className="flex flex-col gap-1">
        {meals ? (
          meals.map((meal) => {
            return (
              <div
                key={meal.idMeal}
                className=" sm:w-[60%] p-2 border-2 text-black border-blue-200 rounded hover:bg-slate-600 hover:text-white cursor-pointer"
                onClick={() => {
                  setIdMeal(meal.idMeal);
                }}
              >
                <h2 className="text-xl font-medium">{meal.strMeal}</h2>
                {meal.idMeal === idMeal && (
                  <p className="pl-4 text-md">Ingredients needed:</p>
                )}

                {ingredients &&
                  meal.idMeal === idMeal &&
                  ingredients.map((ingredient) => {
                    return (
                      <p className="text-sm pl-10 block" key="ingredient">
                        {ingredient}
                      </p>
                    );
                  })}
              </div>
            );
          })
        ) : (
          <p>No meal idea found for {name}</p>
        )}
      </div>
    </div>
  );
};

export default MealIdeas;
