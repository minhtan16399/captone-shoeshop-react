import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOKEN, USER_LOGIN, http } from '../../utils/config';
import { history } from '../../App';

let userLoginDefault = {
    email: '',
    accessToken: ''
};

if (localStorage.getItem(USER_LOGIN)) {
    userLoginDefault = JSON.parse(localStorage.getItem(USER_LOGIN))
};

const initialState = {
    userProfile: {

    },
    userLogin: userLoginDefault
};

const UserReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {

        loginAction: (state, action) => {
            state.userLogin = action.payload
        },

        getProfileAction: (state, action) => {
            state.userProfile = action.payload
        }
    }
});

export const { loginAction, getProfileAction } = UserReducer.actions;

export default UserReducer.reducer;

//-------------------action thunk-------------------
export const loginApiAction = (userLogin) => {
    return async (dispatch) => {
        try {
            const res = await http.post('/Users/signin', userLogin);
            localStorage.setItem(TOKEN, res.data.content.accessToken);
            localStorage.setItem(USER_LOGIN, JSON.stringify(res.data.content));
            const action = loginAction(res.data.content);
            dispatch(action);
        } catch (err) {
            alert(err.response.data.message);
            history.push('/login')
        }
    }
};

export const loginFacebookApiAction = (userLogin) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                url: 'https://shop.cyberlearn.vn/api/Users/facebooklogin',
                method: 'POST',
                data: {
                    "facebookToken": userLogin
                }
            });
            localStorage.setItem(TOKEN, res.data.content.accessToken);
            localStorage.setItem(USER_LOGIN, JSON.stringify(res.data.content));
            const action = loginAction(res.data.content);
            dispatch(action);
        } catch (err) {
            alert(err.response.data.message);
            history.push('/login')
        }
    }
};

export const getProfileApiAction = () => {
    return async (dispatch) => {
        try {
            const res = await http.post('/Users/getProfile');
            const action = getProfileAction(res.data.content);
            dispatch(action)
        } catch (err) {

        }
    }
};
