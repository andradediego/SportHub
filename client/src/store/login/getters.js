export const isAuthenticated = state => {
	return state.loginState.isAuthenticated;
}

export const isAdmin = state => {
	return state.loginState.isAdmin;
}