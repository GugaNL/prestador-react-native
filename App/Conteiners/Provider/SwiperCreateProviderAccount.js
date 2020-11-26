import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

//Styles
import { styles } from './styles/SwiperCreateAccountStyles'

import Swiper from 'react-native-swiper'

//Screen for swipe
import RegisterStepBasic from '../../Conteiners/RegisterStepBasic'
import RegisterStepAddress from '../../Conteiners/RegisterStepAddress'
import RegisterStepFinish from '../../Conteiners/RegisterStepFinish'
import RegisterStepSkills from './RegisterStepSkills'

//Custom components
import HeaderSwiper from '../../Components/HeaderSwiper'

//Theme
import { projectColors } from '../../Util/Constants'

//Redux
import { connect } from "react-redux"

//Actions
//import { changeTypeRegister } from '../Store/Actions/ActionRegister'


class SwiperCreateProviderAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            indexScreen: 0,
            errorEmptyBasicData: false,
            errorEmptyAddressData: false,
            errorEmptySkill: false
        }
    }

    componentDidMount() {
        this.setState({ index: this.refs.swiper.state.index })
    }


    nextSlider() {
        let indexTab = this.refs.swiper.state.index + 1
        this.refs.swiper.scrollBy(1)
        this.setState({ indexScreen: indexTab })
    }

    
    goPrevious() {
        let indexTab = this.refs.swiper.state.index - 1
        this.refs.swiper.scrollBy(-1)
        this.setState({ indexScreen: indexTab })
    }


    render() {
        console.log('indexScreen: ', this.state.indexScreen)
        return (
            <View style={{ flex: 1, backgroundColor: projectColors.lightBlue }}>
                {this.state.indexScreen == 0 ? (
                    <HeaderSwiper title='Dados básicos' backButton={false} close={true} pressClose={() => this.props.navigation.goBack()} />
                ) : null}
                {this.state.indexScreen == 1 ? (
                    <HeaderSwiper title='Dados de endereço' backButton={true} close={false} pressBack={() => this.goPrevious()} />
                ) : null}
                {this.state.indexScreen == 2 ? (
                    <HeaderSwiper title='Dados técnicos' backButton={true} close={false} pressBack={() => this.goPrevious()} />
                ) : null}
                {this.state.indexScreen == 3 ? (
                    <HeaderSwiper title='' backButton={false} close={false} pressBack={() => this.props.navigation.goBack()} />
                ) : null}

                <Swiper ref='swiper' index={this.state.index} containerStyle={styles.wrapper} showsButtons={false}
                    loop={false} scrollEnabled={false} showsPagination={false} >
                    <View style={styles.slide}>
                        <RegisterStepBasic nextSlider={this.nextSlider.bind(this)} />
                    </View>
                    <View style={styles.slide}>
                        <RegisterStepAddress nextSlider={this.nextSlider.bind(this)} />
                    </View>
                    <View style={styles.slide}>
                        <RegisterStepSkills nextSlider={this.nextSlider.bind(this)} />
                    </View>
                    <View style={styles.slide}>
                        <RegisterStepFinish />
                        <TouchableOpacity style={styles.nextButton}
                            onPress={() => this.props.navigation.navigate('LoginScreen')}>
                            <Text style={styles.nextText}>Finalizar</Text>
                        </TouchableOpacity>
                    </View>
                </Swiper>

            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        typeRegister: state.RegisterReducer.typeRegister,
        categoriesRegister: state.RegisterReducer.categoriesRegister
    }
}


const mapDispatchToProps = dispatch => (
    {
        //changeTypeRegister: value => dispatch(changeTypeRegister(value))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SwiperCreateProviderAccount)