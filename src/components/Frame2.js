import React, { Component } from 'react';

import Home from './Home/Home';
import User from './User/User';


class Frame2 extends Component {
	constructor(props){
		super(props);
		this.state = {
			activePage: <Home />,
			userDisplay: 'none'
		};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(e){
console.log('connected');
	}
		
  render() {
    return (
      <div className="Frame">
        <header id="header" className="Frame-header">
			<button id="logo" onClick={this.handleClick} value='Home' className="Frame-link">TowneHall</button>
			<nav>
				<ul>
					<li><button onClick={this.handleClick} style={{display: this.state.userDisplay}} value='Home' id="log" className="Frame-link">Log-in</button></li>
					<li><button onClick={this.handleClick} style={{display: this.state.userDisplay}} value='User' className="Frame-link">Welcome, Paola!</button></li>
				</ul>
			</nav>
        </header>
		
</div>
		
    );
  }
}

export default Frame2;