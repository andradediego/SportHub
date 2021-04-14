export const setIsAuthenticated = (state, payload) => {	
	state.loginState.isAuthenticated = payload;
}

export const setIsAdmin = (state, payload) => {	
	state.loginState.isAdmin = payload;
}