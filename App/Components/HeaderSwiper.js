import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon, Header } from 'react-native-elements'


export default class HeaderSwiper extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }



    render() {
        const { title, backButton, close } = this.props
        return (
            <View>
                <Header backgroundColor='transparent' containerStyle={{ height: 45 }} centerContainerStyle={{ marginBottom: 20, justifyContent: 'center' }} leftContainerStyle={{ marginBottom: 22 }}
                    leftComponent={
                        backButton ? (
                            <TouchableOpacity style={{ height: 30, width: 20 }} onPress={this.props.pressBack}>
                                <Icon type='ionicon' name='ios-arrow-back' size={35} color='#222' />
                            </TouchableOpacity>
                        ) : close ? (
                            <TouchableOpacity style={{ height: 30, width: 20, marginTop: 5 }} onPress={this.props.pressClose}>
                                <Icon type='font-awesome' name='close' size={26} color='#222' />
                            </TouchableOpacity>
                        ) : null
                    }
                //centerComponent={<Text style={{ fontFamily: 'Roboto', fontSize: 18, fontWeight: 'bold', color: '#fff', alignSelf: 'center', textAlign: 'center', marginTop: 10 }}>{title}</Text>}
                />
                <Text style={{ fontFamily: 'Roboto', fontSize: 26, fontWeight: 'bold', color: '#222', alignSelf: 'flex-start', marginTop: 10, marginLeft: 15 }}>{title}</Text>
            </View>
        )
    }


}
