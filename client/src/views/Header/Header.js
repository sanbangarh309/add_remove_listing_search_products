import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/metisMenu.min.css';
import './css/timeline.css';
import './css/startmin.css';
import './css/morris.css';
import './css/font-awesome.min.css';
import './css/Header.css';
var NavLink = require('react-router-dom').NavLink;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active:'active'
    };
    console.log(this.state)
  }
  render() {
    return (
        <header id="header">
        <div className="container">
    	<div className="row">
      		<div className="col-md-12">
       		<h1>Admin Add Product</h1>
          	</div>
      	</div>
    <div className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="san_header">
          <ul className='nav navbar-nav'>
            <li>
              <NavLink exact activeClassName='active' to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/products'>Products</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/search'>Search</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
	</header>
    );
  }
}

export default Header;
