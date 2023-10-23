
export default {
	state: {
		user: null,
		error: '',
		currentUser: '',
	},
	mutations: {
		changeCurrentUser(state, user) {
			state.currentUser = user
		},
		changeError(state) {
			state.error = 'error'
		},
		changeErrorN(state) {
			state.error = ''
		},
		changeUser(state, currentUser) {
			state.user = currentUser
		}
	},
	actions: {
		async registerUser({ commit }, currentUser) {
			this.commit('changeErrorN');
			const all = await fetch('https://chat-app-2c7bc-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
				method: 'GET'
			})
			const respAll = await all.json()
			for (const key in respAll) {
				if (Object.hasOwnProperty.call(respAll, key)) {
					const user = respAll[key];
					if (user.email === currentUser.email) return this.commit('changeError');
				}
			}
			const responce = await fetch('https://chat-app-2c7bc-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
				method: 'POST',
				body: JSON.stringify(currentUser)
			})
			const resp = await responce.json()
			this.commit('changeUser', resp);
		},
		async loginUser({ commit }, currentUser) {
			this.commit('changeErrorN');
			const resp = await fetch('https://chat-app-2c7bc-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
				method: 'GET'
			})
			const responce = await resp.json()
			for (const key in responce) {
				if (Object.hasOwnProperty.call(responce, key)) {
					const user = responce[key];
					if (user.email === currentUser.email && user.password === currentUser.password) return this.commit('changeUser', key);
				}
			}
			this.commit('changeError');
		},
		async createCurrentUser({ commit }, user) {
			await this.commit('changeCurrentUser', user)
		},
		async getCurrentUserInReload({ commit }) {
			if (this.getters.currentUser !== '') {
				return this.getters.currentUser
			} else if (localStorage.getItem('user')) {
				const resp = await fetch(`https://chat-app-2c7bc-default-rtdb.europe-west1.firebasedatabase.app/users/${localStorage.getItem('user')}.json`)
				const responce = await resp.json()
				await this.commit('changeCurrentUser', responce)
			}
		}
	},
	getters: {
		currentUser(state) {
			return state.currentUser
		},
		user(state) {
			return state.user
		},
		checkUser(state) {
			return state.user !== null
		},
		checkError(state) {
			return state.error
		}
	}
}
