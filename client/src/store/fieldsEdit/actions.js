import axios from 'axios';
import router from '../../router';

export const loadEFields = async ({commit}) => {
	try {

		const result = await axios.post('http://localhost:3000/api/fieldsEdit/prodAdmin');
		if (result) {
			commit('set_efields', result.data.data);
		}
	} catch (error) {
		console.log(error);
	}
}	

export const registerFields = async ({commit}, payload) => {
	try {
	
		const result = await axios.post('http://localhost:3000/api/fieldsEdit/registerField', {
			name: payload.name,
			location: payload.email,
			description: payload.password,
			src: payload.src,
			inactive: payload.inactive
		});
		
		if (result) {
			commit('setIsAuthenticated', true);
			router.push('/');
			
		console.log("SUCESS");
		}
	} catch (error) {
		console.log(error);
		
		console.log("ERRORR");
	}
}


export const updateOrSavingFields = async ({commit}, payload) => {
	try {
	
		const result = await axios.post('http://localhost:3000/api/fieldsEdit/prodInsert', payload);
		
		if (result) {
			console.log(commit);
		}
	} catch (error) {
		console.log(error);
		
		console.log("ERRORR");
	}
}