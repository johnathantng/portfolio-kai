import React, { Component } from 'react';
import './App.css';

//PAGES IMPORTS
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';

const initialRoute = {
	route: 'home'
}

class App extends Component {
		constructor(props){
		super(props);
		this.state = initialRoute;
	}

	onRouteChange = (route) => {
		this.setState({ route: route });
	}

	render() {
		const { route } = this.state;
		return(
			<div>
				<Navigation onRouteChange={ this.onRouteChange } />
				{route === 'home'
					? <Home onRouteChange={ this.onRouteChange } /> 
					: (
							route === 'about me'
							? <About />
							: <Contact />
						)
				}
			</div>
		);
	}
}

export default App;