import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { Icon } from 'react-native-elements'

//Color theme
import { projectColors } from '../Util/Constants'


export default class LogoutButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    logout() {
        Alert.alert(
            'Aviso',
            'Deseja deslogar do app?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                    style: 'cancel',
                },
                { text: 'Ok', onPress: () => this.redirectMain() },
            ],
            { cancelable: false },
        )
    }


    redirectMain() {
        this.props.navigation.navigate('AvailableServices')
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={{ marginLeft: 20, flexDirection: 'row', marginTop: 15 }} onPress={() => this.logout()}>
                    <Icon color={projectColors.darkGray} size={21} type='entypo' name='log-out' />
                    <Text style={{ fontFamily: 'roboto', color: projectColors.darkGray, marginLeft: 31 }}>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
