import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userName: localStorage.getItem("userName") || null,
    email: localStorage.getItem("email") || null,
    token: localStorage.getItem("token") || null,
    id: localStorage.getItem("id") || null,
    isAdmin: JSON.parse(localStorage.getItem("isAdmin")) || false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            localStorage.setItem("userName", action.payload.userName)
            localStorage.setItem("email", action.payload.email)
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("id", action.payload.id)
            localStorage.setItem("isAdmin", JSON.stringify(action.payload.isAdmin))

            state.userName = action.payload.userName,
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.isAdmin = action.payload.isAdmin
        },
        removeUser(state) {

            localStorage.removeItem("userName");
            localStorage.removeItem("email");
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            localStorage.removeItem("isAdmin");

            state.userName = null
            state.email = null;
            state.token = null;
            state.id = null;
            state.isAdmin = null;
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;