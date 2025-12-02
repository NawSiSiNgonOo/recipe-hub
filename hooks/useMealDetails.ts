import { api } from "@/libs/axios"
import { MealResponse } from "@/types/meals";
import { useQuery } from "@tanstack/react-query"

export const useMealDetails=(id:string)=>{
    return useQuery<MealResponse>(
        {
            queryKey:["meal-details",id],
            queryFn:async()=>{
                const res=await api.get(`lookup.php`,{
                    params:{i:id},
                });
                return res.data;
            },
            enabled:Boolean(id),
        }
    );
};