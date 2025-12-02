import { Meal } from "@/types/meals";
import { createContext, ReactNode, useState } from "react";

type FavoriteContextType = {
    favorites:Meal[];
    addFavorites:(meal:Meal)=>void;
    removeFavorites:(id:string)=>void;
}

const FavoriteContext= createContext(undefined);

export function FavoriteProvider({children}:{children:ReactNode}){

    const [favorites,setFavorites]=useState<Meal[]>([]);

    const addFavorites=()=>{

    }
    return (
        <FavoriteContext.Provider value={}>
            {children}
        </FavoriteContext.Provider>
    )
}