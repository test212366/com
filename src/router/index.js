import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login,
		beforeEnter: () => {
			if (localStorage.getItem('user')) {
				router.push('/home')
			}
		}
	},
	{
		path: '/reg',
		name: 'Registraiton',
		component: () => import('../views/Registraiton.vue'),
		beforeEnter: () => {
			if (localStorage.getItem('user')) {
				router.push('/home')
			}
		}
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/Home.vue'),
		beforeEnter: () => {
			if (!localStorage.getItem('user')) {
				router.push('/')
			}
		}
	},
	{
		path: '/user',
		name: 'User',
		component: () => import('../views/User.vue'),
		beforeEnter: () => {
			if (!localStorage.getItem('user')) {
				router.push('/')
			}
		}
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
