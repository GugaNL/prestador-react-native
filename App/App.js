import React from 'react'
import { Text } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import MainRouter from './Navigation/MainRouter'
import { Provider } from 'react-redux'
import storeConfig from './Store/StoreConfig'

import { AppNavigation } from './Navigation/MainRouter'

const storeConf = storeConfig()


const App = () => {
  return (
    <Provider store={storeConf}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  )
}


export default App
