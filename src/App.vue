<template lang="pug">
div.main.bg-blue-500
	p.title test {{ver}} {{buildTime}}
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
import { computed, onMounted } from 'vue';
import About from '/@/views/About.vue';

export default {
	components: {
		About,
	},
	data() {
		return {
			ver: import.meta.env.VITE_VER,
			buildTime: '',
		};
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
		onMounted(() => {
			setTimeout(() => {
				const script = document.createElement('script');
				script.innerHTML = 'console.log("%cVERSION:' + import.meta.env.VITE_VER + '", "color:#ff0000;font-size:14px;" );';
				document.head.appendChild(script);
			}, 1000);
		});
		return {
			count,
			handleIncrement,
			handleDecrement,
		};
	},
};
</script>
<style lang="scss" scoped>
.main {
	.title {
		font-size: 100px;
	}
}
</style>
