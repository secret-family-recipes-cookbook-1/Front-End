//  Full Page for specific recipe that give all information
//  If recipe is one published by the current user, additional options are listed:
//  Option to delete recipe
//  Option to edit recipe (Renders inline with turnary operator checking editing status)

import React, { useContext, useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useForm } from "../utils/useForm";
import RecipeContext from "../contexts/RecipeContext";

const RecipeDetails = props => {
  const { recipeList, setRecipeList } = useContext(RecipeContext); // Importing global recipe list context
  const [localRecipe, setLocalRecipe] = useState({}); // Local state slice for current recipe being viewed
  const [editing, setEditing] = useState(false); // Editing toggle. Defaults to FALSE
  // {
  //     title: '',
  //     ingredients: '',
  //     rid: '',
  //     uid: '',
  //     source: '',
  //     instructions: '',
  //     category: '',
  // }

  useEffect(() => {
    axiosWithAuth()
      .get(`/recipes/${props.match.params.id}`)
      .then(res => {
        console.log('[--SUCCESS--][GET]: RecipeDetails.js ~ ', res);
        setLocalRecipe(res.data);
      })
      .catch(err => console.log('[#-ERROR-#][GET]: RecipeDetails.js ~ ', err))
  }, []);

  console.log("localRecipe ", localRecipe);
  console.log("props.match.params.id ", props);
  
  // submitCallback(() => {
  //   handleEdit manages editing and PUTting of data to the API
  //   const allValues = {
  //     ...values,
  //     id: localRecipe.id
  //   };
  //   axiosWithAuth()
  //     .put(`/recipes/${localRecipe.id}`, allValues)
  //     .then(res => {
  //       console.log('[--SUCCESS--][PUT]: RecipeDetails.js ~ ', res);
  //       setLocalRecipe(res.data.recipe);
  //     })
  //     .catch(err => console.log('[#-ERROR-#][PUT]: RecipeDetails.js ~ ', err))
  // });

  const handleDelete = () => {
    // handleDelete manages DELETE of data from the API
    // axiosWithAuth()
    //   .delete(`/recipes/${localRecipe.id}`)
    //   .then(res => {
    //     console.log('[--SUCCESS--][DELETE]: RecipeDetails.js ~ ', res);
    //     setLocalRecipe(res.data.recipe);
    //   })
    //   .catch(err => console.log('[#-ERROR-#][DELETE]: RecipeDetails.js ~ ', err))
  };

  const submitCallback = () => {
    console.log("submitCallback");
  };

  const [values, handleChanges, handleSubmit] = useForm(
    {
      title: '',
      ingredients: '',
      source: '',
      instructions: '',
      category: ''
    },
    submitCallback
  );


  return (
    <div className="recipe-page">
      <h2>On Recipe Page</h2>
      {editing ? ( // If editing is true, show edit form:
        <form className="recipe-edit">
          <section>
            <div>
              <input
                type="text"
                name="title"
                value={values.title}
                onChange={handleChanges}
              />
              <label>
                By:
                <input
                  type="text"
                  name="source"
                  value={values.source}
                  onChange={handleChanges}
                />
              </label>
              <select
                name="category"
                value={values.category}
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
              <textarea name="ingredients" onChange={handleChanges}>
                {values.ingredients}
              </textarea>
            </div>
            <div>
              <h2>Instructions</h2>
              <textarea name="instructions" onChange={handleChanges}>
                {values.instructions}
              </textarea>
            </div>
          </section>
        </form>
      ) : (
        // If editing is false, show recipe listing:
        <div className="recipe-info">
          <section>
            <div>
              <h1>{localRecipe.title}</h1>
              <h3>
                By: {localRecipe.firstName} {localRecipe.lastName} | From:{" "}
                {localRecipe.source}
              </h3>
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
          </section>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
