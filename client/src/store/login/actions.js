import axios from 'axios';
import router from '../../router';

export const onLogin = async ({commit}, payload) => {
	try {
		const result = await axios.post('http://localhost:3000/api/login/login', {
			email: payload.email,
			password: payload.password
		});
		
		if (result) {
			commit('setIsAuthenticated', true);
			router.push('/');
		}
	} catch (error) {
		console.log(error);
	}
}

export const onLogout = async ({commit}) => {
	try {
		const result = await axios.post('http://localhost:3000/api/login/logout');
		
		if (result) {
			commit('setIsAuthenticated', false);		
		}
	} catch (error) {
		console.log(error);
	}
}

export const checkAuthenticationStatus = async ({commit}) => {
	try {
		const result = await axios.post('http://localhost:3000/api/login/checkAuthenticationStatus');
		
		if (result) {
			commit('setIsAuthenticated', true);			
		}
	} catch (error) {
		console.log(error);
	}
}