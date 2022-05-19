const SET_FILES = "SET_FILES"
const SET_NEWS = "SET_NEWS"
const SET_SERVICES = "SET_SERVICE"
const SET_CURRENT_DIR = "SET_CURRENT_DIR"
const ADD_FILE = "ADD_FILE"
const ADD_NEWS = "ADD_NEWS"
const ADD_SERVICES = "ADD_SERVICE"
const DELETE_NEWS = "DELETE_NEWS"
const DELETE_SERVICES = "DELETE_SERVICE"
const SET_POPUP_DISPLAY = "SET_POPUP_DISPLAY"
const SET_NEWS_ADDING_POPUP_DISPLAY = "SET_NEWS_ADDING_POPUP_DISPLAY"
const SET_SERVICE_ADDING_POPUP_DISPLAY = "SET_SERVICE_ADDING_POPUP_DISPLAY"
const PUSH_TO_STACK = "PUSH_TO_STACK"
const DELETE_FILE = 'DELETE_FILE'
const SET_VIEW = 'SET_VIEW'
const SET_TOP_EMP = "SET_TOP_EMP"

const defaultState = {
    topemp: [],
    services: [],
    news: [],
    files: [],
    profile: [],
    currentDir: null,
    popupDisplay: 'none',
    newsAddingDisplay: 'none',
    serviceAddingDisplay: 'none',
    dirStack: [],
    view: 'list'
}

export default function fileReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_NEWS: return {...state, news: [...state.news, action.payload] }
        case ADD_SERVICES: return {...state, services: [...state.services, action.payload]}
        case SET_FILES: return {...state, files: action.payload}
        case SET_NEWS: return {...state, news: action.payload}
        case SET_SERVICES: return {...state, services: action.payload}
        case DELETE_NEWS: return {...state, news: action.payload}
        case DELETE_SERVICES: return {...state, services: action.payload}
        case SET_CURRENT_DIR: return {...state, currentDir: action.payload}
        case ADD_FILE: return {...state, files: [...state.files, action.payload]}
        case SET_POPUP_DISPLAY: return {...state, popupDisplay: action.payload}
        case SET_NEWS_ADDING_POPUP_DISPLAY: return {...state, newsAddingDisplay: action.payload}
        case SET_SERVICE_ADDING_POPUP_DISPLAY: return {...state, serviceAddingDisplay: action.payload}
        case PUSH_TO_STACK: return {...state, dirStack: [...state.dirStack, action.payload]}
        case DELETE_FILE: return {...state, files: [...state.files.filter(file => file._id != action.payload)]}
        case SET_VIEW: return {...state, view: action.payload}
        case SET_TOP_EMP: return {...state, topemp: action.payload}
        default:
            return state
    }
}

export const setTopEmp = (topemp) => ({type: SET_TOP_EMP, payload: topemp})
export const setFiles = (files) => ({type: SET_FILES, payload: files})
export const setNews = (news) => ({type: SET_NEWS, payload: news})
export const setServices = (services) => ({type: SET_SERVICES, payload: services})
export const setCurrentDirs = (dir) => ({type: SET_CURRENT_DIR, payload: dir})
export const addFile = (file) => ({type: ADD_FILE, payload: file})
export const addNews = (news) => ({type: ADD_NEWS, payload: news})
export const addServices = (services) => ({type: ADD_SERVICES, payload: services})
export const deleteNews = (id) => ({type: DELETE_NEWS, payload: id})
export const deleteServices = (id) => ({type: DELETE_SERVICES, payload: id})
export const setPopupDisplay = (display) => ({type: SET_POPUP_DISPLAY, payload: display})
export const setNewsAddingDisplay = (display) => ({type: SET_NEWS_ADDING_POPUP_DISPLAY, payload: display})
export const setServiceAddingDisplay = (display) => ({type: SET_SERVICE_ADDING_POPUP_DISPLAY, payload: display})
export const pushToStack = (dir) => ({type: PUSH_TO_STACK, payload: dir})
export const deleteFileAction = (dirId) => ({type: DELETE_FILE, payload: dirId})
export const setFileView = (payload) => ({type: SET_VIEW, payload})