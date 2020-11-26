export const changeTypeRegister = value => {
    return {
        type: 'CHANGE_TYPE_REGISTER',
        payload: value
    }
}


export const changeBasicRegister = (name, age, genre, phone, email, password, picture) => {
    return {
        type: 'CHANGE_BASIC_REGISTER',
        payload: { name, age, genre, phone, email, password, picture }
    }
}


export const changeAddressRegister = (street, zipcode, number, neighborhood, complement) => {
    return {
        type: 'CHANGE_ADDRESS_REGISTER',
        payload: { street, zipcode, number, neighborhood, complement }
    }
}


export const changeArrayCategories = values => {
    return {
        type: 'CHANGE_ARRAY_CATEGORIES',
        payload: values
    }
}


export const resetRegisterData = () => {
    return {
        type: 'RESET_REGISTER_DATA'
    }
}