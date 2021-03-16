export const userProfile = state => {
	return { ...state.profileState.userProfile };
}

export const isEditMode = state => {
	return state.profileState.isEditMode;
}

export const sportsData = state => {
	return state.profileState.sports;
}