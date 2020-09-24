<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<p>{{ count }}</p>
	<p>
		<button @click="handleDecrement()">减少</button> <br />
		<button @click="handleIncrement()">添加</button>
	</p>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
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
