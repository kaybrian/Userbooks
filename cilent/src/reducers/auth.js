import * as actions from '../actions/types'



const initalState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
}


export default function (state = initalState, action) {
    const { type, payload } = action;

    switch (type) {
        case actions.AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated:true
            }
        case actions.LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            return {
                ...state,
                isAuthenticated:true,
                access:payload.access,
                refresh:payload.refresh
            }

        case actions.USER_LOADED_SUCCESS:
            return {
                ...state,
                user:payload
            }

        case actions.USER_LOADED_FAILED:
            return {
                ...state,
                user:null
            }
        case actions.AUTHENTICATED_FAILED:
            return{
                ...state,
                isAuthenticated:false
            }
        case actions.LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');return {
                ...state,
                access:null,
                refresh:null,
                isAuthenticated:false,
                user:null
            }


        case actions.LOGIN_FAILED:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access:null,
                refresh:null,
                isAuthenticated:false,
                user:null
            }
        default:
            return state
    }
}
