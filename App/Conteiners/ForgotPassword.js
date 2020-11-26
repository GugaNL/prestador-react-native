import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Icon } from 'react-native-elements'

//Styles
import { styles } from './styles/ForgotPasswordStyles'

//Toast message
import Toast, { DURATION } from 'react-native-easy-toast'

//External functions
import validateEmail from "../Helpers/ValidateEmail"

//Theme
import { projectColors } from '../Util/Constants'

//Redux
import { connect } from "react-redux"


class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      isLoading: false,
      emptyEmail: false,
      invalidEmail: false
    }
  }


  recoverPassword() {
    if (this.state.email) {
      if (validateEmail(this.state.email)) {
        this.setState({ isLoggingIn: true })
        this.setState({ isLoggingIn: false })
        this.refs.toast.show('Foi enviado um email com passos para seguir')
      } else {
        this.setState({ invalidEmail: true })
      }
    } else {
      this.setState({ emptyEmail: true })
    }

  }


  onChangeEmail(email) {
    this.setState({ email, emptyEmail: false, invalidEmail: false })
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Toast ref="toast" style={{ backgroundColor: projectColors.gray }} fadeInDuration={750} fadeOutDuration={1000} opacity={0.8} textStyle={{ color: projectColors.white }} />

        <TouchableOpacity style={{ alignItems: 'flex-start' }} onPress={() => this.props.navigation.goBack()}>
          <Icon type='ionicon' name='ios-arrow-back' size={35} iconStyle={{ marginLeft: 18, marginTop: 24 }} />
        </TouchableOpacity>
        <View style={{ marginTop: 30, marginLeft: 15 }}>
          <Text style={{ fontFamily: 'roboto', fontSize: 30, color: projectColors.lightBlack, fontWeight: 'bold' }}> Esqueceu a senha? </Text>

          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 12, fontFamily: 'Avenir', color: projectColors.darkGray }}>Email</Text>
            <TextInput style={{ borderBottomWidth: 0.5, borderBottomColor: projectColors.lightBlack, width: '90%' }} value={this.state.email} onChangeText={(text) => this.onChangeEmail(text)} />
            {this.state.emptyEmail ? (
              <Text style={{ fontFamily: 'roboto', fontSize: 12, color: projectColors.tomato, fontWeight: 'bold', marginTop: 5 }}>Insira seu email</Text>
            ) : null}
            {this.state.invalidEmail ? (
              <Text style={{ fontFamily: 'roboto', fontSize: 12, color: projectColors.tomato, fontWeight: 'bold', marginTop: 5 }}>Email inválido</Text>
            ) : null}
          </View>

          <TouchableOpacity style={styles.nextButton}
            onPress={() => this.recoverPassword()}>
            <Text style={styles.nextText}>Redefinir senha</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}


const mapStateToProps = state => (
  {}
)


const mapDispatchToProps = dispatch => (
  {}
)

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)