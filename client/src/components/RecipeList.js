// Component maps over array of recipes and creates a RecipeCard for each.

import React, { useState, useContext } from "react";
import RecipeContext from "../contexts/RecipeContext";
import { Link } from "react-router-dom";


const RecipeList = () => {
	const { recipeList, setRecipeList } = useContext(RecipeContext);

	console.log("MOCK DATA", recipeList);

	const recipe = recipeList.map(recipe => {
		return (
			<Link to={`/recipe-page/${recipe.id}`} key={recipe.id}>
				<div className='recipe__container'>
					<div className='recipe__image__container'>
						<img src={recipe.image} />
					</div>
					<div className='recipe__body'>
						<h4 className='recipe__title'>{recipe.title}</h4>
						<p className='recipe__source'>From {recipe.source}</p>
						<p className='recipe__author'>
							By {recipe.firstName} {recipe.lastName}
						</p>
						<p className='recipe__label__container'>
							<span className='recipe__label'>{recipe.category}</span>
						</p>
					</div>
				</div>
			</Link>
		);
	});

	return (
		<>
			<div className='recipeList__container'>{recipe}</div>
		</>
	);
};

export default RecipeList;
