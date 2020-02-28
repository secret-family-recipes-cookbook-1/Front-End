import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Navigation from "./components/Navigation"
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from "./components/UserProfile"
import Login from "./components/Login"
import Register from "./components/Register"
import LandingPage from "./components/LandingPage"
import AddRecipe from "./components/AddRecipe"
import EditRecipe from "./components/EditRecipe"


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Secret Family Recipes</h1>
        <Navigation />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Register} />
          <ProtectedRoute path="/profile" component={UserProfile} />
          <Route path="/add-recipe" component={AddRecipe} />
          <Route path="/edit-recipe" component={EditRecipe} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
