import React, {Component} from 'react';
import './Hand.css';

class Hand extends Component {
	render() {
		return(
			<div className="Hand">
				<p className="title">{this.props.name}</p>
				<p>{this.props.desc}</p>
				
			</div>
		)
	}
}

export default Hand;