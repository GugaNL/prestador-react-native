import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { Icon, Avatar, AirbnbRating, Overlay } from 'react-native-elements'

import DialogInput from 'react-native-dialog-input'

import CalendarPicker from 'react-native-calendar-picker'

//Theme
import { projectColors } from '../../Util/Constants'

//Custom components
import HeaderMain from '../../Components/HeaderMain'

//Temporário
import jason from '../../Images/professionals/jason.jpg'


export default class DetailScheduleService extends Component {
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
            <View style={{ flex: 1, backgroundColor: projectColors.lightGray }}>
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
                    <Text style={{ fontFamily: 'Roboto', fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: projectColors.lightBlack }}>Manutenção ar condicionado</Text>
                    <View style={{ flexDirection: 'row', marginTop: 25, width: '90%', alignSelf: 'center', alignItems: 'center' }}>
                        <Icon type='font-awesome' name='info-circle' color={projectColors.gray} size={22} />
                        <Text style={{ fontFamily: 'Roboto', color: projectColors.lightBlack, marginLeft: 7 }}>Limpeza total do ar condicionado, troca do gás e das mangueiras</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 25, width: '90%', alignSelf: 'center', alignItems: 'center' }}>
                        <Icon type='font-awesome' name='map-marker' color={projectColors.tomato} size={25} />
                        <Text style={{ fontFamily: 'Roboto', color: projectColors.lightBlack, marginLeft: 7 }}>Avenida Barreiras 792, Quadra 14 Petrolândia-PE</Text>
                    </View>
                    <View style={{ marginTop: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', alignItems: 'center' }}>
                        <Icon type='font-awesome' name='clock-o' color={projectColors.mainBlue} size={20} />
                        <Text style={{ fontFamily: 'Roboto', color: projectColors.lightBlack, marginLeft: 7 }}>Entre 10:00 - 10:30</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 25, width: '90%', alignSelf: 'center', alignItems: 'center' }}>
                        <Icon type='materialIcons' name='monetization-on' color={projectColors.mainGreen} size={20} />
                        <Text style={{ fontFamily: 'Roboto', color: projectColors.lightBlack, marginLeft: 7, fontWeight: 'bold' }}>R$ 150,00</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: projectColors.mainBlue, marginTop: 15, paddingTop: 10, paddingBottom: 10, elevation: 5 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <Icon type='font-awesome' name='vcard' color={projectColors.white} size={20} />
                        {<Text style={{ fontFamily: 'Roboto', color: projectColors.white, marginLeft: 10, fontWeight: 'bold', fontSize: 16 }} >Profissional</Text>}
                    </View>
                    <View style={{ marginLeft: 10, marginTop: 15, flexDirection: 'row' }}>
                        <Avatar rounded source={jason} size='large' />
                        <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Roboto', color: projectColors.white, fontWeight: 'bold' }}>Jason Statham</Text>
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

                <View style={{ flexDirection: 'row', backgroundColor: projectColors.white, alignItems: 'center', height: 40 }}>
                    <TouchableOpacity style={{ width: '50%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}
                        onPress={() => this.alertReSchedule()}>
                        <Icon type='materialIcons' name='event-busy' color={projectColors.mainYellow} size={20} />
                        <Text style={{ fontFamily: 'Roboto', color: projectColors.mainYellow, fontWeight: 'bold', fontSize: 14, marginLeft: 5 }}>Reagendar serviço</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '50%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}
                        onPress={() => this.alertCancelSchedule()}>
                        <Icon type='materialIcons' name='do-not-disturb' color={projectColors.mainRed} size={18} />
                        <Text style={{ fontFamily: 'Roboto', color: projectColors.mainRed, fontWeight: 'bold', fontSize: 14, marginLeft: 5 }}>Cancelar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
