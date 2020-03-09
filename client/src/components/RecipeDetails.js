//  Full Page for specific recipe that give all information
//  If recipe is one published by the current user, additional options are listed:
//  Option to delete recipe
//  Option to edit recipe (Renders inline with turnary operator checking editing status)

import React, { useContext, useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import RecipeContext from "../contexts/RecipeContext";
import { useHistory } from "react-router-dom";

const RecipeDetails = props => {
  const { recipeList, setRecipeList } = useContext(RecipeContext); // Importing global recipe list context
  const [localRecipe, setLocalRecipe] = useState({}); // Local state slice for current recipe being viewed
  const [editing, setEditing] = useState(false); // Editing toggle. Defaults to FALSE

  const history = useHistory();

  const handleEdit = e => {
    // handleEdit manages editing and PUTting of data to the API
    e.preventDefault();
    axiosWithAuth()
      .put(`/recipes/${localRecipe.id}`, localRecipe)
      .then(res => {
        console.log("[--SUCCESS--][PUT]: RecipeDetails.js ~ ", res);
        // setLocalRecipe(res.data.recipe);
        setEditing(false);
      })
      .catch(err => console.log("[#-ERROR-#][PUT]: RecipeDetails.js ~ ", err));
  };

  const handleDelete = e => {
    // handleDelete manages DELETE of data from the API
    e.preventDefault();
    axiosWithAuth()
      .delete(`/recipes/${localRecipe.id}`)
      .then(res => {
        console.log("[--SUCCESS--][DELETE]: RecipeDetails.js ~ ", res);
        history.push("/recipes");
      })
      .catch(err =>
        console.log("[#-ERROR-#][DELETE]: RecipeDetails.js ~ ", err)
      );
  };

  const handleChanges = e => {
    setLocalRecipe({ ...localRecipe, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/recipes/${props.match.params.id}`)
      .then(res => {
        console.log("[--SUCCESS--][GET]: RecipeDetails.js ~ ", res.data);
        setLocalRecipe(res.data);
      })
      .catch(err => console.log("[#-ERROR-#][GET]: RecipeDetails.js ~ ", err));
  }, []);

  console.log("localRecipe ", localRecipe);
  return (
    <div className="recipe-page">
      <h2>On Recipe Page</h2>
      {!editing ? ( // If editing is true, show edit form:
        !localRecipe ? (
          <h1>Loading Recipe</h1>
        ) : (
          // If editing is false, show recipe listing:
          <div className="recipe-info">
            <section>
              <div>
                <h1>{localRecipe.title}</h1>
                <h3>From: {localRecipe.source}</h3>
                <h4>{localRecipe.category}</h4>
              </div>
            </section>

            <main>
              <p>{localRecipe.body}</p>
            </main>

            <section>
              <div>
                <h2>Ingredients</h2>
                <p>{localRecipe.ingredients}</p>
              </div>
              <div>
                <h2>Instructions</h2>
                <p>{localRecipe.instructions}</p>
              </div>
              <button
                onClick={() => {
                  setEditing(true);
                }}
              >
                Make Changes
              </button>
            </section>
          </div>
        )
      ) : (
        <form className="recipe-edit">
          <section>
            <div>
              <input
                type="text"
                name="title"
                value={localRecipe.title}
                onChange={handleChanges}
              />
              <label>
                By:
                <input
                  type="text"
                  name="source"
                  value={localRecipe.source}
                  onChange={handleChanges}
                />
              </label>
              <select
                name="category"
                value={localRecipe.category}
                onChange={handleChanges}
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="desert">Desert</option>
                <option value="beverage">Beverage</option>
              </select>
            </div>
          </section>

          <section>
            <div>
              <h2>Ingredients</h2>
              <textarea
                name="ingredients"
                onChange={handleChanges}
                defaultValue={localRecipe.ingredients}
              ></textarea>
            </div>
            <div>
              <h2>Instructions</h2>
              <textarea
                name="instructions"
                onChange={handleChanges}
                defaultValue={localRecipe.instructions}
              ></textarea>
            </div>
            <button onClick={handleEdit}>Submit Changes</button>
            <button onClick={handleDelete}>Delete Recipe</button>
          </section>
        </form>
      )}
    </div>
  );
};

export default RecipeDetails;
