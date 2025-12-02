export type Meal={
    idMeal : string;
    strMeal : string;
    strMealThumb : string;
    strInstructions :string;
};

export type MealResponse = {
    meals: Meal[] | null;
}