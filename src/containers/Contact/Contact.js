import React, { Component } from 'react';
import './Contact.css';

//PAGE IMPORTS
import Form from '../Form/Form.js';

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
						<img 
							id='social-icons' 
							style={{ cursor: 'pointer' }}
							alt='linked-in-icon' 
							src={ LinkedIn } 
							onClick={() => window.open('https://www.linkedin.com/in/kai-c-790520185/') }
						/>
					</div>
				</SlideUp>
				<SlideDown
					className='contact-right-half'
					pose={ isMounted ? 'final' : 'init' }
				>
					<div className='form-container'>
						<p className='form-heading'>help me, help you</p>
						<Form />
					</div>
				</SlideDown>
			</div>
		);
	}
}

export default Contact;