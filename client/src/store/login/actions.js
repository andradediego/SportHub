import axios from 'axios';
import router from '../../router'

export const onLogin = async ({commit}, payload) => {
	try {
		const result = await axios.post('http://localhost:3000/api/login', {
			email: payload.email,
			password: payload.password
		});
		
		if (result) {
			commit('setIsLoggedIn', true);
			router.push('/profile');
		}
	} catch (error) {
		console.log(error);
	}
}