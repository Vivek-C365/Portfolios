import React from 'react'
import "../Assets/Project.css";
import { NavLink } from "react-router-dom";
import Socialicons from "./Social_icons/Socialicons";
import FavoriteIcon from '@material-ui/icons/Favorite';


export default function Footer() {
  return (
    <>
    
    <footer className="footer-07">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-12 text-center">
						<h2 className="footer-heading logo">Vivek's Portfolio</h2>
						<p className="menu">
							<NavLink className="nav-link" to="/Portfolio">Home</NavLink>
							<NavLink className="nav-link" to="/Work">Work</NavLink>
							<NavLink className="nav-link" to="/Education">Education</NavLink>
							<NavLink className="nav-link" to="/Experience">Experience</NavLink>
							<NavLink className="nav-link" to="/About">About</NavLink>
							<NavLink className="nav-link" to="/Contact">Contact</NavLink>
						</p>
						<ul className="ftco-footer-social p-0">
              <li className="ftco-animate"><span className="icon-logo">{<Socialicons/>}</span></li>
             
			 
			  
            </ul>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-md-12 text-center footer_line">
						<p className="copyright">
					  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |Designed With <FavoriteIcon style ={{color: '#a3de83'}}/> by <a href="/" >Vivek Choudhary</a>
					  </p>
					</div>
				</div>
			</div>
		</footer>
    
    </>
  )
}
