import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import loginBackground from '../Images/Background/Login-claro.png'

//Theme
import { projectColors } from '../Util/Constants'

console.disableYellowBox = true  //Remove todos os warnings

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      responseRequest: '',
      periodDetail: ''
    }
  }


  doLogin() {
    if (this.state.email == 'usuario') {
      this.props.navigation.navigate('MyDrawer')
    } else if (this.state.email == 'prestador') {
      this.props.navigation.navigate('ProviderMyDrawer')
    }
  }


  createAccount() {
    this.props.navigation.navigate('RegisterChooseType')
  }


  onChangeEmail(email) {
    this.setState({ email })
  }


  onChangePassword(password) {
    this.setState({ password })
  }


  returnValue = (value) => {
    console.log('returnValue: ', value)
  }

  returnEmptyMessage = () => {
    console.log('Campo vazio')
  }


  openDetail = (item) => {
    console.log('item: ', item)
  }




  render() {
    return (
      <View style={{ flex: 1 }}>

        <ImageBackground source={loginBackground} style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
          <View style={{ width: '90%', alignSelf: 'center', borderRadius: 20, borderWidth: 1, borderColor: projectColors.white }}>
            <Input inputContainerStyle={{ borderBottomWidth: 0 }} inputStyle={{ marginLeft: 10, color: projectColors.gray }}
              onChangeText={(text) => this.onChangeEmail(text)}
              placeholder='Email'
              leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: projectColors.gray }}
            />
          </View>
          <View style={{ width: '90%', alignSelf: 'center', borderRadius: 20, borderWidth: 1, borderColor: projectColors.white, marginTop: 10 }}>
            <Input inputContainerStyle={{ borderBottomWidth: 0 }} inputStyle={{ marginLeft: 10, color: projectColors.gray }}
              onChangeText={(text) => this.onChangePassword(text)}
              placeholder='Senha'
              secureTextEntry={true}
              leftIcon={{ type: 'material-community-icons', name: 'lock-outline', color: projectColors.gray }}
            />
          </View>

          <TouchableOpacity style={{ width: '80%', height: 40, borderRadius: 20, alignSelf: 'center', backgroundColor: projectColors.mainBlue, justifyContent: 'center', alignItems: 'center', marginTop: 30, elevation: 5 }}
            onPress={() => this.doLogin()}>
            <Text style={{ fontFamily: 'roboto', color: projectColors.white, fontWeight: 'bold', fontSize: 16 }}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 15, width: '80%', alignSelf: 'center', alignItems: 'flex-end' }}
            onPress={() => this.props.navigation.navigate('ForgotPassword')}>
            <Text style={{ fontFamily: 'roboto', color: projectColors.darkGray, fontWeight: 'bold', fontSize: 14, textDecorationLine: 'underline' }}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <View style={{ position: 'absolute', bottom: 10, width: '100%', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'roboto', color: projectColors.mainBlue, fontWeight: 'bold', fontSize: 14, marginBottom: 5 }}>Não possui conta?</Text>
            <TouchableOpacity style={{ width: '80%', height: 40, borderRadius: 20, alignSelf: 'center', borderWidth: 2, borderColor: projectColors.mainBlue, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.createAccount()}>
              <Text style={{ fontFamily: 'roboto', color: projectColors.mainBlue, fontWeight: 'bold', fontSize: 16 }}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>

        </ImageBackground>

      </View>

    )
  }
}
