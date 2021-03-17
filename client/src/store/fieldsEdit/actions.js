import axios from 'axios';
// import router from '../../router';

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
