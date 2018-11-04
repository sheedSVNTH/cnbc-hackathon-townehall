import React, { Component } from 'react';

import './User.css';
import photo1 from '../../media/obama-heart.jpg'
import photo2 from '../../media/trump-img.jpg'
import photo3 from '../../media/peace.gif'

class User extends Component {

  render() {
	  const data =[{"name":"PoliticalPatty", "avatar": photo1, "comment": "If only Obama could run again :("},{"name":"StubbornSuzie", "avatar": photo2, "comment": "Trump is our President! Deal with it!!"}, {"name":"FriendlyFred", "avatar": photo3, "comment": "I think we should be happy we are able to vote!"}];
	  
	  const listItems = data.map((d) => <li key={d.name}><div className="comment"><img src={d.avatar} alt="photo1" /> <p>{d.name}</p> <p>: {d.comment}</p></div></li>);
	  
    return (
      <div className="user">
		<div className="user-row" id="search-container">

				<input type="text" name="search" placeholder="Search.." />
		</div>
		
		<div className="user-row" id="article-container">
			<div className="card">
		<h4 id="trending-tag">Trending from <em>Your Favorites</em></h4>
				<div id="article">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/Lgut9_x44ho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<h5 id="article-title">Florida midterm races looking tight and contentious</h5>
				</div>
				<div id="article">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/FHhix0Z_5SU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<h5 id="article-title">Andrew Gillum: I Will Win Because Floridians Trust Me</h5>
				</div>
				<div id="article">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/zSZa17OgU9M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<h5 id="article-title">How to vote in florida 2018</h5>
				</div>
			</div>
		</div>
		
		<div className="user-row" id="video-container">
			<div className="card">
				<div id="user-video">
					<iframe width="560" height="315" src="https://embed.wirewax.com/8117490/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<h4>Obama campaigns for Andrew Gillum and Bill Nelson in Florida</h4>
				</div>
			</div>
		</div>
		
		<div className="user-row" id="feed-container">
			<div className="card">
		<h4 id="trending-tag">Active User Engagement</h4>
		
				<input id="comment-input" type="text" name="search" placeholder="EnterComment.." />
											<div>{listItems}</div>
			
			</div>
		</div>

	</div>
    );
  }
}

export default User;
