import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'


//Custom components
import HeaderMain from '../../Components/HeaderMain'

//Theme
import { projectColors } from '../../Util/Constants'

//Styles
import { styles } from './styles/NotificationsStyles'


//Temporário
import { notificationsList } from '../../Util/Mocks/MockNotifications'


export default class Notifications extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notifications: [],
            isLoading: null
        }
    }


    componentDidMount() {
        this.setState({ notifications: notificationsList, isLoading: false })
    }


    openDetails(item) {

    }



    render() {
        return (
            <View style={styles.container}>
                <HeaderMain title='Notificações' backButton={false} pressBack={() => this.props.navigation.goBack()} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.notifications}
                    keyExtractor={(x, i) => i.toString()}
                    renderItem={({ item }) => (
                        <View style={[styles.contFlat, {
                            borderLeftColor: item.type == 'cancel' ?
                                projectColors.tomato : item.type == 'remember' ?
                                    projectColors.mainBlue : item.type == 'reschedule' ?
                                        projectColors.mainYellow : projectColors.white,
                            backgroundColor: item.seen === true ? projectColors.whiteSec : projectColors.white
                        }]}>
                            <TouchableOpacity style={styles.btnFlat} onPress={() => this.openDetails(item)}>
                                <View style={{ marginLeft: 15, flexDirection: 'row' }}>

                                    <View style={{ width: '90%' }}>
                                        <Text style={[styles.txtDesc, { color: item.seen === false ? projectColors.lightBlack : projectColors.lightGray, fontWeight: 'bold' }]}>Serviço {item.description}</Text>
                                        {item.type == 'cancel' ? (
                                            <Text style={[styles.txtDesc, { color: item.seen === false ? projectColors.lightBlack : projectColors.lightGray, fontWeight: 'bold' }]}>cancelado!</Text>
                                        ) : null}
                                        {item.type == 'remember' ? (
                                            <Text style={[styles.txtDesc, { color: item.seen === false ? projectColors.lightBlack : projectColors.lightGray, fontWeight: 'bold' }]}>é hoje!</Text>
                                        ) : null}
                                        {item.type == 'reschedule' ? (
                                            <Text style={[styles.txtDesc, { color: item.seen === false ? projectColors.lightBlack : projectColors.lightGray, fontWeight: 'bold' }]}>deseja ser reagendado</Text>
                                        ) : null}
                                    </View>

                                    <View style={{ width: '10%' }}>
                                        <TouchableOpacity>
                                            <Icon type='font-awesome' name='close' color={projectColors.mainRed} size={15} />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                                <View style={{ marginRight: 15, alignSelf: 'flex-end' }}>
                                    <Text style={[styles.txtDate]}>{item.date}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        )
    }
}
