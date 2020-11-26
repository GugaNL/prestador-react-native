import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

//Custom components
import HeaderSwiper from '../Components/HeaderSwiper'

//Redux
import { connect } from "react-redux"

//Actions
import { changeTypeRegister } from '../Store/Actions/ActionRegister'
import { projectColors } from '../Util/Constants'


class RegisterChooseType extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  navUserRegister() {
    this.props.changeTypeRegister('user')
    this.props.navigation.navigate('SwiperCreateAccount')
  }


  navProviderRegister() {
    this.props.changeTypeRegister('provider')
    this.props.navigation.navigate('SwiperCreateProviderAccount')
  }


  render() {
    //console.log('this.props.typeRegister: ', this.props.typeRegister)
    return (
      <View style={{ flex: 1 }}>
        <HeaderSwiper title='Você é' backButton={false} close={true} pressClose={() => this.props.navigation.goBack()} />
        {/*<View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontFamily: 'roboto', fontSize: 26, color: projectColors.lightBlack, fontWeight: 'bold' }}>Você é</Text>
    </View>*/}

        <View style={{ justifyContent: 'center', flex: 1 }}>
          <TouchableOpacity style={{ backgroundColor: projectColors.mainBlue, width: '90%', height: 90, alignSelf: 'center', borderRadius: 10, justifyContent: 'center', alignItems: 'center', elevation: 5 }}
            onPress={() => this.navUserRegister()}>
            <Icon type='font-awesome' name='male' size={28} color={projectColors.whiteSec} />
            <Text style={{ fontFamily: 'roboto', color: projectColors.white, fontSize: 18 }}>Cliente</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 50, backgroundColor: projectColors.whiteSec, width: '90%', height: 90, alignSelf: 'center', borderRadius: 10, justifyContent: 'center', alignItems: 'center', elevation: 5 }}
            onPress={() => this.navProviderRegister()}>
            <Icon type='font-awesome' name='briefcase' size={26} color={projectColors.lightBlack} />
            <Text style={{ fontFamily: 'roboto', color: projectColors.lightBlack, fontSize: 18 }}>Prestador de serviços</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
    typeRegister: state.RegisterReducer.typeRegister,
  }
}


const mapDispatchToProps = dispatch => (
  {
    changeTypeRegister: value => dispatch(changeTypeRegister(value))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(RegisterChooseType)