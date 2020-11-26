import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RegisterReducer from './Reducers/RegisterReducer'
import AvailableServiceReducer from './Reducers/AvailableServiceReducer'
import ServiceProvidedReducer from './Reducers/ServiceProvidedReducer'

const reducers = combineReducers({
    RegisterReducer: RegisterReducer,
    AvailableServiceReducer: AvailableServiceReducer,
    ServiceProvidedReducer: ServiceProvidedReducer
})


const storeConfig = () => {
    return createStore(reducers, applyMiddleware(thunk))
}

export default storeConfig