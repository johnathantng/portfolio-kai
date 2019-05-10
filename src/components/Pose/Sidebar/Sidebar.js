import React from 'react';
import posed from 'react-pose';
import './Sidebar.css';

const Parent = posed.ul({
	visible: { 
		x: '10%',
		beforeChildren: true,
		staggerChildren: 100
	},
	hidden: { 
		x: '100%', 
		afterChildren: true
	}
})

const Child = posed.li({
	visible: { y: 0, opacity: 1 },
	hidden: { y: 50, opacity: 0 }
})

const Sidebar = ({ isVisible, items, onRouteChange, buttonClick }) => {
	return (
		<Parent 
			className='navbar-container'
			pose={ isVisible ? 'visible' : 'hidden' }>
			{ items.map((items, i) => {
					return (
						<Child 
							className='navbar-list' 
							key={i} 
							onClick={() => {
									onRouteChange(`${items}`); 
									buttonClick(); }} 
						>
							<p>{items}</p>
						</Child>
					);
				})
			}
		</Parent>
	);
}

export default Sidebar;