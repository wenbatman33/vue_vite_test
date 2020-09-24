import path from 'path';

module.exports = {
	// resolve: {
	// 	alias: {
	// 		'/@/': path.resolve(__dirname, './gfhjkl'),
	// 	},
	// },
	alias: { '/@/': require('path').resolve(__dirname, 'src') },
};
