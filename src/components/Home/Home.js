import React, { Component } from 'react';

import './Home.css';
import Frame2 from '../../components/Frame2';
import User from '../User/User';

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			handleDisplay: false,
			userDisplay: 'none'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	
	this.logVar = (
					<div className="left">
						<div>
							<form action="">
								<div className="form-group">
									<h1 id="login-heading">login</h1>
									<label for="">Username</label>
									<input value="Paola" className="form-control" type="text" />
									<label for="">Password</label>
									<input value="1234" type="password" className="form-control" type="text" />

									<div style={{marginTop: 10}} className="btn-group" role="group" aria-label="Basic example">
										<button onClick={this.handleSubmit} value="Home" type="button" className="btn btn-success">Login</button>
										<button type="button" className="btn btn-light">Sign In</button>
									</div>

									<div id="forgot" style={{marginTop: 20}}><a href='#'> Forgot Password  |  Forgot Username</a></div>
								</div>
							</form>
						</div>
					</div>
	);
}
	
	handleSubmit(e){
		this.setState({handleDisplay: true, userDisplay: 'block'})
	}
	
  render() {
	  const style = this.state.handleDisplay ? {display: 'none'} : {};
	  const styleUser = this.state.handleDisplay ? {display:'block'}: {display: 'none'};
    return (
		<div>
			<Frame2 userDisplay={this.state.userDisplay}/>
			<div className="home" style={style}>
			{this.logVar}
			</div>
		<div style={styleUser}>
		<User />
		</div>
		</div>
    );
  }
}

export default Home;