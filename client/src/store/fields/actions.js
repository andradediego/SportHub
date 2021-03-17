import axios from 'axios';
// import router from '../../router';

export const loadFields = async ({commit}) => {
	try {
		const result = await axios.post('http://localhost:3000/api/fields/product');		
		if (result) {
			commit('set_fields', result.data.data);
		}
	} catch (error) {
		console.log(error);
	}
}	

