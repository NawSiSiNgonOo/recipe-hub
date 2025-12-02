"use client";
import { SubmitHandler, useForm } from "react-hook-form";

type RecipeSearch = {
  recipe: string;
};

export default function SearchForm({
  onSubmit
}: {
  onSubmit: (data: RecipeSearch) => void;
}) {
  const { register, handleSubmit } = useForm<RecipeSearch>();
  // const onSubmit: SubmitHandler<RecipeSearch>=(data)=>console.log(data.recipe);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 my-6">
      <input
        {...register("recipe")}
        placeholder="Search ..."
        className="border px-4 py-2 rounded w-full"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}
