import { createStore } from 'vuex';

const state = {
	count: 0,
};
const mutations = {
	increment(state) {
		state.count++;
	},
	decrement(state) {
		state.count--;
	},
};
const actions = {};

export default createStore({
	state,
	mutations,
	actions,
});
