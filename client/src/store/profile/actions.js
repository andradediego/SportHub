import axios from 'axios';
import router from '../../router';

export const onGetUserData = async ({commit, dispatch}) => {
	try {
		commit('setIsLoadingProfile', true);
		const result = await axios.post('http://localhost:3000/api/profile/getUserProfile');		
		
		if (result) {
			commit('setProfileDate', result.data.data);
			await dispatch('onGetUserFriends');
		}
		commit('setIsLoadingProfile', false);
	} catch (error) {
		console.log(error);
		commit('setIsLoadingProfile', false);
	}
}

export const onUpdateUserData = async ({dispatch, commit}, payload) => {
	try {
		commit('setIsLoadingProfile', true);
		const result = await axios.post('http://localhost:3000/api/profile/updateUserProfile', payload);
		
		if (result) {
			await dispatch('onGetUserData');
			commit('setIsEditMode', false);
		}
		commit('setIsLoadingProfile', false);
	} catch (error) {
		console.log(error);
		commit('setIsLoadingProfile', false);
	}
}

export const onGetSports = async ({commit}) => {
	try {
		commit('setIsLoadingProfile', true);
		const result = await axios.post('http://localhost:3000/api/profile/getSports');
		
		if (result) {
			commit('setSports', result.data.data);
			
		}
		commit('setIsLoadingProfile', false);
	} catch (error) {
		console.log(error);
		commit('setIsLoadingProfile', false);
	}
}

export const onFindUser = async ({commit}, payload) => {
	try {		
		commit('setIsLoadingProfile', true);
		const result = await axios.post('http://localhost:3000/api/profile/findUser', payload);
		
		if (result) {
			commit('setFindUser',  result.data.data);
			// console.log(result);
		}
		commit('setIsLoadingProfile', false);
	} catch (error) {
		console.log(error);
		commit('setIsLoadingProfile', false);
	}
}

export const onGetUserSearchedProfile = async ({commit}, payload) => {
	try {
		commit('setIsLoadingProfile', true);
		const result = await axios.post('http://localhost:3000/api/profile/getUserSearchedProfile', payload);		
		
		if (result) {
			commit('setUserSearchProfile', result.data.data);
		}
		commit('setIsLoadingProfile', false);
	} catch (error) {
		console.log(error);
		router.push('/profile');
		commit('setIsLoadingProfile', false);
	}
}

export const onResolveFriendRequest = async ({commit, dispatch}, payload) => {
	try {
		commit('setIsLoadingProfile', true);
		
		const result = await axios.post('http://localhost:3000/api/profile/resolveFriendRequest', payload);		
		
		if (result) {
			await dispatch('onGetUserData');
			await dispatch('onGetUserFriends');
		}
		commit('setIsLoadingProfile', false);
	} catch (error) {
		console.log(error);
		router.push('/profile');
		commit('setIsLoadingProfile', false);
	}
}


export const onGetUserFriends = async ({commit}) => {
	try {
		commit('setIsLoadingProfile', true);
		const result = await axios.post('http://localhost:3000/api/profile/getUserFriends');		
		
		if (result) {
			commit('setUserFriends', result.data.data);
		}
		commit('setIsLoadingProfile', false);
	} catch (error) {
		console.log(error);
		router.push('/profile');
		commit('setIsLoadingProfile', false);
	}
}

export const onRequestAddFriend = async ({commit, dispatch}, payload) => {
	try {
		commit('setIsLoadingProfile', true);
		const result = await axios.post('http://localhost:3000/api/profile/requestAddFriend', payload);		
		
		if (result) {
			commit('updateFindUser', result.data.data);
			await dispatch('onGetUserData');
		}
		commit('setIsLoadingProfile', false);
	} catch (error) {
		console.log(error);
		router.push('/profile');
		commit('setIsLoadingProfile', false);
	}
}


