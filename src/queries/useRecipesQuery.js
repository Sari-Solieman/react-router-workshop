import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { itemKeys } from "./query-keys";

export function useRecipesQuery() {
    const recipesQuery = useQuery({
        queryKey: itemKeys.all(),
        queryFn: getRecipes,
        staleTime: 10 * 60 * 100,
    });

    return recipesQuery;
}

async function getRecipes() {
    const result = await axios.get('https://dummyjson.com/recipes');

    return result.data.recipes;
}