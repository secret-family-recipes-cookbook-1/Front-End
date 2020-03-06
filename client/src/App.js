import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeContext from "./contexts/RecipeContext";

import "./utils/styles/css/index.css";

import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import AddRecipe from "./components/AddRecipe";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";

function App() {
	let mockData = [
		{
			id: 1,
			title: "Greek Lemon Chicken and Potatoes",
			ingredients: [
				`4 pounds skin-on, bone-in chicken thighs
        1 tablespoon kosher salt
        1 tablespoon dried oregano
        1 teaspoon freshly ground black pepper
        1 teaspoon dried rosemary
        1 pinch cayenne pepper
        1/2 cup fresh lemon juice
        1/2 cup olive oil 
        6 cloves garlic, minced 
        3 russet potatoes, peeled and quartered
        2/3 cup chicken broth, plus splash to deglaze pan
        chopped fresh oregano for garnish`
      ],
      source: "Chef John",
      instructions: 
        `Preheat oven to 425 degrees F (220 degrees C).
        Lightly oil a large roasting pan.
        Place chicken pieces in large bowl.
        Season with salt, oregano, pepper, rosemary, and cayenne pepper.
        Add fresh lemon juice, olive oil, and garlic.
        Place potatoes in bowl with the chicken; stir together until chicken and potatoes are evenly coated with marinade.
        Transfer chicken pieces, skin side up, to prepared roasting pan, reserving marinade.
        Distribute potato pieces among chicken thighs.
        Drizzle with 2/3 cup chicken broth.
        Spoon remainder of marinade over chicken and potatoes.
        Place in preheated oven. Bake in the preheated oven for 20 minutes. Toss chicken and potatoes, keeping chicken skin side up; continue baking until chicken is browned and cooked through, about 25 minutes more.
        An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C).
        Transfer chicken to serving platter and keep warm.
        Set oven to broil or highest heat setting. Toss potatoes once again in pan juices. Place pan under broiler and broil until potatoes are caramelized, about 3 minutes. Transfer potatoes to serving platter with chicken.
        Place roasting pan on stove over medium heat. Add a splash of broth and stir up browned bits from the bottom of the pan. Strain; spoon juices over chicken and potatoes. Top with chopped oregano.`,
			category: "dinner",
			body:
				"I don't have the energy or courage to cater for a living but, if I did, this Greek lemon chicken and potatoes would be one of my go-to entrees, and not just for big, fat weddings. It's a proven crowd-pleaser, simple to make, and easy on the wallet.",
			image:
				"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5567505.jpg&w=596&h=596&c=sc&poi=face&q=85",
			firstName: "Andriette",
			lastName: "Clapp"
		},
		{
			id: 2,
			title: "Dark Chocolate Hot Cocoa",
			ingredients: [
				`1 cup whole milk
        1 1/2 teaspoons brown sugar, or to taste
        2 ounces dark chocolate (such as Moser Roth 85% Dark Chocolate), or to taste
        1 tablespoon heavy whipping cream, or more to taste
        1 pinch ground cinnamon, or more to taste`
			],
			source: "Aunt Aurora",
			instructions: [
				`Heat milk in a saucepan over medium heat until just before boiling, 3 to 4 minutes.
        Add brown sugar and stir until dissolved, about 1 minute.
        Stir dark chocolate into milk until melted, 2 to 3 minutes.
        Remove saucepan from heat and stir cream and cinnamon into milk mixture.`
			],
			category: "beverage",
			body:
				"I was messing around in my kitchen one day and was craving hot cocoa. Since I only had dark chocolate on hand, I used that, and for a festive touch added cinnamon. Pour into a mug and top with whipped cream or marshmallows, if desired. Serve hot.",
			image:
				"https://images.media-allrecipes.com/userphotos/560x315/2087944.jpg",
			firstName: "Farly",
			lastName: "Pennicard"
		},
		{
			id: 3,
			title: "Grandma's Butterscotch Pie",
			ingredients: [
				`1 cup packed light brown sugar
        4 tablespoons cornstarch
        ½ teaspoon salt
        2 cups milk
        2 egg yolks, beaten
        1 tablespoon butter
        1 teaspoon vanilla extract
        1 (9 inch) pie crust, baked`
			],
			source: "Arluene",
			instructions: [
				`In top of double boiler, combine brown sugar, cornstarch, salt and milk. Cook, stirring constantly, until mixture starts to thicken, about 20 minutes.
        Whisk in egg yolks; continue to cook and stir until filling is thickened.
        While pudding mixture is cooking, preheat the oven to 400 degrees F (200 degrees C).
        Remove filling from heat, and stir in butter and vanilla.
        Pour filling into prepared pie crust. Bake in preheated oven until top begins to brown, about 5 minutes.`
			],
			category: "dessert",
			body:
				"This is one of my favorite holiday pies. Serve with whipped cream. Yum!",
			image:
				"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5223004.jpg",
			firstName: "Annelise",
			lastName: "Swate"
		},
		{
			id: 4,
			title: "Puff Pastry Waffles",
			ingredients: [
				`1 (17.3 ounce) package frozen puff pastry, thawed
        cooking spray`
			],
			source: "Warren",
			instructions: [
				`Line a cutting board with parchment paper. Unfold puff pastry onto cutting board. Cut each sheet into 4 equal squares.
        Preheat a waffle iron according to manufacturer's instructions. Grease with cooking spray.
        Place one puff pastry square in the preheated waffle iron; cook until golden brown, 3 to 5 minutes. Repeat with remaining puff pastry squares.`
			],
			category: "breakfast",
			body:
				"Add puff pastry to the list of good things you can snackify in your waffle iron. Although they don't puff up as much as oven-baked puff pastry, they turn out crispy on the outside and tender on the inside, and they take only minutes to make. Serve hot or at room temperature with syrup, fruit, Nutella®, fruit preserves, or nut butter.",
			image:
				"https://images.media-allrecipes.com/userphotos/720x405/3374022.jpg",
			firstName: "Nat",
			lastName: "Sarginson"
		},
		{
			id: 5,
			title: "Banh Mi",
			ingredients: [
				`1/2 cup rice vinegar
        1/4 cup water
        1/4 cup white sugar
        1/4 cup carrot, cut into 1/16-inch-thick matchsticks
        1/4 cup white (daikon) radish, cut into 1/16-inch-thick matchsticks
        1/4 cup thinly sliced white onion
        1 skinless, boneless chicken breast half
        garlic salt to taste
        ground black pepper to taste
        1 (12 inch) French baguette 
        4 tablespoons mayonnaise
        1/4 cup thinly sliced cucumber
        1 tablespoon fresh cilantro leaves
        1 small jalapeno pepper - seeded and cut into 1/16-inch-thick matchsticks
        1 wedge lime`
			],
			source: "Uncle K",
			instructions: [
				`Place rice vinegar, water, and sugar into a saucepan over medium heat, bring to a boil, and stir until the sugar has dissolved, about 1 minute. Allow the mixture to cool.
        Pour the cooled vinegar mixture over the carrot, radish, and onion in a bowl, and allow to stand for at least 30 minutes. Drain off the excess vinegar mixture after the vegetables have marinated.
        While the vegetables are marinating, preheat the oven's broiler, and set the oven rack about 6 inches from the heat source. Lightly oil a slotted broiler pan.
        Sprinkle the chicken breast with garlic salt and pepper, and broil on slotted broiler pan, turning once, until the center of the chicken breast is no longer pink and the surface has browned, about 6 minutes per side. Remove the broiled chicken, and slice into bite-size pieces.
        Slice the baguette in half the long way, and pull the center of the bread out of the baguette halves, leaving a cavity for the filling. Place the baguette halves under the broiler to lightly toast, 2 to 3 minutes.
        To assemble the bahn mi sandwich, spread each half of the toasted baguette with mayonnaise, and fill the cavity of the bottom half of the bread with broiled chicken, cucumber slices, pickled carrot, onion, and radish, cilantro leaves, and jalapeno pepper. Squeeze a wedge of lime over the filling, and top with the other half of the baguette.`
			],
			category: "lunch",
			body:
				"A Vietnamese sandwich, made with chicken and full of pickled vegetables. My husband works around a lot of Vietnamese restaurants, and I was making him bring me home these tasty sandwiches. Finally I attempted to make one, and found that my recipe was even better than the restaurants, mainly because I used chicken breast and fresher ingredients. I also love the pickled vegetables, so I made sure there was plenty of those.",
			image:
				"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1039590.jpg",
			firstName: "Melitta",
			lastName: "Aleksankov"
		}
	];

	const [recipeList, setRecipeList] = useState([]);

  return (
    <Router>
      <RecipeContext.Provider value={{ recipeList, setRecipeList }}>
        <div className="App">
          <h1>Secret Family Recipes</h1>
          <Navigation />
          {/* <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/recipes" component={RecipeList} />
            <Route exact path="/add-recipe" component={AddRecipe} />
            <Route exact path="/recipes/:id" component={RecipeDetails} />
          </Switch> */}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <ProtectedRoute exact path="/recipes" component={RecipeList} />
            <ProtectedRoute exact path="/add-recipe" component={AddRecipe} />
            <ProtectedRoute path="/recipes/:id" component={RecipeDetails} />
          </Switch>
        </div>
      </RecipeContext.Provider>
    </Router>
  );
}

export default App;
