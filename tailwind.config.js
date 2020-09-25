module.exports = {
	purge: ['./src/*.vue', './src/views/*.vue', './src/views/**/*.vue', './src/components/*.vue', './src/components/**/*.vue'],
	target: 'relaxed',
	prefix: '',
	important: false,
	separator: ':',
	theme: {},
	corePlugins: {},
	plugins: [],
	future: {
		removeDeprecatedGapUtilities: true,
	},
};
