import React, { Component } from 'react';
import './Navigation.css';

//IMAGES IMPORT
import MenuIcon from '../../images/nav/hamburger.png';
import HamburgerBite from '../../images/nav/hamburger-bite.png';
import BackArrow from '../../images/nav/arrowbrown.png';

//COMPONENTS IMPORT
import Sidebar from '../../components/Pose/Sidebar/Sidebar';

class Navigation extends Component {
	constructor(props){
			super(props);
			this.state = {
				isVisible: false,
				items: ['home', 'about me', 'my work', 'let\'s get connected!'],
				hamburgerEaten: false
			};
		}	

	buttonClick = () => {
		const hamburgerHandler = () => {
			if (this.state.hamburgerEaten === true){
					setTimeout(()=>{document.getElementById('hamburger').src = `${ MenuIcon }`}, 500);
				} else {
					document.getElementById('hamburger').src = `${ HamburgerBite }`
				}
			}
		this.setState({ isVisible: !this.state.isVisible });
		this.setState({ hamburgerEaten: !this.state.hamburgerEaten });
		hamburgerHandler();
	}

	render() {
		const { onRouteChange } = this.props;
		return(
			<div>
					<img
						className='back-arrow'
						onClick={ () => onRouteChange('home') }
						alt='back-arrow'
						src={ BackArrow }
					/>
					<img 
						id='hamburger'
						onClick={ this.buttonClick }
						className='hamburger-icon' 
						alt='hamburger' 
						src={ MenuIcon } 
					/>
				<Sidebar 
					style={{ overflowX: 'hidden' }}
					items={ this.state.items } 
					isVisible={ this.state.isVisible }
					onRouteChange={ onRouteChange }
					buttonClick={ this.buttonClick }
				/>
			</div>
		);
	}
}

export default Navigation;