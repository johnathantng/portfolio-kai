import React, { Component } from 'react';
import './About.css';

//IMAGE IMPORTS
import Kai from '../../images/about/kaiselfie.png';

//POSE IMPORTS
import SlideUp from '../../components/Pose/SlideUp/SlideUp';
import Pose from '../../components/Pose/Pose';

class About extends Component {
	constructor(props){
		super(props);
		this.state = {
			isMounted: false,
			popEnter: false
		}
	}

	componentDidMount() {
		this.setState({ isMounted: !this.state.isMounted })
		setTimeout(() => {
			this.setState({ popEnter: !this.state.popEnter })
		}, 1000);
	}

	render() {
		const { isMounted, popEnter } = this.state;
		return(
			<div className='about-me-container'>
				<Pose
					className='left-half'
					pose={ popEnter ? 'pop' : 'gone'}
				>
					<img className='portfolio-image' alt='kai-cao' src={ Kai } />
				</Pose>
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