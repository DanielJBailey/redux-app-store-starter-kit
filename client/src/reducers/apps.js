import axios from 'axios';

const APPS = "APPS";
const ADD = "ADD_APP";
const UPDATE = "UPDATE_APP";
const DELETE = "DELETE_APP";

export const getApps = () => {
    return (dispatch) => {
        axios.get(`/api/apps`)
        .then(res => dispatch({type: APPS, apps: res.data}));
    }
}

export const addApp = (app) => {
    return (dispatch) => {
        axios.post(`/api/apps`, {app, })
        .then(res => dispatch({type: ADD, app: res.data,}));
    }
}

export const updateApp = (app) => {
    return (dispatch) => {
        axios.put(`/api/apps/${app.id}`, {app, })
        .then(res => {
            dispatch({type: UPDATE, app: res.data})
        })
    }
}

export const deleteApp = (id) => {
    return (dispatch) => {
        axios.delete(`/api/apps/${id}`)
        .then(res => dispatch({type: DELETE, id }))
    }
}

export default (store = [], action) => {
    switch(action.type) {
        case APPS:
            return action.apps;
        case ADD:
            return [action.app, ...store]
        case UPDATE:
            return store.map(app => {
                if(action.id === app.id)
                    return action.app
                return app
            })
        case DELETE:
            return store.filter(app => a => a.id !== action.id);
        default: return store;
    }
}