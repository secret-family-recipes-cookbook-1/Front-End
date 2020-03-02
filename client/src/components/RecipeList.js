// Component maps over array of recipes and creates a RecipeCard for each.

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MOCK_DATA from "../MOCK_DATA";

import "../utils/styles/css/Recipe.css";

import RecipeContext from "../contexts/RecipeContext";

const RecipeList = () => {
	// const [recipeList, setRecipeList] = useState(MOCK_DATA);
	const { recipeList, setRecipeList } = useContext(RecipeContext);
	console.log("MOCK DATA", recipeList);

	const recipe = recipeList.map((recipe, index) => {
		return (
			<Link to='/recipe-card'>
				<div key={index} className='recipe__container'>
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

	return <div className='recipeList__container'>{recipe}</div>;
};

export default RecipeList;
