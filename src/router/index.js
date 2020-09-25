import { createWebHistory, createRouter } from 'vue-router';
// import Home from '/@/views/Home.vue';
// import About from '/@/views/About.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		// component: Home,
		component: () => import(/* webpackChunkName: "Home" */ '/@/views/Home.vue'),
	},
	{
		path: '/about',
		name: 'About',
		// component: About,
		component: () => import(/* webpackChunkName: "About" */ '/@/views/About.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
