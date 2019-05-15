import posed from 'react-pose';

const Pose = posed.div({
	horOut: { x: '100%' },
	init: { x: 0, y: 0, scale: 1 },
	gone: { scale: 0 },
	hidden: { scale: 0.1 },
	invisible: { opacity: 0 },
	visible: { opacity: 1 },
	pop: {
		scale: 0,
		transition: ({ from, to }) => ({
			type: 'keyframes',
			values: [0, 1],
			duration: 100,
		})
	},
	enlarge: {
		scale: 0,
		transition: ({ from, to }) => ({
			type: 'keyframes',
			values: [1, 1.5],
			duration: 200,
		})
	},
	sway: {
		x: 0,
		transition: ({ from, to }) => ({
			type: 'keyframes',
			values: [0, 10, -10, 0],
			duration: 5000,
			loop: Infinity
		})
	},
	scroll: {
		y: 0,
		transition: ({ from, to }) => ({
			type: 'keyframes',
			values: [0, -150],
		})
	},
	slide: {
		y: 0,
		transition: ({ from, to }) => ({
			type: 'keyframes',
			values:[0, -150, 0],
			duration: 100000,
			loop: Infinity
		})
	}

});
export default Pose;