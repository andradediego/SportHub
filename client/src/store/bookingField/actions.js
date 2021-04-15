import axios from 'axios';
//import router from '../../router';

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

export const onBooking = async ({dispatch, commit}, payload) => {
	try {
	
		const result = await axios.post('http://localhost:3000/api/bookingField/onBooking', payload);
	
		if (result) {
			await dispatch('onBooking');
			commit;

		}
	} catch (error) {
		error;
	}
}