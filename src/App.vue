<template lang="pug">
div
	p {{ count }}
	About
	p
		button(@click='handleDecrement()') 减少
		br
		button(@click='handleIncrement()') 添加
	#nav
		router-link(to='/') Home
		span  |
		router-link(to='/about') About
	router-view
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import About from '/@/views/About.vue';

export default {
	components: {
		About,
	},
	setup() {
		const store = useStore();
		const count = computed(() => store.state.count);

		function handleIncrement() {
			store.commit('increment');
		}
		function handleDecrement() {
			store.commit('decrement');
		}

		return {
			count,
			handleIncrement,
			handleDecrement,
		};
	},
};
</script>
