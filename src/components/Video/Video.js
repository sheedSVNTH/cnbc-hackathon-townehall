import React, { Component } from 'react';

class Video extends Component {

  render() {
    return (
      <div className="video">
		<div className="user-row" id="search-container">
				<input type="text" name="search" placeholder="Search.." />
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

			</div>
		</div>		


	</div>
    );
  }
}

export default Video;
