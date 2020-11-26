const initialState = {
    //availableServices: [],
    detailServiceProvided: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_DETAIL_PROVIDED_SERVICE':
            return {
                ...state,
                detailServiceProvided: action.payload
            }
        default:
            return state
    }
}