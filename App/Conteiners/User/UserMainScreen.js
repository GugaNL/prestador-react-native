import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'

//Custom components
import HeaderMain from '../../Components/HeaderMain'

//Mock temporário
import { categories } from '../../Util/Mocks/MockCategory'


export default class UserMainScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: null,
            isLoading: true
        }
    }


    componentDidMount() {
        this.setState({ categories: categories })
    }


    openList() { // Trazer lista componentizada filtrando profissional por categoria
        this.props.navigation.navigate('ProfessionalsList')
    }


    toggleSideMenu() {
        this.props.navigation.openDrawer()
    }


    render() {
        const columns = 2
        return (
            <View style={{ flex: 1 }}>
                <HeaderMain title='Serviços' leftIcon='sideMenu' pressSideMenu={() => this.toggleSideMenu()} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={columns}
                    data={createRows(this.state.categories, columns)}
                    keyExtractor={(x, i) => i.toString()}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexBasis: 0, marginBottom: 10 }}>
                            {item.empty ? (
                                <View style={{ backgroundColor: 'transparent' }} />
                            ) : (
                                    <Card containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, elevation: 5, borderRadius: 5 }}>
                                        <TouchableOpacity onPress={() => this.openList()}>
                                            <Image source={item.picture} style={{ width: '100%', height: 150 }} resizeMode='cover' />
                                            <View style={{ width: '80%' }}>
                                                <Text style={{ marginTop: 10, marginLeft: 5, fontFamily: 'Roboto', fontWeight: 'bold', color: '#333', textAlign: 'left' }}>{item.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Card>
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