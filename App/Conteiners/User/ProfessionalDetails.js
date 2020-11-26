import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Icon, Avatar, AirbnbRating } from 'react-native-elements'

//Temporario
import jackie from '../../Images/professionals/jackie.jpg'



export default class ProfessionalDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavorited: false
    }
  }


  favorite() {
    this.setState({ isFavorited: !this.state.isFavorited })
  }


  openRequest() {
    this.props.navigation.navigate('RequestService')
  }


  openChat() {
    this.props.navigation.navigate('Chat')
  }


  render() {
    return (
      <View style={{ flex: 1 }}>

        <TouchableOpacity style={{
          backgroundColor: '#FFA500', borderRadius: 20, width: 50, height: 40, alignSelf: 'center',
          marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 15, right: 15, elevation: 5, zIndex: 1
        }} onPress={() => this.openChat()}>
          <Icon type='font-awesome' name='comment' color='#fff' size={25} containerStyle={{ padding: 10 }} />
        </TouchableOpacity>

        <View style={{ height: '35%', backgroundColor: '#6495ED', elevation: 5, borderBottomEndRadius: 80, borderBottomStartRadius: 80 }}>
          <View style={{ marginLeft: 15, marginRight: 15, marginTop: 10, flexDirection: 'row' }}>
            <View style={{ width: '50%' }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ alignSelf: 'flex-start' }}>
                <Icon type='ionicon' name='ios-arrow-back' size={35} color='#FFFFFF' style={{ marginLeft: 30 }} />
              </TouchableOpacity>
            </View>
            <View style={{ width: '50%', justifyContent: 'center' }}>
              <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => this.favorite()}>
                <Icon type='font-awesome' name='star' color={this.state.isFavorited ? '#FFD700' : '#fff'} size={30} />
              </TouchableOpacity>
            </View>
          </View>
          {jackie ? (
            <Avatar rounded source={jackie} size='large' containerStyle={{ alignSelf: 'center' }} />
          ) : (
              <Avatar rounded icon={{ name: 'user', type: 'font-awesome' }} size='large' containerStyle={{ alignSelf: 'center' }} />
            )}
          <Text style={{ fontFamily: 'Roboto', color: '#fff', fontWeight: 'bold', fontSize: 16, alignSelf: 'center' }} >Jackie Chan</Text>

          <AirbnbRating
            size={10}
            count={5}
            showRating={false}
            isDisabled
            ratingCount={5}
            defaultRating={3}
          />

          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Icon type='ionicon' name='md-pin' color='#fff' size={15} containerStyle={{ marginTop: 5 }} />
            <Text style={{ fontFamily: 'Roboto', color: '#fff', marginTop: 5, marginLeft: 5 }}>Petrolândia-PE</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Icon type='font-awesome' name='briefcase' color='#fff' size={15} containerStyle={{ marginTop: 5 }} />
            <Text style={{ fontFamily: 'Roboto', color: '#fff', marginTop: 5, marginLeft: 5 }}>Eletricista/Encanador/Reparos</Text>
          </View>
        </View>
        <ScrollView style={{ height: '55%' }}>
          <Text style={{ fontFamily: 'Roboto', color: '#6495ED', fontWeight: 'bold', marginTop: 15, marginLeft: 15, fontSize: 18 }}>Informações</Text>
          <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 15 }}>
            <Text style={{ fontFamily: 'Roboto', color: '#6495ED', fontWeight: 'bold', fontSize: 14 }}>Usuário desde  01/01/2020</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
            <Text style={{ fontFamily: 'Roboto', color: '#6495ED', fontWeight: 'bold', fontSize: 14 }}>50 serviços realizados</Text>
          </View>

        </ScrollView>

        <View style={{ width: '100%', height: '10%', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={{ backgroundColor: '#6495ED', width: '60%', height: 40, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 5, elevation: 5 }}
          onPress={() => this.openRequest()}>
            <Text style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#fff', fontSize: 16 }}>Solicitar serviço</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
