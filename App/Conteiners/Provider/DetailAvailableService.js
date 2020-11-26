import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Avatar, AirbnbRating, Divider, Icon } from 'react-native-elements'

//Images
import { images } from '../../Util/ImagesTheme'

//Custom components
import HeaderMain from '../../Components/HeaderMain'

//Styles
import { styles } from './styles/DetailAvailableServiceStyles'

//Theme
import { projectColors } from '../../Util/Constants'

//Redux
import { connect } from "react-redux"


class DetailAvailableService extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    openChat() {
        this.props.navigation.navigate('Chat')
    }


    render() {
        return (
            <View style={styles.container}>
                <HeaderMain title='Informação do serviço' backButton={true} pressBack={() => this.props.navigation.goBack()} />
                <View style={styles.card}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '90%' }}>
                                <Text style={styles.textTitleService}>{this.props.detailAvailableService.title}</Text>
                            </View>
                            <View style={{ alignSelf: 'flex-end', width: '10%' }}>
                                <Icon type='font-awesome' name='info-circle' color={projectColors.mainBlue} size={22} />
                            </View>
                        </View>
                        <Text style={styles.labelDescription}>Descrição</Text>
                        <Text style={styles.textDescription}>{this.props.detailAvailableService.description}</Text>
                        <Text style={styles.labelDescription}>Observações</Text>
                        <Text style={styles.textDescription}>{this.props.detailAvailableService.obs ? this.props.detailAvailableService.obs : 'n/a'}</Text>
                        <Divider style={{ marginTop: 20, marginBottom: 10 }} />
                        <View style={styles.avatarCont}>
                            <Avatar rounded source={this.props.detailAvailableService.photo} size='medium' containerStyle={styles.avatar} />
                            <View style={styles.ratingCont}>
                                <Text>{this.props.detailAvailableService.customer}</Text>
                                <AirbnbRating
                                    size={10}
                                    count={5}
                                    showRating={false}
                                    isDisabled
                                    ratingCount={5}
                                    defaultRating={this.props.detailAvailableService.rating}
                                />
                            </View>
                        </View>
                        <View style={styles.infoCustomerCont}>
                            <View style={{ width: '40%' }}>
                                <Text style={styles.labelAddress}>Endereço do serviço</Text>
                            </View>
                            <View style={{ width: '60%' }}>
                                <Text style={[styles.textDescription, { marginLeft: 8 }]}>{this.props.detailAvailableService.address}, {this.props.detailAvailableService.city}</Text>
                            </View>
                        </View>
                        <Divider style={{ marginTop: 20, marginBottom: 10 }} />
                        <View style={{ alignSelf: 'center', marginTop: 10 }}>
                            <Text style={styles.labelAddress}>Horário disponível</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                            <Text style={styles.textDescription}>{this.props.detailAvailableService.timeAvailabilityOne} - {this.props.detailAvailableService.timeAvailabilityTwo}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                            {this.props.detailAvailableService.timeAvailabilityTree ? (
                                <Text style={styles.textDescription}>{this.props.detailAvailableService.timeAvailabilityTree} - {this.props.detailAvailableService.timeAvailabilityFour}</Text>
                            ) : null}
                        </View>
                        <Divider style={{ marginTop: 20, marginBottom: 10 }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[styles.labelAddress, { fontSize: 18 }]}>Valor</Text>
                            <Text style={styles.textValue}>R$ {this.props.detailAvailableService.desiredPrice}</Text>
                            {this.props.detailAvailableService.isNegociable ? (
                                <TouchableOpacity style={styles.btnNegotiation} onPress={() => this.openChat()} >
                                    <Text style={styles.labelNegociable}>Negociar valor</Text>
                                </TouchableOpacity>
                            ) : null}
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.buttonAccept}
                    onPress={() => { }}>
                    <Text style={styles.textBtnAccept}>Tenho interesse</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const mapStateToProps = state => (
    {
        detailAvailableService: state.AvailableServiceReducer.detailAvailableService
    }
)


const mapDispatchToProps = dispatch => (
    {}
)

export default connect(mapStateToProps, mapDispatchToProps)(DetailAvailableService)