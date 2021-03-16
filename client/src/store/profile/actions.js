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

export const onUpdateUserData = async ({dispatch, commit}, payload) => {
	try {
		
		const result = await axios.post('http://localhost:3000/api/profile/updateUserProfile', payload);
		
		if (result) {
			await dispatch('onGetUserData');
			commit('setIsEditMode', false);
		}
	} catch (error) {
		console.log(error);
	}
}

export const onGetSports = async ({commit}) => {
	try {
		
		const result = await axios.post('http://localhost:3000/api/profile/getSports');
		
		if (result) {
			commit('setSports', result.data.data);
		}
	} catch (error) {
		console.log(error);
	}
}

