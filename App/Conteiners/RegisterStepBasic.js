import React, { Component } from 'react'
import { View, Text, ScrollView, Picker, TextInput, TouchableOpacity, Platform, ImageBackground, KeyboardAvoidingView } from 'react-native'
import { Icon } from 'react-native-elements'

//Styles
import { styles } from './styles/RegisterStepBasicStyles'

//Images
import { images } from '../Util/ImagesTheme'

//Photo
import ImagePicker from 'react-native-image-picker'

//Theme
import { projectColors } from '../Util/Constants'

//Mask
import { TextInputMask } from 'react-native-masked-text'

import { permissionsAction } from "../Helpers/Permissions"

//Actions
import { changeBasicRegister } from '../Store/Actions/ActionRegister'

//Redux
import { connect } from "react-redux"

var options = {
  title: 'Selecione uma foto',
  takePhotoButtonTitle: 'Tirar foto',
  chooseFromLibraryButtonTitle: 'Selecionar da galeria',
  cancelButtonTitle: 'Cancelar',
  storageOptions: {
    skipBackup: true,
    path: "images"
  },
  maxWidth: 600,
  maxHeight: 400,
  quality: 1,
  currentItem: ""
}


class RegisterStepBasic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      picture: null,
      avatarSource: images.profile,
      completeName: '',
      age: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      genreValues: [{ id: 1, label: 'Masculino', value: 'M' }, { id: 2, label: 'Feminino', value: 'F' }],
      selectedGenre: '',
      errorEmptyFields: false,
      errorEmptyPhoto: false,
      errorCombinePasswords: false,
      errorMinimunAge: false
    }
  }


  changeGenre(value) {
    this.setState({ selectedGenre: value })
  }


  saveBasicReducer() {
    this.props.nextSlider()
    /*if (
      this.state.completeName !== '' && this.state.age !== '' &&
      this.state.email !== '' && this.state.phone !== '' &&
      this.state.password !== '' && this.state.confirmPassword !== ''
    ) {
      this.setState({ errorEmptyFields: false })
      if (this.state.picture !== null) {
        this.setState({ errorEmptyPhoto: false })
        if (this.state.password == this.state.confirmPassword) {
          this.setState({ errorCombinePasswords: false })
          this.props.changeBasicRegister(
            this.state.completeName, 
            this.state.age,
            this.state.selectedGenre,
            this.state.phone,
            this.state.email,
            this.state.password,
            this.state.picture
          )
          this.props.nextSlider()
        } else {
          this.setState({ errorCombinePasswords: true })
        }
      } else {
        this.setState({ errorEmptyPhoto: true })
      }
    } else {
      this.setState({ errorEmptyFields: true })
    }*/
  }



  changePhoto() {
    let permissionGranted = true
    if (Platform.OS == 'android') {
      permissionsAction.requestReadExternalStorage().then(
        response => {
          permissionGranted = response
          if (permissionGranted) {
            ImagePicker.showImagePicker(options, (response) => {
              console.log('Response = ', response)
              if (response.didCancel) {
                console.log('User cancelled image picker')
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
              } else {
                const source = { uri: response.uri }
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data }
                console.log('source: ', source)
                this.setState({
                  avatarSource: source,
                  picture: {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName
                  }
                })
              }
            })
          }
        }
      )
    } else {
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response)
        if (response.didCancel) {
          console.log('User cancelled image picker')
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error)
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton)
        } else {
          const source = { uri: response.uri }
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data }
          //console.log('source: ', source)
          this.setState({
            avatarSource: source,
            picture: {
              uri: response.uri,
              type: response.type,
              name: response.fileName
            }
          })
        }
      })
    }
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 30 }}>
              <TouchableOpacity style={styles.contImage} onPress={() => this.changePhoto()}>
                <ImageBackground borderRadius={80} style={styles.image} source={this.state.avatarSource} >
                  <View style={styles.imgBackCont}>
                    <View style={styles.contIconCamera}>
                      <Icon type="font-awesome" name="camera" size={19} color={"#6EB986"} />
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginBottom: 5, color: projectColors.gray, fontWeight: 'bold' }}>Nome Completo</Text>
              <TextInput style={{ backgroundColor: projectColors.white, borderRadius: 5, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}
                onChangeText={(text) => this.setState({ completeName: text })} />
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <View>
                <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginBottom: 5, color: projectColors.gray, fontWeight: 'bold' }}>Idade</Text>
                <TextInput maxLength={2} keyboardType='numeric' style={{ backgroundColor: projectColors.white, borderRadius: 5, width: 50, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}
                  onChangeText={(text) => this.setState({ age: text })} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginBottom: 5, color: projectColors.gray, fontWeight: 'bold', marginTop: 15 }}>Sexo: </Text>
                <Picker
                  selectedValue={this.state.selectedGenre}
                  style={{ height: 50, width: 150, color: projectColors.mainBlue, marginTop: 15, borderRadius: 5 }}
                  mode='dropdown'
                  onValueChange={(itemValue, itemIndex) =>
                    this.changeGenre(itemValue)
                  }>
                  {this.state.genreValues.map((e, i) => {
                    return <Picker.Item label={e.label} value={e.value} key={i} />
                  })}
                </Picker>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginBottom: 5, color: projectColors.gray, fontWeight: 'bold' }}>Telefone</Text>
              <TextInputMask
                style={{ fontFamily: 'Roboto', borderRadius: 5, width: 150, height: 30, paddingVertical: 2, textAlign: 'left', color: projectColors.mainBlue, backgroundColor: projectColors.white }}
                type={'cel-phone'}
                //placeholder='Apenas números'
                options={{
                  precision: 2,
                  separator: ',',
                  delimiter: '.',
                  unit: '',
                  suffixUnit: ''
                }}
                value={this.state.phone}
                onChangeText={text => this.setState({ phone: text })}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginBottom: 5, color: projectColors.gray, fontWeight: 'bold' }}>Email</Text>
              <TextInput maxLength={40} style={{ backgroundColor: projectColors.white, borderRadius: 5, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}
                onChangeText={(text) => this.setState({ email: text })} />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginBottom: 5, color: projectColors.gray, fontWeight: 'bold' }}>Senha</Text>
              <TextInput maxLength={40} style={{ backgroundColor: projectColors.white, borderRadius: 5, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}
                secureTextEntry
                onChangeText={(text) => this.setState({ password: text })} />
            </View>
            {this.state.password ? (
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginBottom: 5, color: projectColors.gray, fontWeight: 'bold' }}>Confirmar senha</Text>
                <TextInput maxLength={40} style={{ backgroundColor: projectColors.white, borderRadius: 5, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}
                  secureTextEntry
                  onChangeText={(text) => this.setState({ confirmPassword: text })} />
                {this.state.errorCombinePasswords ? (
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 13, color: projectColors.tomato, fontWeight: 'bold', marginTop: 5 }}>Senha e confirmar senha são diferentes</Text>
                  </View>
                ) : null}
              </View>
            ) : null}
            {this.state.errorEmptyFields ? (
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Roboto', fontSize: 13, color: projectColors.tomato, fontWeight: 'bold', marginTop: 5 }}>Todos os campos são obrigatórios</Text>
              </View>
            ) : null}
            {this.state.errorEmptyPhoto ? (
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Roboto', fontSize: 13, color: projectColors.tomato, fontWeight: 'bold', marginTop: 5 }}>Insira uma foto sua</Text>
              </View>
            ) : null}
            <TouchableOpacity style={styles.nextButton}
              onPress={() => this.saveBasicReducer()}>
              <Text style={styles.nextText}>Próximo</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    )
  }
}


const mapStateToProps = state => (
  {}
)


const mapDispatchToProps = dispatch => (
  {
    changeBasicRegister: (name, age, genre, phone, email, password, picture) => dispatch(changeBasicRegister(name, age, genre, phone, email, password, picture))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStepBasic)