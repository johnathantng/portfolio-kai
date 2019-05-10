import React, { Component } from 'react';
import './Navigation.css';

//IMAGES IMPORT
import MenuIcon from '../../images/nav/hamburger.png';

//COMPONENTS IMPORT
import Sidebar from '../../components/Pose/Sidebar/Sidebar';

class Navigation extends Component {
	constructor(props){
			super(props);
			this.state = {
				isVisible: false,
				items: ['home', 'about me', 'my work', 'let\'s get connected!']
			};
		}	

	buttonClick = () => {
		this.setState({ isVisible: !this.state.isVisible });
	}

	render() {
		const { onRouteChange } = this.props;
		return(
			<div>
				<img 
					onClick={ this.buttonClick }
					className='hamburger-icon' 
					alt='hamburger' 
					src={ MenuIcon } 
				/>
				<Sidebar 
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