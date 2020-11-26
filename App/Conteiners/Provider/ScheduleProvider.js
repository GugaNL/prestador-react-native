import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

//Theme
import { projectColors } from '../../Util/Constants'

//Custom components
import HeaderMain from '../../Components/HeaderMain'

//Temporario
import { scheduleList } from '../../Util/Mocks/MockSchedule'


export default class ScheduleProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scheduleList: null
        }
    }


    componentDidMount() {
        this.setState({ scheduleList: scheduleList })
    }


    openDetails() {
        this.props.navigation.navigate('DetailScheduleService')
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderMain title='Meus serviços agendados' backButton={false} pressBack={() => this.props.navigation.goBack()} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.scheduleList}
                    keyExtractor={(x, i) => i.toString()}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: projectColors.lightBlueSec, paddingVertical: 20, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 15, marginBottom: 15, marginLeft: 10, color: projectColors.lightBlack }}>{item.date}</Text>
                            <TouchableOpacity style={{ backgroundColor: projectColors.white, elevation: 5, paddingVertical: 10, borderTopWidth: 2, borderTopColor: item.status == 'aguardando reagendamento' ? projectColors.mainYellow : projectColors.mainGreen }}
                                onPress={() => this.openDetails()}>
                                {item.status == 'aguardando reagendamento' ? (
                                    <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginLeft: 10, color: projectColors.mainYellow }}>Aguardando confirmação de reagendamento</Text>
                                ) : null}
                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                    <View style={{ borderRightWidth: 2, paddingRight: 10, borderColor: projectColors.lightGray }}>
                                        <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginLeft: 10, color: projectColors.lightBlack }}>{item.time1}</Text>
                                        <Text style={{ alignSelf: 'center' }}>-</Text>
                                        <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginLeft: 10, color: projectColors.lightBlack }}>{item.time2}</Text>
                                    </View>
                                    <View style={{ marginLeft: 15, marginRight: 10 }}>
                                        <Text style={{ fontFamily: 'Roboto', fontSize: 15, fontWeight: 'bold', color: projectColors.mainBlue }}>{item.description}</Text>
                                        <Text>{""}</Text>
                                        <Text style={{ color: projectColors.gray }}>{item.professional}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        )
    }
}
