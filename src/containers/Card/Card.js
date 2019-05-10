import React, { Component } from 'react';
import './Card.css';

//POSE IMPORT
import Pose from '../../components/Pose/Pose';

class Card extends Component {
		constructor(props){
			super(props);
			this.state = {
				isHovered: false
			};
		}

		mouseOver = () => {
			this.setState({ isHovered: !this.state.isHovered });
		}

		mouseOut = () => {
			this.setState({ isHovered: !this.state.isHovered });
		}

		render(){
		const { onRouteChange, route, cardStyle, cardImage, visibility, poseAnimationInit, poseAnimationFinal } = this.props;
		return(
			<div 
				className='card-container' 
				style={cardStyle} 
				onMouseOver={ this.mouseOver }
				onMouseOut={ this.mouseOut }
				onClick={() => onRouteChange(`${route}`)}
			>
				<Pose
					style={{pointerEvents: 'none'}}
					className='animation-container'
					pose={ this.state.isHovered ? poseAnimationFinal : poseAnimationInit } 
				>
					<img style={ visibility}
						className='card-image'
						alt='card-content' 
						src={ cardImage } 
					/>
				</Pose>
			</div>
		);
	}
}

export default Card;