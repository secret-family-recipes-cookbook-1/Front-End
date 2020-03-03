// Card that give basic info about recipe and links to the RecipePage

import React from "react";

const RecipeCard = ({ recipe }) => {
	return (
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
	);
};

export default RecipeCard;
