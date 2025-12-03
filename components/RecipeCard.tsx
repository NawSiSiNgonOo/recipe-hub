import Link from "next/link"
import { Meal } from "@/types/meals"
import { useFavorites } from "@/contexts/FavouriteContext"

export default function RecipeCard({meal}:{meal:Meal}){
    const {favorites,addFavorites,removeFavorites}=useFavorites();
    const isFav=favorites.some(f=>f.idMeal===meal.idMeal);
    
    return (
        <div className="border rounded-md p-4 shadow">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded mb-3"/>
            <h2 className="font-semibold text-lg mb-2">{meal.strMeal}</h2>
            <div className="flex justify-between items-center">
                <Link href={`/recipes/${meal.idMeal}`} className="text-blue-600 underline">View Details</Link>
                <button onClick={()=>isFav ? removeFavorites(meal.idMeal) : addFavorites(meal)} className="border px-3 py-1 rounded">{isFav ? "❤️" : "🤍" }</button>
            </div>
        </div>
    )
}