import React, { useContext } from "react";
import RecipeContext from "../contexts/RecipeContext";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const { recipeList, setRecipeList } = useContext(RecipeContext);

  console.log("MOCK DATA", recipeList);
  return (
    <div className="list-container">
      {recipeList.map(recipe => {
        return (
          <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Link>
        );
      })}
    </div>
  );
};

export default RecipeList;
