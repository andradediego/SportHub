export const setProfileDate = (state, payload) => {	
	state.profileState.userProfile = payload;
}

export const setIsEditMode = (state, payload) => {
	state.profileState.isEditMode = payload;
}