import axios from 'axios';
// import router from '../../router';

export const loadBookingFields = async ({commit}) => {	
	try {
		const result = await axios.post('http://localhost:3000/api/bookingField/bookingField');		
		if (result) {
			commit('booking_fields', result.data.data);
		}
	} catch (error) {
		console.log(error);
	}
}	

