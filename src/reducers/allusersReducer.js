const SET_USERS = 'SET_USERS'
const UPDATE_USERS_STATUS = "UPDATE_USERS_STATUS"

const defaultState = {
    users: []
}

export default function usersReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USERS: return {...state, users: action.payload}
        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, payload: users})