import axios from 'axios';
// import router from '../../router';

export const onGetUserData = async ({commit}) => {
	try {
		const result = await axios.post('http://localhost:3000/api/profile/getUserProfile');
		
		if (result) {
			commit('setProfileDate', result.data.data);
		}
	} catch (error) {
		console.log(error);
	}
}
