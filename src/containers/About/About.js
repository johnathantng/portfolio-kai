import React, { Component } from 'react';
import './About.css';

//IMAGE IMPORTS
import Kai from '../../images/about/kaiselfie.png';

//POSE IMPORTS
import SlideUp from '../../components/Pose/SlideUp/SlideUp';
import SlideDown from '../../components/Pose/SlideDown/SlideDown';
import Pose from '../../components/Pose/Pose';

class About extends Component {
	constructor(props){
		super(props);
		this.state = {
			isMounted: false,
			isHovered: false
		}
	}

	componentDidMount() {
		this.setState({ isMounted: !this.state.isMounted })
	}

	hoverHandler = () => {
		this.setState({ isHovered: !this.state.isHovered });
	}

	unhoverHandler = () => {
		this.setState({ isHovered: !this.state.isHovered });
	}

	render() {
		const { isMounted, isHovered } = this.state;
		return(
			<div className='about-me-container'>
				<SlideDown
					className='left-half'
					pose={ isMounted ? 'final' : 'init' }
				>
					<Pose 
						className='portfolio-image-wrapper'
						onMouseOver={ this.hoverHandler }
						onMouseOut={ this.unhoverHandler }
						pose={ isHovered ? 'enlarge' : 'init' }
					>
						<img className='portfolio-image' alt='kai-cao' src={ Kai } />
					</Pose>
				</SlideDown>
				<SlideUp
					className='right-half'
					pose={ isMounted ? 'final' : 'init' }
				>
					<div className='information-container'>
						<h2 id='information-heading'>nice to meet you!</h2>
						<p id='information-text'>Hi, I’m Kai. I’m an industrial designer. 
						I have studied at RISD, and I love creating experiences for people. 
						I also enjoy illustrating, designing toys, soft goods, and storytelling. 
						<br/><br/>
						other interests also include ceramics, UI/UX design, fashion, 
						and exploring contemporary architectural spaces as well as interior design spaces.</p>
					</div>
				</SlideUp>
			</div>
		);
	}
}

export default About;