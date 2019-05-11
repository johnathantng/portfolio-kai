import React, { Component } from 'react';
import './Contact.css';

//IMAGE IMPORTS
import Letter from '../../images/contact/letter.png';
import LinkedIn from '../../images/contact/linkedin.png';
import Phone from '../../images/contact/phone.png';

//POSE IMPORTS
import SlideUp from '../../components/Pose/SlideUp/SlideUp';
import SlideDown from '../../components/Pose/SlideDown/SlideDown';

class Contact extends Component {
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
			<div className='contact-container'>
				<SlideUp
					className='contact-left-half'
					pose={ isMounted ? 'final' : 'init' }
				>
					<div className='social-media-container'>
						<img id='social-icons' alt='phone-icon' src={ Phone } />
						<img id='social-icons' alt='letter-icon' src={ Letter } />
						<img id='social-icons' alt='linked-in-icon' src={ LinkedIn } />
					</div>
				</SlideUp>
				<SlideDown
					className='contact-right-half'
					pose={ isMounted ? 'final' : 'init' }
				>
					<div className='form-container'>

					</div>
				</SlideDown>
			</div>
		);
	}
}

export default Contact;