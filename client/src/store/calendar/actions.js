import axios from 'axios';
// import router from '../../router';

export const loadCalendar = async ({commit}) => {	
	try {
		const result = await axios.post('http://localhost:3000/api/calendar/getCalendar');		
		if (result) {
			console.log(result);
			commit('setCalendar', result.data.data);
		}
	} catch (error) {
		console.log(error);
	}
}	

