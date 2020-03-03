// Component maps over array of recipes and creates a RecipeCard for each.

import React, { useState, useContext } from "react";
import RecipeContext from "../contexts/RecipeContext";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";


const RecipeList = () => {
	const { recipeList, setRecipeList } = useContext(RecipeContext);

	console.log("MOCK DATA", recipeList);
	return (
		<div className='recipeList__container'>
			{recipeList.map(recipe => {
				return (
					<Link to={`/recipes/${recipe.id}`} key={recipe.id}>
						<RecipeCard recipe={recipe}/>
					</Link>
				);
			})}
		</div>
	);
};

export default RecipeList;
