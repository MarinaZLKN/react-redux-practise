import endpoints from "./endpoints";

export const API_ACTIONS = {
    FETCH_START: 'FETCH_START_',
    FETCH_SUCCESS: 'FETCH_SUCCESS_',
    FETCH_FAILED: 'FETCH_FAILED_'
}

export const apiActions = {
    fetch: (endpoint, payload) =>( {
        type: `${API_ACTIONS.FETCH_START}${endpoint.toUpperCase()}`,
        payload
    }),
    fetchSuccess: (endpoint, payload) => ({
        type: `${API_ACTIONS.FETCH_SUCCESS}${endpoint.toUpperCase()}`,
        payload
    }),
    fetchFailure: (endpoint, payload) => ({
        type: `${API_ACTIONS.FETCH_FAILED}${endpoint.toUpperCase()}`,
        payload
    })

}

export default apiActions;