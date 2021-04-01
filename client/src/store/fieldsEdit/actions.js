import axios from 'axios';

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

export const updateOrSavingFields = async ({dispatch, commit}, payload) => {
	try {
	
		const result = await axios.post('http://localhost:3000/api/fieldsEdit/prodInsert', payload);
		
		if (result) {
			await dispatch('loadEFields');
			commit;

		}
	} catch (error) {
		error;
	}
}