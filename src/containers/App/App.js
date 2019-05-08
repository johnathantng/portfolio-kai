import React, { Component } from 'react';

//PAGES IMPORTS
import Home from '../Home/Home';

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
		return(
			<div>
				<Home />
			</div>
		);
	}
}

export default App;