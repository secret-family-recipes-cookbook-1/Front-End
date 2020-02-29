//  Full Page for specific recipe that give all information
//  If recipe is one published by the current user, additional options are listed:
//  Option to delete recipe
//  Option to edit recipe (Renders inline with turnary operator checking editing status)

import React, { useContext, useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useForm } from '../utils/useForm';
import RecipeContext from '../contexts/RecipeContext';

const RecipePage = props => {
    const {recipeList, setRecipeList} = useContext(RecipeContext);  // Importing global recipe list context
    const [localRecipe, setLocalRecipe] = useState({});               // Local state slice for current recipe being viewed
    const [editing, setEditing] = useState(true);                  // Editing toggle. Defaults to FALSE.

    // {
    //     title: '',
    //     ingredients: [],
    //     rid: '',
    //     source: '',
    //     fname: '',
    //     lname: '',
    //     body: '',
    //     instructions: [],
    //     category: '',
    //     image: ''
    // }

    useEffect(() => {
        console.log('recipeList ', recipeList[props.match.params.id]);
        setLocalRecipe(recipeList[1]); // This is for mock data
        // axiosWithAuth()
        //     .get(`/recipe/${props.match.params.id}`)
        //     .then(res => setLocalRecipe(res.data))
        
    }, []);
    console.log('localRecipe ', localRecipe.ingredients);
    const handleEdit = () => {                                      // handleEdit manages editing and PUTting of data to the API

    }

    const handleDelete = () => {                                    // handleDelete manages DELETE of data from the API

    }

    const submitCallback = () => {
        console.log('submitCallback');
    }

    const [values, handleChanges, handleSubmit] = useForm({
        title: '',
        ingredients: [],
        source: '',
        body: '',
        instructions: [],
        category: '',
        image: ''
    },
        submitCallback
    );

    return (
        <div className='recipe-page'>
            <h2>On Recipe Page</h2>
            {editing ? (                                           // If editing is true, show edit form:
                <form className='recipe-edit'>
                     <section>
                        <div>
                            <input type='text' name='title' value={values.title} onChange={handleChanges} />
                            <label>{`By: ${localRecipe.firstName} ${localRecipe.lastName} From: `}<input type='text' name='source' value={values.source} onChange={handleChanges} /></label> 
                            <select name='category' value={values.category} onChange={handleChanges}>
                                <option value='breakfast'>Breakfast</option>
                                <option value='lunch'>Lunch</option>
                                <option value='dinner'>Dinner</option>
                                <option value='desert'>Desert</option>
                                <option value='beverage'>Beverage</option>
                            </select>
                        </div>
                        <figure>
                            <input type='file' name='image' value={values.image} onChange={handleChanges} />
                        </figure>
                    </section>

                    <section>
                        <textarea name='body' value={values.body} ></textarea>
                    </section>

                    <section>
                        <div>
                            <h2>Ingredients</h2>
                            <ul>                                    {/* Map over data array and create list */} 
                                {localRecipe.ingredients.map(item => {
                                    return (
                                        <li>{item}</li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div>
                            <h2>Instructions</h2>
                            <ol>                                    {/* Map over data array and create list */} 
                                {/* {localRecipe.ingredients.map((item) => {
                                    return (
                                        <li>{item}</li>
                                    );
                                })} */}
                            </ol>
                        </div>
                    </section>
                </form>
            ) : (                                                   // If editing is false, show recipe listing:
                <div className='recipe-info'>
                    <section>
                        <div>
                            <h1>{localRecipe.title}</h1>
                            <h3>By: {localRecipe.firstName} {localRecipe.lastName} | From: {localRecipe.source}</h3>
                            <h4>{localRecipe.category}</h4>
                        </div>
                        <figure></figure>
                    </section>

                    <section>
                    <p>{localRecipe.body}</p>
                    </section>

                    <section>
                        <div>
                            <h2>Ingredients</h2>
                            <ul>                                    {/* Map over data array and create list */} 
                                {/* {localRecipe.ingredients.map((item) => {
                                    return (
                                        <li>{item}</li>
                                    );
                                })} */}
                            </ul>
                            
                        </div>
                        <div>
                            <h2>Instructions</h2>
                            <ol>                                    {/* Map over data array and create list */} 
                                {/* {localRecipe.ingredients.map((item) => {
                                    return (
                                        <li>{item}</li>
                                    );
                                })} */}
                            </ol>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}

export default RecipePage;