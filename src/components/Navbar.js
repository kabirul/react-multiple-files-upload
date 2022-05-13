import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {

  render() {    
    return (      
        <nav className="navbar navbar-expand navbar-dark bg-info">
		<div className="container">            
			  <a href="https://github.com/kabirul">
			    <img src="https://amicacs.com/assets/images/logo.png" className="imground" alt="" /> 
			  </a> 		 
          <div className="navbar-nav mr-auto mleft">
            <li className="nav-item">
              <Link to={"/"} className="nav-link white-text">
               Upload Multiple Files
              </Link>
            </li>           
          </div>
		   </div>	 
        </nav>
    );
  }
}
