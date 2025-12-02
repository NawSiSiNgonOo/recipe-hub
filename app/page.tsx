"use client";

import SearchForm from "@/components/SearchForm";
import { useState } from "react";
import { useSearchMeals } from "@/hooks/useSearchMeals";

export default function Home() {
  const [recipe,setRecipe]=useState("");
  const {data,isLoading}=useSearchMeals(recipe);
  const meals = data?.meals || [];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Recipe Hub</h1>
      <SearchForm onSubmit={(data)=>setRecipe(data.recipe)}/>
      {isLoading && <p>Loading ...</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {
          meals.map((meal:any)=>{
            
          })
        }
      </div>
    </div>
  );
}
