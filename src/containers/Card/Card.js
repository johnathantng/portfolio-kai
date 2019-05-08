import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
		render(){
		const { cardStyle, cardImage, visibility } = this.props;
		return(
			<div className='card-container' style={cardStyle}>
					<img style={ visibility }
						className='card-image'
						alt='card-content' 
						src={ cardImage } 
					/>
			</div>
		);
	}
}

export default Card;