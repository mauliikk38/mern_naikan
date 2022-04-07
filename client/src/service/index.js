import axios from "axios";


const api = axios.create();
const statusCheck = {
    validateStatus: (status) => {
        if (status === 401) {
            // remove token from local storage unAuthorize
            localStorage.access = ''
            window.location.reload(true)
        } else if (status === 500) {
            alert('Could not connect to server')
        } else {
            return true;
        }
    }
}

function onError(response) {
    return response;
}

function onSuccess(response) {
    return response;
}

export const setToken = (token) => {
    axios.defaults.headers.common["Authorization"] = token;
    api.defaults.headers.common['Authorization'] = token;
}
export const removeToken = () => {
    api.defaults.headers.common['Authorization'] = '';
    axios.defaults.headers.common["Authorization"] = '';
}

api.defaults.baseURL = process.env.REACT_APP_BACKEND_HOST;
api.defaults.headers.post["Content-Type"] = "multipart/form-data";
api.defaults.headers.post["Accept"] = "*/*";
api.defaults.headers.common['Authorization'] = localStorage.jwtToken || ''

const baseUrl = {
    auth: '/v1/auth/',
    naikan: '/v1/auth/naikan',
}

export const authService = {
    signUp: (data) => api.post(baseUrl.auth + `register`, data, statusCheck).then(onSuccess, onError),
    signIn: (data) => api.post(baseUrl.auth + `login`, data, statusCheck).then(onSuccess, onError),
    signOut: (data) => api.post(baseUrl.auth + `logout`, data, statusCheck).then(onSuccess, onError),
}

export const naikanService = {
    addNote: (data) => api.post(baseUrl.naikan + `/insert`, data, statusCheck).then(onSuccess, onError),
    removeNote: (data) => api.post(baseUrl.naikan + `/delete`, data, statusCheck).then(onSuccess, onError),
    // fetchNote: (data) => api.get(baseUrl.naikan + `/`, data, statusCheck).then(onSuccess, onError),
}