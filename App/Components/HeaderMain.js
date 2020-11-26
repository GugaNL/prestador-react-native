import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Icon, Header } from 'react-native-elements'


export default class HeaderMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { title, backButton, leftIcon } = this.props
        return (
            <Header backgroundColor='#6495ED' containerStyle={{ height: 45 }} centerContainerStyle={{ marginBottom: 20, justifyContent: 'center' }} leftContainerStyle={{ marginBottom: 22 }}
                leftComponent={
                    backButton ? (
                        <TouchableOpacity style={{ height: 30, width: 20 }} onPress={this.props.pressBack}>
                            <Icon type='ionicon' name='ios-arrow-back' size={26} color='#FFFFFF' />
                        </TouchableOpacity>
                    ) : leftIcon ? (
                        <TouchableOpacity style={{ height: 30, width: 20, marginTop: 5 }} onPress={this.props.pressSideMenu}>
                            <Icon type='font-awesome' name='list' size={22} color='#FFFFFF' />
                        </TouchableOpacity>
                    ) : null
                }
                centerComponent={<Text style={{ fontFamily: 'Roboto', fontSize: 18, fontWeight: 'bold', color: '#fff', alignSelf: 'center', textAlign: 'center', marginTop: 10 }}>{title}</Text>}
            />
        )
    }
}
