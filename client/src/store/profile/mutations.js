export const setProfileDate = (state, payload) => {	
	state.profileState.userProfile = payload;
}

export const setIsEditMode = (state, payload) => {
	state.profileState.isEditMode = payload;
}

export const setSports = (state, payload) => {
	state.profileState.sports = payload;
}

export const setIsLoadingProfile = (state, payload) => {
	state.profileState.isLoadingProfile = payload;
}

export const setFindUser = (state, payload) => {
	state.profileState.findUser = [...payload];
}

export const updateFindUser = (state, payload) => {	
	const index = state.profileState.findUser.findIndex((item) => {		
		return item.id == payload.id
	});
	
	if(index >= 0) state.profileState.findUser[index] = payload;
}

export const setUserSearchProfile = (state, payload) => {
	state.profileState.userSearchProfile = {...payload};
}

export const setUserFriends = (state, payload) => {
	state.profileState.userFriends = [...payload];
}

export const resetStore = (state) => {
	debugger;
	state.profileState = {	
		userProfile: {
			name: '',
			about: '',
			sports: []		
		},
		sports: [],
		findUser: [],
		userSearchProfile: {
			name: '',
			about: '',
			sports: []
		},
		userFriends: [],
		isLoadingProfile: false,
		isEditMode: false
	};

	state.loginState = {
		isAuthenticated: false,
		isAdmin: false,
		user: {}
	};

	state.eFieldState = {
		efieldGetter: false,
		fields: []
	};
	
	state.fieldState = {
		fieldGetter: false,
		fields: []
	}
	
	
}