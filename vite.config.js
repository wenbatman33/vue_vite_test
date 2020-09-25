import path from 'path';

module.exports = {
	port: 1111,
	alias: {
		'/@/': path.join(__dirname, '/src'),
	},
};
