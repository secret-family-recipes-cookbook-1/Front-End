// Component maps over array of recipes and creates a RecipeCard for each.

import React, { useState } from "react";
import { Link } from "react-router-dom";
import MOCK_DATA from "../MOCK_DATA";


const RecipeList = () => {
	const [recipeList, setRecipeList] = useState(MOCK_DATA);
	console.log("MOCK DATA", recipeList);

	const recipe = recipeList.map((recipe, index) => {
		return (
			<Link to='/recipe-card'>
				<div key={index} className='recipe__container'>
					<img src={recipe.image} />
					<div className='recipe__body'>
						<h3 className='recipe__title'>{recipe.title}</h3>
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
