import React, { Component } from 'react';
import './About.css';

//POSE IMPORTS
import SlideUp from '../../components/Pose/SlideUp/SlideUp';
import SlideDown from '../../components/Pose/SlideDown/SlideDown';

class About extends Component {
	constructor(props){
		super(props);
		this.state = {
			isMounted: false
		}
	}

	componentDidMount() {
		this.setState({ isMounted: !this.state.isMounted })
	}

	render() {
		const { isMounted } = this.state;
		return(
			<div className='about-me-container'>
				<SlideDown
					className='left-half'
					pose={ isMounted ? 'final' : 'init' }
				>
					<img className='portfolio-image' alt='kai-cao' src='' />
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