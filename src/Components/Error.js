import React from "react";
import '../Assets/error.css'
import { NavLink } from "react-router-dom";



export default function Error() {
   

  return (
    <>
      <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>404</h1>
				<h2>Page not found</h2>
			</div>
			<NavLink className="nav-link" to="/Portfolio">Homepage</NavLink>
		</div>
	</div>
    </>
  );
}
