import React from "react";

const RecipeCard = ({ recipe }) => {
  const figureStyle = {
    backgroundImage: "url(" + recipe.image + ")",
    backgroundRepeat: "none",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "275px",
    height: "275px",
    marginBottom: "10px"
  };

  return (
    <div className="recipe-card">
      {!recipe.image ? (
        <></>
      ) : (
        <figure style={figureStyle}></figure>
      )}
      <main>
        <h1>{recipe.title}</h1>
        <h2>From {recipe.source}</h2>
        <h3>
          <span>{recipe.category}</span>
        </h3>
      </main>
    </div>
  );
};

export default RecipeCard;
