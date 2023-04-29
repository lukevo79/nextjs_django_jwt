const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    register_success: false
}

const authReducer = (state = initialState, action: any) => {
    const { type, payload} = action;

    switch (type) {
        default:
            return state;
    }
}

export default authReducer;