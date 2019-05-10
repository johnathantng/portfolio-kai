import posed from 'react-pose';

const SlideDown = posed.div({
	init: {y: '-100%'},
	final: {y: '0%'}
})

export default SlideDown;