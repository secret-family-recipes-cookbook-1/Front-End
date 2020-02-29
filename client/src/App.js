import React, { useState, } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

  const mockData = [
    {
      id: 1,
      title: 'Bald Brome',
      ingredients: ['volutpat','volutpat','volutpat','volutpat','volutpat','volutpat'],
      source: 'Marion',
      instructions: ['Vivamus vel nulla eget eros elementum pellentesque.','Vivamus vel nulla eget eros elementum pellentesque.','Vivamus vel nulla eget eros elementum pellentesque.','Vivamus vel nulla eget eros elementum pellentesque.','Vivamus vel nulla eget eros elementum pellentesque.','Vivamus vel nulla eget eros elementum pellentesque.'],
      category: 'dessert',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://images.unsplash.com/photo-1567327613485-fbc7bf196198?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
      firstName: 'Andriette',
      lastName: 'Clapp'
    },
    {
      id: 2,
      title: 'Neslia',
      ingredients: ['nibh','nibh','nibh','nibh','nibh','nibh'],
      source: 'Kanya',
      instructions: ['Phasellus id sapien in sapien iaculis congue.','Phasellus id sapien in sapien iaculis congue.','Phasellus id sapien in sapien iaculis congue.','Phasellus id sapien in sapien iaculis congue.','Phasellus id sapien in sapien iaculis congue.','Phasellus id sapien in sapien iaculis congue.'],
      category: 'dinner',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://images.unsplash.com/photo-1582762147088-0aee85cd50fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
      firstName: 'Farly',
      lastName: 'Pennicard'
    },
    {
      id: 3,
      title: 'Southern Beaksedge',
      ingredients: ['nulla','nulla','nulla','nulla','nulla','nulla'],
      source: 'Arluene',
      instructions: ['Proin at turpis a pede posuere nonummy.','Proin at turpis a pede posuere nonummy.','Proin at turpis a pede posuere nonummy.','Proin at turpis a pede posuere nonummy.','Proin at turpis a pede posuere nonummy.','Proin at turpis a pede posuere nonummy.'],
      category: 'breakfast',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://images.unsplash.com/photo-1582755543509-dcf41b4676f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
      firstName: 'Annelise',
      lastName: 'Swate'
    },
    {
      id: 4,
      title: 'African Rattlebox',
      ingredients: ['integer','integer','integer','integer','integer','integer'],
      source: 'Warren',
      instructions: ['Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.','Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.','Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.','Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.','Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.','Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.'],
      category: 'lunch',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://images.unsplash.com/photo-1502550900787-e956c314a221?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
      firstName: 'Nat',
      lastName: 'Sarginson'
    },
    {
      id: 5,
      title: 'Mosquito Beaksedge',
      ingredients: ['nascetur','nascetur','nascetur','nascetur','nascetur','nascetur'],
      source: 'Shandeigh',
      instructions: ['Aliquam erat volutpat.','Aliquam erat volutpat.','Aliquam erat volutpat.','Aliquam erat volutpat.','Aliquam erat volutpat.','Aliquam erat volutpat.'],
      category: 'beverage',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://images.unsplash.com/photo-1573098175014-9127a98f97a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      firstName: 'Melitta',
      lastName: 'Aleksankov'
    }
  ];

  const [recipeList, setRecipeList] = useState(mockData);

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
            <Route exact path="/recipe/:id" component={RecipePage} />
          </Switch>
        </div>
      </RecipeContext.Provider>
    </Router>
  );
}

export default App;
