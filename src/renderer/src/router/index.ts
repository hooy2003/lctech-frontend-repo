import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'home',
		component: (): object => import('@renderer/views/Home.vue')
	}
]

export default createRouter({
	history: createWebHashHistory(),
	routes
})
