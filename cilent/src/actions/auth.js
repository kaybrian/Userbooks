import { json } from 'react-router-dom';
import * as actions from './types'
import axios from 'axios';

export const load_user = () => async dispatch => {
    if(localStorage.getItem('access')){
        const config = {
            headers: {
                'content-type':'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`,
                'Accept':'application/json'
            }
        };


        try{
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config)
            dispatch({
                type:actions.USER_LOADED_SUCCESS,
                payload: res.data
            });

        } catch (err){
            dispatch({
                type:actions.USER_LOADED_FAILED
            })
        }
    }else{
        dispatch({
            type:actions.USER_LOADED_FAILED
        });
    }

};


export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'content-type':'application/json'
        }
    };

    const body = JSON.stringify({
        email,
        password
    })

    try{
        const res = await axios.post(`http://localhost:8000/auth/jwt/create/`, body, config)
        dispatch({
            type:actions.LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(load_user());

    } catch (err){
        dispatch({
            type:actions.LOGIN_FAILED
        })
    }
};


