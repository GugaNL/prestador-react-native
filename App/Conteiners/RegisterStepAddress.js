import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'

//Mask
import TextInputMask from 'react-native-text-input-mask'

//Styles
import { styles } from './styles/RegisterStepAddressStyles'

//Theme
import { projectColors } from '../Util/Constants'



export default class RegisterStepAddress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            zipcode: '',
            number: '',
            neighborhood: '',
            complement: '',
            errorEmptyFields: '',
        }
    }


    saveAddressReducer() {
        this.props.nextSlider()
        /*if (
            this.state.address !== '' &&
            this.state.zipcode !== '' &&
            this.state.number !== '' &&
            this.state.neighborhood !== ''
        ) {
            this.setState({ errorEmptyFields: false })
            this.props.nextSlider()
        } else {
            this.setState({ errorEmptyFields: true })
        }*/
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: '90%', alignSelf: 'center', marginBottom: 15 }}>
                    <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginBottom: 5, color: projectColors.gray, fontWeight: 'bold' }}>Endereço</Text>
                            <TextInput style={{ backgroundColor: projectColors.white, borderRadius: 5, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}
                                onChangeText={(text) => this.setState({ address: text })} />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginBottom: 5, color: projectColors.gray, fontWeight: 'bold' }}>Cep</Text>
                            <TextInputMask
                                refInput={ref => { this.input = ref }}
                                style={{ backgroundColor: projectColors.white, borderRadius: 5, width: 150, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}
                                onChangeText={(formatted, extracted) => {
                                    console.log(formatted)
                                    console.log(extracted)
                                    this.setState({ zipcode: extracted })
                                }}
                                mask={"[00000]-[000]"}
                            />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginBottom: 5, color: projectColors.gray, fontWeight: 'bold' }}>Número</Text>
                            <TextInput maxLength={5} keyboardType='numeric' style={{ backgroundColor: projectColors.white, borderRadius: 5, width: 80, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}
                                onChangeText={(text) => this.setState({ number: text })} />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginBottom: 5, color: projectColors.gray, fontWeight: 'bold' }}>Bairro</Text>
                            <TextInput style={{ backgroundColor: projectColors.white, borderRadius: 5, width: 200, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}
                                onChangeText={(text) => this.setState({ neighborhood: text })} />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginBottom: 5, color: projectColors.gray, fontWeight: 'bold' }}>Complemento (Opcional)</Text>
                            <TextInput maxLength={40} style={{ backgroundColor: projectColors.white, borderRadius: 5, color: projectColors.mainBlue, fontSize: 16, fontFamily: 'roboto' }}
                                onChangeText={(text) => this.setState({ complement: text })} />
                        </View>
                        {this.state.errorEmptyFields ? (
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 13, color: projectColors.tomato, fontWeight: 'bold', marginTop: 5 }}>Preencha os campos obrigatórios</Text>
                            </View>
                        ) : null}
                        <TouchableOpacity style={styles.nextButton}
                            onPress={() => this.saveAddressReducer()}>
                            <Text style={styles.nextText}>Próximo</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

