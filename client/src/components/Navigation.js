import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";


const Navigation = () => {
	const loggedIn = localStorage.getItem("token");

	return (
		<>
			<nav className='navBar'>
				<div className='navBar__logo__container'>
					<Link to='/'>Secret Family Recipes</Link>
				</div>
				<div className='navBar__links__container'>
					{loggedIn ? ( <SignedInLinks /> ) : ( <SignedOutLinks /> )}
				</div>
			</nav>
		</>
	);
};

export default Navigation;

const SignedOutLinks = () => {
	return (
		<ul className='navBar__signedOut__links'>
			<li>
				<NavLink to='/login'>Login</NavLink>
			</li>
			<li>
				<NavLink to='/register'>Register</NavLink>
			</li>
		</ul>
	);
};

const SignedInLinks = () => {
	const { push } = useHistory();

	const logOut = () => {
		localStorage.removeItem("token");
		push("/login");
	};

	return (
		<ul className='navBar__signedIn__links'>
			<li>
				<NavLink to='/add-recipe'>Add Recipe</NavLink>
			</li>
			<li>
				<a onClick={logOut}>Log Out</a>
				{/*Will add an OnClick linked to a signOut function */}
			</li>
		</ul>
	);
};
