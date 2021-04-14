export const userProfile = state => {
	return { ...state.profileState.userProfile };
}

export const isEditMode = state => {
	return state.profileState.isEditMode;
}

export const sportsData = state => {
	return state.profileState.sports;
}

export const isLoadingProfile = state => {
	return state.profileState.isLoadingProfile;
}

export const findUser = state => {
	return state.profileState.findUser;
}

export const userSearchProfile = state => {
	return state.profileState.userSearchProfile;
}

export const userFriends = state => {
	return [...state.profileState.userFriends];
}