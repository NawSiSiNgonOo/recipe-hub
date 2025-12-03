import { Meal } from "@/types/meals";
import { createContext, ReactNode, useContext, useState } from "react";

type FavoriteContextType = {
  favorites: Meal[];
  addFavorites: (meal: Meal) => void;
  removeFavorites: (id: string) => void;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined
);

export function FavoriteProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Meal[]>([]);

  const addFavorites = (meal: Meal) => {
    setFavorites((prev) => [...prev, meal]);
  };

  const removeFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((m) => m.idMeal !== id));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorites, removeFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorites=()=>{
    const context=useContext(FavoriteContext);
    if(!context){
        throw new Error("useFavorites must be used within FavoritesProvider");
    }
    return context;
}