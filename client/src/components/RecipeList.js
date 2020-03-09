import React, { useContext, useEffect } from "react";
import RecipeContext from "../contexts/RecipeContext";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const RecipeList = () => {
  const { recipeList, setRecipeList } = useContext(RecipeContext);

  useEffect(() => {
    axiosWithAuth()
      .get("/recipes")
      .then(res => {
        console.log("[--SUCCESS--][GET]: RecipeList.js ~ ", res);
        setRecipeList(res.data.recipe);
      })
      .catch(err => console.log("[#-ERROR-#][GET]: RecipeList.js ~ ", err));
  }, []);

  console.log("MOCK DATA", recipeList);
  return (
    <div className="list-container">
      {!recipeList ? (
        <h1>Loading Recipes</h1>
      ) : (
        recipeList.map(recipe => {
          return (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default RecipeList;
