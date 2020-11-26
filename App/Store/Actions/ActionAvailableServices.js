export const changeAvailableServices = value => {
    return {
        type: 'CHANGE_AVAILABLE_SERVICES',
        payload: value
    }
}

export const changeDetailAvailableService = value => {
    return {
        type: 'CHANGE_DETAIL_AVAILABLE_SERVICE',
        payload: value
    }
}