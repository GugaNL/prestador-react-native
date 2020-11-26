const initialState = {
    availableServices: [],
    detailAvailableService: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_AVAILABLE_SERVICES':
            return {
                ...state,
                availableServices: action.payload
            }
        case 'CHANGE_DETAIL_AVAILABLE_SERVICE':
            return {
                ...state,
                detailAvailableService: action.payload
            }
        default:
            return state
    }
}