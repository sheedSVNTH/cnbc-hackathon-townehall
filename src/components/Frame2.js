import React, { Component } from 'react';

import Home from './Home/Home';
import User from './User/User';


class Frame2 extends Component {

  render() {
    return (
      <div className="Frame">
        <header id="header" className="Frame-header">
			<button id="logo" onClick={this.handleClick} value='Home' className="Frame-link">TowneHall</button>
			<nav>
		<div id="user-greeting" style={{display: this.props.userDisplay}} value='User' className="Frame-link">Welcome, Paola!</div>

			</nav>
        </header>
		
</div>
		
    );
  }
}

export default Frame2;