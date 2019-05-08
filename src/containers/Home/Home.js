import React, { Component } from 'react';
import './Home.css';

//COMPONENTS IMPORTS
import Card from '../Card/Card';

//IMAGE IMPORTS
import BoxOne from '../../images/home/about-me-glass.png';
import BoxTwo from '../../images/home/kai-column.png';
import BoxThree from '../../images/home/box-three.png';
import BoxFive from '../../images/home/welcome.png';
import BoxSeven from '../../images/home/decor-black.png';
import BoxEight from '../../images/home/my-work.png';
import BoxNine from '../../images/home/decor-blue.png';
import BoxTen from '../../images/home/smiley.png';
import BoxEleven from '../../images/home/connect.png';
import BoxTwelve from '../../images/home/enjoy.png';

class Home extends Component {
	render() {
		return(
			<div className='home-container'>
				<div className='home-row'>
					<Card 
						cardStyle={{ background: '#C2C8DE', flex: 1, alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} 
						cardImage={ BoxOne }
					/>
					<Card 
						cardStyle={{ background: 'white' }}
						cardImage={ BoxTwo }
					/>
					<Card 
						cardStyle={{ background: '#C4ADBF', flex: 1, alignItems: 'center', justifyContent: 'center' }}
						cardImage={ BoxThree }
					/>
					<Card cardStyle={{ background: '#C2C8DE' }}
						cardImage={ null }
						visibility={{ visibility: 'hidden' }}
					/>
				</div>
				<div className='home-row'>
					<Card 
						cardStyle={{ background: '#AF9C98', flex: 1, justifyContent: 'flex-end' }}
						cardImage={ BoxFive }
					/>
					<Card 
						cardStyle={{ background: '#352E30' }}
						cardImage={ null }
						visibility={{ visibility: 'hidden' }}
					/>
					<Card 
						cardStyle={{ backgroundImage: 'url(' + BoxSeven + ')', backgroundSize: 'cover' }}
						cardImage={ null }
						visibility={{ visibility: 'hidden' }}
					/>
					<Card 
						cardStyle={{background: '#B8ADCF', flex: 1, alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
						cardImage={ BoxEight }
					/>
				</div>
				<div className='home-row'>
					<Card 
						cardStyle={{ backgroundImage: 'url(' + BoxNine + ')', backgroundSize: 'cover' }}
						cardImage={ null }
						visibility={{ visibility: 'hidden' }}
					/> 
					<Card 
						cardStyle={{ background: '#B8ADCF', flex: 1, alignItems: 'center', justifyContent: 'center' }} 
						cardImage={ BoxTen }
					/>
					<Card 
						cardStyle={{ background: 'white', flex: 1, alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} 
						cardImage={ BoxEleven }
					/>
					<Card 
						cardStyle={{ background: '#352E30', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}
						cardImage={ BoxTwelve }
					/>
				</div>
			</div>
		);
	}
}

export default Home;