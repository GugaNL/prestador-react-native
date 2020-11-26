import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { Card, Icon } from 'react-native-elements'

//Custom components
import HeaderMain from '../../Components/HeaderMain'

//Theme
import { projectColors } from '../../Util/Constants'

//Mock temporário
import { profileMenu } from '../../Util/Mocks/MockProviderMenuOptions'


export default class ProviderMainScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profileMenu: null,
            isLoading: true
        }

    }


    componentDidMount() {
        this.setState({ profileMenu: profileMenu })
    }


    openList(itemId) {
        switch (itemId) {
            case 1:
                this.props.navigation.navigate('AvailableServices')
                break
            case 2:
                this.props.navigation.navigate('ServicesProvided')
                break
            default:
                break
        }
    }


    toggleSideMenu() {
        this.props.navigation.openDrawer()
    }


    render() {
        const columns = 2
        return (
            <View style={{ flex: 1 }}>
                <HeaderMain title='' leftIcon='sideMenu' pressSideMenu={() => this.toggleSideMenu()} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={columns}
                    data={createRows(this.state.profileMenu, columns)}
                    keyExtractor={(x, i) => i.toString()}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexBasis: 0, marginBottom: 10, marginTop: 20 }}>
                            {item.empty ? (
                                <View style={{ backgroundColor: 'transparent' }} />
                            ) : (
                                    <View style={{ elevation: 5, borderRadius: 5, justifyContent: 'center', paddingVertical: 10, margin: 10 /*, width: '90%'*/ }}>
                                        <TouchableOpacity onPress={() => this.openList(item.id)}>
                                            <Icon type={item.typeIcon} name={item.icon} size={40} color={projectColors.gray} />
                                            <View style={{ width: '80%', alignItems: 'center', alignSelf: 'center' }}>
                                                <Text style={{ marginTop: 10, marginLeft: 5, fontFamily: 'Roboto', fontWeight: 'bold', color: '#333', textAlign: 'left' }}>{item.title}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )}
                        </View>
                    )}

                />
            </View>
        )
    }
}


function createRows(data, columns) {
    if (data) {
        const rows = Math.floor(data.length / columns)
        let lastRowElements = data.length - rows * columns
        if (lastRowElements) {
            for (var i = lastRowElements; i < columns; i++) {
                data.push({
                    id: `empty-${lastRowElements}`,
                    name: `empty-${lastRowElements}`,
                    empty: true
                })
            }
        }
        return data
    }
}