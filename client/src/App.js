import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RecipeContext from './contexts/RecipeContext';

import Navigation from "./components/Navigation"
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from "./components/UserProfile"
import Login from "./components/Login"
import Register from "./components/Register"
import LandingPage from "./components/LandingPage"
import AddRecipe from "./components/AddRecipe"
import RecipePage from './components/RecipePage';


function App() {

  const [recipeList, setRecipeList] = useState();

  return (
    <Router>
      <RecipeContext.Provider value={{ recipeList, setRecipeList }} >
        <div className="App">
          <h1>Secret Family Recipes</h1>
          <Navigation />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Register} />
            <ProtectedRoute path="/profile" component={UserProfile} />
            <Route path="/add-recipe" component={AddRecipe} />
            <Route path="/recipe/:id" component={RecipePage} />
          </Switch>
        </div>
      </RecipeContext.Provider>
    </Router>
  );
}

export default App;
