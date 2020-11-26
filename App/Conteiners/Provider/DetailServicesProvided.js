import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { Icon, Avatar, AirbnbRating, Overlay } from 'react-native-elements'

import DialogInput from 'react-native-dialog-input'

import CalendarPicker from 'react-native-calendar-picker'

//Theme
import { projectColors } from '../../Util/Constants'

//Custom components
import HeaderMain from '../../Components/HeaderMain'


//Redux
import { connect } from "react-redux"

//Temporário
import jason from '../../Images/professionals/jason.jpg'


class DetailServicesProvided extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDialogVisible: false,
            reason: '',
            overlayVisible: false
        }
    }


    alertReSchedule() {
        Alert.alert(
            'Confirmação',
            'Deseja realmente reagendar o serviço com o profissional?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                    style: 'cancel',
                },
                { text: 'Ok', onPress: () => this.reScheduleService() },
            ],
            { cancelable: false },
        )
    }


    reScheduleService() {
        this.setState({ overlayVisible: true })
    }


    alertCancelSchedule() {
        Alert.alert(
            'Confirmação',
            'Deseja realmente cancelar o serviço?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                    style: 'cancel',
                },
                { text: 'Ok', onPress: () => this.showDialog() },
            ],
            { cancelable: false },
        )
    }


    showDialog() {
        this.setState({ isDialogVisible: true })
    }


    showConfirmCancelSchedule() {
        this.setState({ isDialogVisible: false })
        Alert.alert(
            'Cancelamento concluído',
            'O serviço foi cancelado e o profissional receberá o aviso',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                    style: 'cancel',
                },
                { text: 'Ok', onPress: () => { } },
            ],
            { cancelable: false },
        )
    }


    onDateChange(date, type) {
        console.log('Data: ', date._i)

    }


    confirmChangeDate() {
        this.setState({ overlayVisible: false })
        Alert.alert(
            'Reagendamento concluído',
            'O profissional será notificado e em seguida lhe daremos a resposta',
            [
                { text: 'Ok', onPress: () => { } },
            ],
            { cancelable: false },
        )
    }




    render() {
        const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        const minDate = new Date()
        return (
            <View style={{ flex: 1, backgroundColor: projectColors.whiteSec }}>
                <HeaderMain title='Detalhes do serviço' backButton={true} pressBack={() => this.props.navigation.goBack()} />

                <DialogInput isDialogVisible={this.state.isDialogVisible}
                    title={"Informações"}
                    message={"Motivo do cancelamento"}
                    hintInput={"Digite aqui"}
                    submitText={"Ok"}
                    cancelText={"Cancelar"}
                    submitInput={(inputText) => this.showConfirmCancelSchedule(inputText)}
                    closeDialog={() => this.setState({ isDialogVisible: false })}>
                </DialogInput>

                <Overlay isVisible={this.state.overlayVisible} overlayStyle={{ width: '95%' }} onBackdropPress={() => this.setState({ overlayVisible: false })}>
                    <View>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 16, marginBottom: 5, alignSelf: 'center', fontWeight: 'bold', color: projectColors.lightBlack }}>Qual nova data desejada?</Text>
                        <CalendarPicker weekdays={week} months={months} startFromMonday={false}
                            nextTitle='Próximo' previousTitle='Anterior' minDate={minDate}
                            selectedDayColor={projectColors.mainBlue}
                            selectedDayTextColor={projectColors.white}
                            onDateChange={(date, type) => this.onDateChange(date, type)}
                            scaleFactor={400}
                            dayLabelsWrapper={{ borderBottomWidth: 0, borderTopWidth: 0.5 }}
                            nextTitleStyle={{ color: projectColors.mainBlue, fontWeight: 'bold' }}
                            previousTitleStyle={{ color: projectColors.mainBlue, fontWeight: 'bold' }}
                        //selectedRangeStartStyle={{ borderBottomRightRadius: borderSelectedDay, borderTopRightRadius: borderSelectedDay }}
                        />
                        <TouchableOpacity style={{ width: '80%', height: 40, backgroundColor: projectColors.mainBlue, elevation: 5, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 5 }}
                            onPress={() => this.confirmChangeDate()}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: projectColors.white }}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </Overlay>



                <View style={{ backgroundColor: projectColors.white, paddingTop: 15, paddingBottom: 15, elevation: 5 }}>
                    <View style={{ flexDirection: 'row', marginTop: 25, width: '90%', alignSelf: 'center', alignItems: 'center' }}>
                        <Icon type='font-awesome' name='info-circle' color={projectColors.gray} size={22} />
                        <Text style={{ fontFamily: 'Roboto', color: projectColors.lightBlack, marginLeft: 8 }}>{this.props.detailServiceProvided.description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 25, width: '90%', alignSelf: 'center', alignItems: 'center' }}>
                        <Icon type='font-awesome' name='map-marker' color={projectColors.tomato} size={25} />
                        <Text style={{ fontFamily: 'Roboto', color: projectColors.lightBlack, marginLeft: 8 }}>{this.props.detailServiceProvided.address}</Text>
                    </View>
                    <View style={{ marginTop: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', alignItems: 'center' }}>
                        <Icon type='antdesign' name='calendar' color={projectColors.mainBlue} size={20} />
                        <Text style={{ fontFamily: 'Roboto', color: projectColors.lightBlack, marginLeft: 8 }}>{this.props.detailServiceProvided.date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 25, width: '90%', alignSelf: 'center', alignItems: 'center' }}>
                        <Icon type='materialIcons' name='monetization-on' color={projectColors.mainGreen} size={22} />
                        <Text style={{ fontFamily: 'Roboto', color: projectColors.mainGreen, marginLeft: 8, fontWeight: 'bold', fontSize: 16 }}>R$ {this.props.detailServiceProvided.value}</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: projectColors.mainBlue, marginTop: 15, paddingTop: 10, paddingBottom: 10, elevation: 5 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <Icon type='font-awesome' name='vcard' color={projectColors.white} size={20} />
                        {<Text style={{ fontFamily: 'Roboto', color: projectColors.white, marginLeft: 10, fontWeight: 'bold', fontSize: 16 }} >Cliente</Text>}
                    </View>
                    <View style={{ marginLeft: 10, marginTop: 15, flexDirection: 'row' }}>
                        <Avatar rounded source={this.props.detailServiceProvided.customerPhoto} size='large' />
                        <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Roboto', color: projectColors.white, fontWeight: 'bold' }}>{this.props.detailServiceProvided.customer}</Text>
                            <AirbnbRating
                                size={10}
                                count={5}
                                showRating={false}
                                isDisabled
                                ratingCount={5}
                                defaultRating={3}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


const mapStateToProps = state => (
    {
        detailServiceProvided: state.ServiceProvidedReducer.detailServiceProvided
    }
)


const mapDispatchToProps = dispatch => (
    {}
)

export default connect(mapStateToProps, mapDispatchToProps)(DetailServicesProvided)