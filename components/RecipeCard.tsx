import Link from "next/link"
import { Meal } from "@/types/meals"

export default function RecipeCard({meal}:{meal:Meal}){
    return (
        <div className="border rounded-md p-4 shadow">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded mb-3"/>
            <h2 className="font-semibold text-lg mb-2">{meal.strMeal}</h2>
            <div className="flex justify-between items-center">
                <Link href={`/recipes/${meal.idMeal}`} className="text-blue-600 underline">View Details</Link>
                <button className="border px-3 py-1 rounded">❤️</button>
            </div>
        </div>
    )
}