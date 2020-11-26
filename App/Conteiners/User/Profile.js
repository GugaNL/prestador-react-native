import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import { Avatar, Icon, ButtonGroup } from 'react-native-elements'

//Mask
import { TextInputMask } from 'react-native-masked-text'

//Photo
import ImagePicker from 'react-native-image-picker'

//Custom components
import HeaderMain from '../../Components/HeaderMain'

//Toast message
import Toast, { DURATION } from 'react-native-easy-toast'

//Theme
import { projectColors } from '../../Util/Constants'

//Styles
import { styles } from './styles/ProfileStyles'

import { permissionsAction } from "../../Helpers/Permissions"


//Temporário
import { profile } from '../../Util/Mocks/MockProfile'


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


export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: {},
            isLoading: null,
            selectedIndex: 0
        }
    }


    componentDidMount() {
        this.setState({ profile: profile, isLoading: false })
    }


    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }


    saveProfile() {
        this.refs.toast.show('Dados alterados com sucesso')
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
                                this.setState({ profile: { photo: source } })
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
                    this.setState({ profile: { photo: source } })
                }
            })
        }
    }



    render() {
        const buttons = ['Básico', 'Endereço', 'Acesso']
        const { selectedIndex } = this.state
        return (
            <View style={styles.container}>
                <Toast ref="toast" style={{ backgroundColor: projectColors.gray }} fadeInDuration={750} fadeOutDuration={1000} opacity={0.8} textStyle={{ color: projectColors.white }} />
                <View style={{ paddingBottom: 10, backgroundColor: projectColors.mainBlue, elevation: 5, borderBottomEndRadius: 80, borderBottomStartRadius: 80 }}>
                    <View style={{ marginLeft: 15, marginRight: 15, marginTop: 10, flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => this.props.navigation.goBack()} >
                                <Icon type='ionicon' name='ios-arrow-back' size={35} color='#FFFFFF' style={{ marginLeft: 30 }} />
                            </TouchableOpacity>
                        </View>

                        {/*<View style={{ alignSelf: 'center', width: '80%' }}>
                            <Text style={{ fontFamily: 'roboto', fontSize: 17, color: projectColors.white, fontWeight: 'bold', alignSelf: 'center' }}>Editar perfil</Text>
        </View>*/}

                        <View style={{ alignSelf: 'flex-end', width: '50%', alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => this.saveProfile()}>
                                <Text style={{ fontFamily: 'roboto', fontSize: 20, color: projectColors.white, fontWeight: 'bold', alignSelf: 'center' }}>Salvar</Text>
                                {/*<Icon type='font-awesome' name='save' size={45} color='#FFFFFF' style={{ marginLeft: 30 }} />*/}
                            </TouchableOpacity>
                        </View>

                    </View>
                    <TouchableOpacity style={{ marginTop: 15 }} onPress={() => this.changePhoto()}>
                        {this.state.profile.photo ? (
                            <Avatar rounded source={this.state.profile.photo} size='xlarge' containerStyle={{ alignSelf: 'center' }} />
                        ) : (
                                <Avatar rounded icon={{ name: 'user', type: 'font-awesome' }} size='large' containerStyle={{ alignSelf: 'center' }} />
                            )}
                        <View style={{ position: 'absolute', top: 110, right: 130, backgroundColor: projectColors.mainRed, padding: 5, borderRadius: 50 }}>
                            <Icon type='entypo' name='camera' color={projectColors.white} size={20} />
                            {/*<BadgedIcon type="ionicon" name="ios-chatbubbles" containerStyle={{ position: 'absolute', top: -30, right: 140 }} />*/}
                        </View>
                    </TouchableOpacity>

                </View>

                <View>
                    <ButtonGroup
                        onPress={(index) => this.updateIndex(index)}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{ height: 35, marginTop: 20, borderRadius: 20 }} textStyle={{ fontFamily: 'roboto', color: projectColors.lightBlack }} />
                </View>

                <ScrollView>
                    {this.state.selectedIndex == 0 ? (
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: 15, marginBottom: 15 }}>
                            <View>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5, color: projectColors.lightBlack }}>Nome Completo</Text>
                                <TextInput style={{ backgroundColor: projectColors.lightBlue, borderRadius: 5, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}>{this.state.profile.completeName}</TextInput>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5, color: projectColors.lightBlack }}>Idade</Text>
                                <TextInput maxLength={2} keyboardType='numeric' style={{ backgroundColor: projectColors.lightBlue, borderRadius: 5, width: 50, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}>{this.state.profile.age}</TextInput>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5, color: projectColors.lightBlack }}>Telefone</Text>
                                <TextInputMask
                                    style={{ fontFamily: 'Roboto', borderRadius: 5, width: 150, height: 30, paddingVertical: 2, textAlign: 'left', color: projectColors.mainBlue, backgroundColor: projectColors.lightBlue }}
                                    type={'cel-phone'}
                                    //placeholder='Apenas números'
                                    options={{
                                        precision: 2,
                                        separator: ',',
                                        delimiter: '.',
                                        unit: '',
                                        suffixUnit: ''
                                    }}
                                    value={this.state.profile.phone}
                                    onChangeText={text => { }}
                                />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5, color: projectColors.lightBlack }}>Email</Text>
                                <TextInput maxLength={40} style={{ backgroundColor: projectColors.lightBlue, borderRadius: 5, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}>{this.state.profile.email}</TextInput>
                            </View>
                        </View>
                    ) : null}

                    {this.state.selectedIndex == 1 ? (
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: 15, marginBottom: 15 }}>
                            <View>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5, color: projectColors.lightBlack }}>Endereço</Text>
                                <TextInput style={{ backgroundColor: projectColors.lightBlue, borderRadius: 5, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}>{this.state.profile.address}</TextInput>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5, color: projectColors.lightBlack }}>Número</Text>
                                <TextInput maxLength={5} keyboardType='numeric' style={{ backgroundColor: projectColors.lightBlue, borderRadius: 5, width: 80, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}>{this.state.profile.number}</TextInput>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5, color: projectColors.lightBlack }}>Bairro</Text>
                                <TextInput style={{ backgroundColor: projectColors.lightBlue, borderRadius: 5, width: 150, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}>{this.state.profile.neighborhood}</TextInput>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5, color: projectColors.lightBlack }}>Complemento</Text>
                                <TextInput maxLength={40} style={{ backgroundColor: projectColors.lightBlue, borderRadius: 5, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}>{this.state.profile.complement}</TextInput>
                            </View>
                        </View>
                    ) : null}

                    {this.state.selectedIndex == 2 ? (
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: 15, marginBottom: 15 }}>
                            <View>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5, color: projectColors.lightBlack }}>Senha de acesso</Text>
                                <TextInput secureTextEntry maxLength={20} style={{ backgroundColor: projectColors.lightBlue, borderRadius: 5, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}>{this.state.profile.password}</TextInput>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5, color: projectColors.lightBlack }}>Confirmar senha</Text>
                                <TextInput secureTextEntry maxLength={20} style={{ backgroundColor: projectColors.lightBlue, borderRadius: 5, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}>{this.state.profile.password}</TextInput>
                            </View>
                        </View>
                    ) : null}
                    

                </ScrollView>


            </View>
        )
    }
}
