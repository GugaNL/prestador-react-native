import React from "react";
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { Icon, Avatar, Badge } from 'react-native-elements'
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator, DrawerItem, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer'

// User
import UserMainScreen from '../Conteiners/User/UserMainScreen'
import RequestService from '../Conteiners/User/RequestService'
import NewRequest from '../Conteiners/User/NewRequest'
import SwiperCreateAccount from '../Conteiners/User/SwiperCreateAccount'
import ProfessionalDetails from '../Conteiners/User/ProfessionalDetails'
import DetailScheduleService from '../Conteiners/User/DetailScheduleService'


// Provider
import ProviderMainScreen from '../Conteiners/Provider/ProviderMainScreen'
import AvailableServices from '../Conteiners/Provider/AvailableServices'
import AdvertiseService from '../Conteiners/Provider/AdvertiseService'
import DetailAvailableService from '../Conteiners/Provider/DetailAvailableService'
import ServicesProvided from '../Conteiners/Provider/ServicesProvided'
import DetailServicesProvided from '../Conteiners/Provider/DetailServicesProvided'
import EditProfileProvider from '../Conteiners/Provider/EditProfileProvider'

// All
import ProfessionalsList from '../Conteiners/User/ProfessionalsList'
import Schedule from '../Conteiners/User/Schedule'
import FavoriteList from '../Conteiners/User/FavoriteList'
import History from '../Conteiners/User/History'
import Notifications from '../Conteiners/User/Notifications'
import Profile from '../Conteiners/User/Profile'
import LoginScreen from '../Conteiners/LoginScreen'
import SwiperCreateProviderAccount from '../Conteiners/Provider/SwiperCreateProviderAccount'
import RegisterStepBasic from '../Conteiners/RegisterStepBasic'
import RegisterChooseType from '../Conteiners/RegisterChooseType'
import ForgotPassword from '../Conteiners/ForgotPassword'
import Chat from '../Conteiners/Chat'

//Color theme
import { projectColors } from '../Util/Constants'

//Temporario
import jackie from '../Images/professionals/jackie.jpg'

import { useNavigation } from '@react-navigation/native';


let countCheckNotify = 0


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()


function settingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Configurações</Text>
    </View>
  )
}


//User
function home() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="MenuTabs" component={menuTabs} />
      <Stack.Screen name="ProfessionalsList" component={ProfessionalsList} />
      <Stack.Screen name="ProfessionalDetails" component={ProfessionalDetails} />
      <Stack.Screen name="Historico" component={historyScreen} />
      <Stack.Screen name="Ajuda" component={helpScreen} />
      <Stack.Screen name="RequestService" component={RequestService} />
      <Stack.Screen name="DetailScheduleService" component={DetailScheduleService} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  )
}


//Provider
function homeProvider() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="menuTabsProvider" component={menuTabsProvider} />
      <Stack.Screen name="ProfessionalsList" component={ProfessionalsList} />
      <Stack.Screen name="ProfessionalDetails" component={ProfessionalDetails} />
      <Stack.Screen name="Historico" component={historyScreen} />
      <Stack.Screen name="Ajuda" component={helpScreen} />
      <Stack.Screen name="RequestService" component={RequestService} />
      <Stack.Screen name="DetailScheduleService" component={DetailScheduleService} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="AvailableServices" component={AvailableServices} />
      <Stack.Screen name="DetailAvailableService" component={DetailAvailableService} />
      <Stack.Screen name="ServicesProvided" component={ServicesProvided} />
      <Stack.Screen name="DetailServicesProvided" component={DetailServicesProvided} />
      <Stack.Screen name="AdvertiseService" component={AdvertiseService} />
    </Stack.Navigator>
  )
}


function historyScreen() {
  return (
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Histórico</Text>
    </TouchableOpacity>
  )
}


function helpScreen() {
  return (
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ajuda</Text>
    </TouchableOpacity>
  )
}


function logout() {
  Alert.alert(
    'Aviso',
    'Deseja deslogar do app?',
    [
      {
        text: 'Cancelar',
        onPress: () => { },
        style: 'cancel',
      },
      { text: 'Ok', onPress: () => redirectMain() },
    ],
    { cancelable: false },
  )
}


function redirectMain() {

  //this.props.navigation.navigate('LoginScreen')
}


//User
function menuTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName
        switch (route.name) {
          case 'Serviços':
            iconName = focused ? 'home' : 'home'
            //color = focused ? projectColors.mainBlue : color
            break
          case 'Favoritos':
            iconName = 'heart-o'
            //color = focused ? projectColors.mainBlue : color
            break
          case 'Agenda':
            iconName = 'calendar-o'
            break
          case 'Perfil':
            iconName = 'user'
          case 'Notificações':
            iconName = 'bell-o'
            if (countCheckNotify < 1) {
              testBadge()
            }
            break
          case 'Novo':
            iconName = 'plus-square'
            size = 35
            break
          default:
            break
        }

        if (iconName == 'bell-o') {
          return <View>
            <Badge value="2" status="error" containerStyle={{ position: 'absolute', top: -2, right: -12 }} badgeStyle={{ height: 13 }} textStyle={{ fontSize: 10 }} />
            <Icon type='font-awesome' name={iconName} size={size} color={color} />
          </View>
        } else {
          return <Icon type='font-awesome' name={iconName} size={size} color={color} />
        }

      },
    })}
      tabBarOptions={{
        activeTintColor: projectColors.tomato,
        inactiveTintColor: 'gray',
      }}>

      <Tab.Screen name="Serviços" component={UserMainScreen} />
      <Tab.Screen name="Favoritos" component={FavoriteList} />
      <Tab.Screen name="Novo" component={NewRequest} />
      <Tab.Screen name="Agenda" component={Schedule} />
      <Tab.Screen name="Notificações" component={Notifications} />
    </Tab.Navigator>
  )
}


//Provider
function menuTabsProvider() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName
        switch (route.name) {
          case 'Principal':
            iconName = focused ? 'home' : 'home'
            //color = focused ? projectColors.mainBlue : color
            break
          case 'Favoritos':
            iconName = 'heart-o'
            //color = focused ? projectColors.mainBlue : color
            break
          case 'Agenda':
            iconName = 'calendar-o'
            break
          case 'Perfil':
            iconName = 'user'
          case 'Notificações':
            iconName = 'bell-o'
            if (countCheckNotify < 1) {
              testBadge()
            }
            break
          case 'Novo':
            iconName = 'plus-square'
            size = 35
            break
          default:
            break
        }
        if (iconName == 'bell-o') {
          return <View>
            <Badge value="2" status="error" containerStyle={{ position: 'absolute', top: -2, right: -12 }} badgeStyle={{ height: 13 }} textStyle={{ fontSize: 10 }} />
            <Icon type='font-awesome' name={iconName} size={size} color={color} />
          </View>
        } else {
          return <Icon type='font-awesome' name={iconName} size={size} color={color} />
        }

      },
    })}
      tabBarOptions={{
        activeTintColor: projectColors.tomato,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Principal" component={ProviderMainScreen} />
      <Tab.Screen name="Agenda" component={Schedule} />
      <Tab.Screen name="Notificações" component={Notifications} />
    </Tab.Navigator>
  )
}


function testBadge() {
  countCheckNotify = countCheckNotify + 1
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 15 }}>
        <Avatar rounded source={jackie} size='large' containerStyle={{ alignSelf: 'center' }} />
        <Text>Jackie Chan</Text>
      </View>

      <DrawerItemList {...props} />
      <TouchableOpacity style={{ marginLeft: 20, flexDirection: 'row', marginTop: 15 }} onPress={() => logout()}>
        <Icon color={projectColors.darkGray} size={21} type='entypo' name='log-out' />
        <Text style={{ fontFamily: 'roboto', color: projectColors.darkGray, marginLeft: 31 }}>Sair</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  )
}


//User
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Principal" drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Principal" component={home} options={({ drawerIcon: ({ focused, color, size }) => <Icon color={color} size={size} type='font-awesome' name={focused ? 'home' : 'home'} /> })} />
      <Drawer.Screen name="Perfil" component={Profile} options={({ drawerIcon: ({ focused, color, size }) => <Icon color={color} size={size} type='font-awesome' name='user' /> })} />
      <Drawer.Screen name="Histórico" component={History} options={({ drawerIcon: ({ focused, color, size }) => <Icon color={color} size={size} type='font-awesome' name='list-alt' /> })} />
      <Drawer.Screen name="Configurações" component={settingsScreen} options={({ drawerIcon: ({ focused, color, size }) => <Icon color={color} size={size} type='font-awesome' name='cog' /> })} />
      <Drawer.Screen name="Ajuda" component={helpScreen} options={({ drawerIcon: ({ focused, color, size }) => <Icon color={color} size={size} type='font-awesome' name='support' /> })} />
    </Drawer.Navigator>
  )
}


//Provider
function ProviderMyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Principal" drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Principal" component={homeProvider} options={({ drawerIcon: ({ focused, color, size }) => <Icon color={color} size={size} type='font-awesome' name={focused ? 'home' : 'home'} /> })} />
      <Drawer.Screen name="Perfil" component={EditProfileProvider} options={({ drawerIcon: ({ focused, color, size }) => <Icon color={color} size={size} type='font-awesome' name='user' /> })} />
      <Drawer.Screen name="Configurações" component={settingsScreen} options={({ drawerIcon: ({ focused, color, size }) => <Icon color={color} size={size} type='font-awesome' name='cog' /> })} />
      <Drawer.Screen name="Ajuda" component={helpScreen} options={({ drawerIcon: ({ focused, color, size }) => <Icon color={color} size={size} type='font-awesome' name='support' /> })} />
    </Drawer.Navigator>
  )
}




export const AppNavigation = () => {
  return (
    <Stack.Navigator headerMode='none' initialRouteName='LoginScreen'>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="MenuTabs" component={menuTabs} />
      <Stack.Screen name="menuTabsProvider" component={menuTabsProvider} />
      <Stack.Screen name="ProfessionalsList" component={ProfessionalsList} />
      <Stack.Screen name="ProfessionalDetails" component={ProfessionalDetails} />
      <Stack.Screen name="Historico" component={historyScreen} />
      <Stack.Screen name="Ajuda" component={helpScreen} />
      <Stack.Screen name="RequestService" component={RequestService} />
      <Stack.Screen name="DetailScheduleService" component={DetailScheduleService} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
      <Stack.Screen name="ProviderMyDrawer" component={ProviderMyDrawer} />
      <Stack.Screen name="SwiperCreateAccount" component={SwiperCreateAccount} />
      <Stack.Screen name="SwiperCreateProviderAccount" component={SwiperCreateProviderAccount} />
      <Stack.Screen name="RegisterStepBasic" component={RegisterStepBasic} />
      <Stack.Screen name="RegisterChooseType" component={RegisterChooseType} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

