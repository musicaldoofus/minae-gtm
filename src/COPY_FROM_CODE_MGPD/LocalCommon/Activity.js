import React from 'react';
import './Activity.css';

const Activity = (props) => (
	<div className="iframe-container">
		<iframe src={props.src}/>
	</div>
);

export default Activity;