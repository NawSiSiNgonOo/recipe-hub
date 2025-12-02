import { useQuery } from "@tanstack/react-query"
import { api } from "@/libs/axios";

export const useSearchMeals=(query: string)=>{
    return useQuery(
        {
            queryKey:["search-meals",query],
            queryFn:async()=>{
                const res=await api.get(`search.php`,{
                    params:{s:query},
                });
                return res.data;
                // console.log(res.data.meals);
            },
            enabled:Boolean(query),
        }
    );
};