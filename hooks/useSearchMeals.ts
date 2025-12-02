import { useQuery } from "@tanstack/react-query"
import { api } from "@/libs/axios";
import { MealResponse } from "@/types/meals";

export const useSearchMeals=(query: string)=>{
    return useQuery<MealResponse>(
        {
            queryKey:["search-meals",query],
            queryFn:async()=>{
                const res=await api.get(`search.php`,{
                    params:{s:query},
                });
                return res.data;
            },
            enabled:Boolean(query),
        }
    );
};