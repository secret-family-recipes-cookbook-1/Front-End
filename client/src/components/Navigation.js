import React from "react";
import { Link, NavLink } from "react-router-dom";

import "../utils/styles/css/navigation.css";

const Navigation = props => {
	// Need auth status to display SignInLinks or SignedOutLinks
	//const links = <whatever tracks the authentication/> ? <SignedInLinks/> : <SignedOutLinks/>

	return (
		<>
			<nav className='navBar'>
				<div className='navBar__logo__container'>
					<Link to='/'>Secret Family Recipes</Link>
				</div>
				<div className='navBar__links__container'>
					{/*Will show if user is logged out */}
					<ul className='navBar__signedOut__links'>
						<li>
							<NavLink to='/login'>Login</NavLink>
						</li>
						<li>
							<NavLink to='/register'>Register</NavLink>
						</li>
					</ul>

					{/*Will show if user is logged in */}
					<ul className='navBar__signedIn__links'>
						<li>
							<NavLink to='/add-recipe'>Add Recipe</NavLink>
						</li>
						<li>
							<a>Log Out</a>
							{/*Will add an OnClick linked to a signOut function */}
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
