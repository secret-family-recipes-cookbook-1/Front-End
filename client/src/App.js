import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeContext from "./contexts/RecipeContext";

import "./utils/styles/css/index.css";

import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import AddRecipe from "./components/AddRecipe";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";

function App() {
	const [recipeList, setRecipeList] = useState([]);

	return (
		<Router>
			<RecipeContext.Provider value={{ recipeList, setRecipeList }}>
				<div className='App'>
					<Navigation />
					<Switch>
						<ProtectedRoute exact path='/' component={RecipeList} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
						<ProtectedRoute exact path='/recipes' component={RecipeList} />
						<ProtectedRoute exact path='/add-recipe' component={AddRecipe} />
						<ProtectedRoute path='/recipes/:id' component={RecipeDetails} />
					</Switch>
				</div>
			</RecipeContext.Provider>
		</Router>
	);
}

export default App;
