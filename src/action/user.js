import axios from 'axios'
import {setUser} from "../reducers/userReducer";
import {setUsers} from "../reducers/allusersReducer";
import {API_URL} from "../config";
import { setNews } from '../reducers/fileReducer';

export const registration = async (email, password, username) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/registration`, {
            email,
            password,
            username
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login =  (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}

export const uploadAvatar =  (file) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            const response = await axios.post(`${API_URL}api/files/avatar`, formData,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}
export const profile =  (fullname, phone, region, city, street, factura) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/files/profile`, {
                fullname,
                phone,
                region,
                city,
                street,
                factura
            }, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const emprofile =  (fullname, phone, service) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/files/emprofile`, {
                fullname,
                phone,
                service
            }, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}



export const deleteAvatar = () => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/files/avatar`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}


