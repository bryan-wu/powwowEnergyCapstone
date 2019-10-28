import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
		  <button class="btn btn-outline-success my-2 my-sm-0 mr-2" type="submit">
			<NavLink to="/login">Login</NavLink>
		  </button>
		  
		  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
			<NavLink to="/signup">Signup</NavLink>
		  </button>
       </div>
    );
}
 
export default Navigation;