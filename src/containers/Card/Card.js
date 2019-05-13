import React, { Component } from 'react';
import './Card.css';

//POSE IMPORT
import Pose from '../../components/Pose/Pose';

class Card extends Component {
		constructor(props){
			super(props);
			this.state = {
				isMounted: false,
				isHovered: false
			};
		}

		mouseOver = () => {
			this.setState({ isHovered: !this.state.isHovered });
		}

		mouseOut = () => {
			this.setState({ isHovered: !this.state.isHovered });
		}

		clickHandler(){
			const { behanceLink } = this.props;
			const behanceHandler = function(){
				if (behanceLink === ''){
					} else {
						window.open(`${behanceLink}`);
					}
				}
			if (this.props.stateRoute === 'home'){
				this.props.onRouteChange(this.props.route);
			} else {
				behanceHandler();
			}
		}

		componentDidMount(){
			this.setState({ isMounted: !this.state.isMounted });
		}

		render(){
		const { cardStyle, cardImage, visibility, poseAnimationInit, poseAnimationFinal } = this.props;
		return(
			<Pose
				className='card-container' 
				style={cardStyle} 
				pose={ this.state.isMounted ? 'init' : 'horOut' }
				onMouseOver={ this.mouseOver }
				onMouseOut={ this.mouseOut }
				onClick={ () => this.clickHandler() }
			>
				<Pose
					style={{ pointerEvents: 'none' }}
					className='animation-container'
					pose={ this.state.isHovered ? poseAnimationFinal : poseAnimationInit } 
				>
					<img style={ visibility }
						className='card-image'
						alt='card-content' 
						src={ cardImage } 
					/>
				</Pose>
			</Pose>
		);
	}
}

export default Card;