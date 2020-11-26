import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import { Avatar, AirbnbRating, Icon } from 'react-native-elements'

//Toast message
import Toast, {DURATION} from 'react-native-easy-toast'

//Custom components
import HeaderMain from '../../Components/HeaderMain'

//Theme
import { projectColors } from '../../Util/Constants'

//Temporário
import { favoriteList } from '../../Util/Mocks/MockFavoriteList'



export default class FavoriteList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoriteList: null
        }
    }


    componentDidMount() {
        this.setState({ favoriteList: favoriteList })
    }


    openDetails(item) {
        this.props.navigation.navigate('ProfessionalDetails')
    }


    unFavorite() {
        Alert.alert(
            'Confirmação',
            'Deseja removê-lo dos favoritos?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                    style: 'cancel',
                },
                { text: 'Ok', onPress: () => this.removeSelectedFavorite() },
            ],
            { cancelable: false },
        )
    }


    removeSelectedFavorite() {
        this.refs.toast.show('O profissional foi removido dos seus favoritos')
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
                <HeaderMain title='Favoritos' backButton={false} pressBack={() => this.props.navigation.goBack()} />
                <Toast ref="toast" style={{ backgroundColor: projectColors.gray }} fadeInDuration={750} fadeOutDuration={1000} opacity={0.8} textStyle={{color: projectColors.white }} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.favoriteList}
                    keyExtractor={(x, i) => i.toString()}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexBasis: 0, marginBottom: 20, marginTop: 15, marginLeft: 15, marginRight: 15, backgroundColor: '#fff', marginBottom: 20, borderRadius: 5, elevation: 5, paddingTop: 10, paddingBottom: 10 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => this.openDetails(item)}>
                                <View style={{ padding: 8 }}>
                                    {item.photo ? (
                                        <Avatar rounded source={item.photo} size='large' />
                                    ) : (
                                            <Avatar rounded icon={{ name: 'user', type: 'font-awesome' }} size='large' />
                                        )}
                                </View>
                                <View style={{ alignItems: 'flex-start', marginLeft: 15, width: '70%' }}>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: '90%' }}>
                                            <Text style={{ marginTop: 2, fontFamily: 'Roboto', fontSize: 16, fontWeight: 'bold', color: '#333', textAlign: 'left' }}>{item.name}</Text>
                                        </View>
                                        <View style={{ width: '10%' }}>
                                            <TouchableOpacity onPress={() => this.unFavorite()}>
                                                <Icon type='font-awesome' name='star' color='#FFD700' size={25} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <Text style={{ marginTop: 5, fontFamily: 'Roboto', color: '#d3d3d3' }}>{item.description}</Text>
                                    <AirbnbRating
                                        size={10}
                                        count={5}
                                        showRating={false}
                                        isDisabled
                                        ratingCount={5}
                                        defaultRating={item.rating}
                                    />
                                    <Text style={{ marginTop: 5, fontFamily: 'Roboto', color: '#d3d3d3' }}>{item.services} serviços com ele</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        )
    }
}
