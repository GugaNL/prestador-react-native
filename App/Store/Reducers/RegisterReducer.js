const initialState = {
    typeRegister: '',
    basicRegister: {
        name: '',
        age: '',
        genre: '',
        phone: '',
        email: '',
        password: '',
        picture: null
    },
    addressRegister: {
        street: '',
        zipcode: '',
        number: '',
        neighborhood: '',
        complement: ''
    },
    categoriesRegister: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TYPE_REGISTER':
            return {
                ...state,
                typeRegister: action.payload
            }
        case 'CHANGE_BASIC_REGISTER':
            return {
                ...state,
                basicRegister: {
                    ...state.basicRegister,
                    name: action.payload.name,
                    age: action.payload.age,
                    genre: action.payload.genre,
                    phone: action.payload.phone,
                    email: action.payload.phone,
                    password: action.payload.password,
                    picture: action.payload.picture
                }
            }
        case 'CHANGE_ADDRESS_REGISTER':
            return {
                ...state,
                addressRegister: {
                    ...state.addressRegister,
                    street: action.payload.street,
                    zipcode: action.payload.zipcode,
                    number: action.payload.number,
                    neighborhood: action.payload.neighborhood,
                    complement: action.payload.complement
                }
            }
        case 'CHANGE_ARRAY_CATEGORIES':
            return {
                ...state,
                categoriesRegister: action.payload
                //categoriesRegister: state.categoriesRegister.concat(action.payload)
            }
        case 'RESET_REGISTER_DATA':
            return {
                ...state,
                basicRegister: initialState.basicRegister,
                addressRegister: initialState.addressRegister
            }
        default:
            return state
    }
}