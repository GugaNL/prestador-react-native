import React, { Component } from 'react'
import { View, Text } from 'react-native'

//Theme
import { projectColors } from '../Util/Constants'


export default class RegisterStepFinish extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontFamily: 'Roboto', fontSize: 18, fontWeight: 'bold', color: projectColors.gray, alignSelf: 'center' }}>Cadastro realizado com sucesso</Text>
        <Text style={{ fontFamily: 'Roboto', fontSize: 16, color: projectColors.gray, textAlign: 'center' }}>Seu cadastro será analisado pela nossa equipe e te retornaremos o mais breve possível por email</Text>

      </View>
    )
  }
}
