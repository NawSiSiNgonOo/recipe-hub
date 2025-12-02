"use client";

import { useMealDetails } from "@/hooks/useMealDetails";
import { useParams } from "next/navigation";

export default function MealDetail() {
  const { id } = useParams();
  const { data, isLoading } = useMealDetails(id as string);
  const meal = data?.meals?.[0];
  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {meal && (
        <div className="container mx-auto p-6">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded w-full max-w-md mb-4"
          />
          <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <p className="whitespace-pre-line mb-6">{meal.strInstructions}</p>
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc ml-6">
            {Object.entries(meal)
              .filter(([key, val]) => key.startsWith("strIngredient") && val)
              .map(([key, val]) => (
                <li key={key}>{val}</li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}
