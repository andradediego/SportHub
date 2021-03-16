import axios from 'axios';
import router from '../../router';

export const loadFields = async ({commit}, payload) => {
	try {
		const result = await axios.post('http://localhost:3000/api/fields/product', {
            name: payload.Name,
            location: payload.Location,
            description: payload.Description,
            src: payload.src,
		});
		
		if (result) {
			commit('set_fields', true);
			router.push('/');
		}
	} catch (error) {
		console.log(error);
	}
}	

