import * as actions from './types'
import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL


export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            }
        };
        const body = JSON.stringify({
            token: localStorage.getItem('access')
        });
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config);
            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: actions.AUTHENTICATED_SUCCESS
                })
            } else {
                dispatch({
                    type: actions.AUTHENTICATED_FAILED
                })
            }

        } catch (err) {
            dispatch({
                type: actions.AUTHENTICATED_FAILED
            })
        }
    } else {
        dispatch({
            type: actions.AUTHENTICATED_FAILED
        })
    }
}

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };


        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config)
            dispatch({
                type: actions.USER_LOADED_SUCCESS,
                payload: res.data
            });

        } catch (err) {
            dispatch({
                type: actions.USER_LOADED_FAILED
            })
        }
    } else {
        dispatch({
            type: actions.USER_LOADED_FAILED
        });
    }

};


export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    };

    const body = JSON.stringify({
        email,
        password
    })

    try {
        const res = await axios.post(`${api_url}/auth/jwt/create/`, body, config)
        dispatch({
            type: actions.LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(load_user());

    } catch (err) {
        dispatch({
            type: actions.LOGIN_FAILED
        })
    }
};

export const rest_password = (email) => async dispatch => {
    const config = {
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        }
    };
    const body = JSON.stringify({
        email
    })

    try {
        await axios.post(`${api_url}/auth/users/reset_password/`, body, config);

        dispatch({
            type:actions.PASSWORD_REST_SUCCESS
        });

    }catch (err){
        dispatch({
            type: actions.PASSWORD_REST_FAIL
        })
    }

};

export const rest_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        }
    };

    const body = JSON.stringify({
        uid,
        token,
        new_password,
        re_new_password
    })

    try {
        await axios.post(`${api_url}/auth/users/rest_password_confirm/`, body, config);

        dispatch({
            type:actions.PASSWORD_REST_CONFIRM_SUCCESS
        });

    }catch (err){
        dispatch({
            type: actions.PASSWORD_REST_CONFIRM_FAIL
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: actions.LOGOUT
    })
}
