import axios from 'axios'
import {addFile, deleteFileAction,  setFiles, setNews, addNews, addServices, setServices, setTopEmp} from "../reducers/fileReducer";
import {setUsers} from '../reducers/allusersReducer';
import {API_URL} from "../config";
 

export function getFiles(dirId, sort) {
    return async dispatch => {
        try {
            let url = `${API_URL}api/files`

            if (dirId) {
                url = `${API_URL}api/files?parent=${dirId}`
            }
            if (sort) {
                url = `${API_URL}api/files?sort=${sort}`
            }
            if (dirId && sort) {
                url = `${API_URL}api/files?parent=${dirId}&sort=${sort}`
            }
            const response = await axios.get(url, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setFiles(response.data))
        } catch (e) {
            alert(e.response.data.message)
        } 
    }
}

export function getUsers() {
    return async dispatch => {
        try {
            let url = `${API_URL}api/files/allusers`
            const response = await axios.get(url, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setUsers(response.data))
        } catch (e) {
            alert(e.response.data.message)
        } 
    }
}

export function getTopEmployee() {
    return async dispatch => {
        try {
            let url = `${API_URL}api/files/topemployee`
            const response = await axios.get(url, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setTopEmp(response.data))
        } catch (e) {
            alert(e.response.data.message)
        } 
    }
}

export const setStatus  =  (fullname, status) => {
    return async dispatch => {
        try {
            console.log(fullname, status)
            const response = await axios.post(`${API_URL}api/files/alluserstatus`, {
                fullname, status
            }
            , {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUsers())
            alert(response.data.message)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function addingNews (title, date, content)  {
    return async dispatch => {
        try {
            console.log(title, date, content)
            const response = await axios.post(`${API_URL}api/files/addnews`, {
                title,
                date,
                content
            }, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(addNews(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function getNews() {
    return async dispatch => {
        try {
            let url = `${API_URL}api/files/allnews`
            const response = await axios.get(url, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setNews(response.data))
        } catch (e) {
            alert(e.response.data.message)
        } 
    }
}

export const deleteNews = (id) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/files/allnews?id=${id}`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setNews())
            alert(response.data.message)
        } catch (e) {
            console.log(e)
        }
    }
}



export const addingServices = (name, phone, email, price, image) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/files/services`, {
                name,
                phone,
                email,
                price,
                image
            }, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(addServices(response.data))
        } catch(e) {
            console.log(e)
        }
    }
}

export function getServices () {
    return async dispatch => {
        try {
            let url = `${API_URL}api/files/services`
            const response = await axios.get(url, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setServices(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const deleteServices = (id) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/files/services?id=${id}`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setServices())
            alert(response.data.message)
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteUsers = (id) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/files/allusers?id=${id}`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUsers())
            alert(response.data.message)
        } catch (e) {
            console.log(e)
        }
    }
}

export function createDir(dirId, name) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/files`,{
                name,
                parent: dirId,
                type: 'dir'
            }, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(addFile(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function uploadFile(file, dirId) {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            if (dirId) {
                formData.append('parent', dirId)
            }
            const response = await axios.post(`${API_URL}api/files/upload`, formData, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
                onUploadProgress: progressEvent => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    console.log('total', totalLength)
                    if (totalLength) {
                        let progress = Math.round((progressEvent.loaded * 100) / totalLength)
                        console.log(progress)
                    }
                }
            });
            dispatch(addFile(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export async function downloadFile(file) {
    const response = await fetch(`${API_URL}api/files/download?id=${file._id}`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    if (response.status === 200) {
        const blob = await response.blob()
        const downloadUrl = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = file.name
        document.body.appendChild(link)
        link.click()
        link.remove()
    }
}

export function deleteFile(file) {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/files?id=${file._id}`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(deleteFileAction(file._id))
            alert(response.data.message)
        } catch (e) {
            alert('asdasdasdaasd')
            
        }
    }
}
