import React, {Component} from 'react';
import './Locks.css';
import Hand from './Hand';

class Locks extends Component {
	static defaultProps ={
		hand : [
			{name: 'Grand Dragon - x60', desc: 'A,2,...,Q,K of the same suit'},
			{name: 'Dragon - x50', desc: 'A,2,...,Q,K of different suit'},
			{name: 'Twelve Royals - x40', desc: 'All cards are J, Q, K, A only'},
			{name: 'Three Straight Flushes - x35', desc: 'Straight Flush in all 3 Hands'},
			{name: 'Three 4 Of A Kind - x35', desc: '3 sets of Four of a Kind'},
			{name: 'All Small - x30', desc: 'All cards from 2 to 8 only'},
			{name: 'All Big - x30', desc: 'All card from 8 to A only'},
			{name: 'Same Colour - x25', desc: 'All cards are same colour, black/red'},
			{name: 'Four Triples - x25', desc: '4 sets of Triple'},
			{name: 'Five Pair Plus Triple - x20', desc: '5 sets of Pairs and a Triple'},
			{name: 'Six Pairs - x15', desc: '5 sets of Pairs'},
			{name: 'Three Straights - x15', desc: 'Straights in all 3 Hands'},
			{name: 'Three Flushes - x10', desc: '3 rows of Flushes'},
			{name: 'Trio Top - x10', desc: 'Triple Top'},
			{name: 'One Eye Dragon - x10', desc: 'One J or K with only one eye'},
			{name: 'No people - x10', desc: 'All card from 2 to 9 only'},
			{name: '4 Of A Kind - x6', desc: '1 set of Four of a kind'},
			{name: 'Straight Flush - x6', desc: '1 set of Straight Flush'}
		]
	};
	
	render(){
		return (
			<div className="Locks">
				<div className="Locks-container">
				{this.props.hand.map((h) => (
					<Hand name={h.name} desc={h.desc} />
				))} 
				</div>
				
			</div>
		
		)
	}
}
	

export default Locks;