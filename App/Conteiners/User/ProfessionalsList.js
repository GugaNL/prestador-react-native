import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { Avatar, AirbnbRating } from 'react-native-elements'

//Images
import { images } from '../../Util/ImagesTheme'

//Custom components
import HeaderMain from '../../Components/HeaderMain'
import Search from '../../Components/Search'

//Theme
import { projectColors } from '../../Util/Constants'

//Temporário
import { professionals } from '../../Util/Mocks/MockProfessionals'


export default class ProfessionalsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profList: {},
            profListBackup: {},
            isLoading: true,
            searchTerm: '',
        }
    }


    componentDidMount() {
        this.setState({ profList: professionals, profListBackup: professionals, isLoading: false })
    }


    openDetails(item) {
        this.props.navigation.navigate('ProfessionalDetails')
    }


    searchFilter = (text) => {
        let listSearch = this.state.profListBackup
        let newData = listSearch.filter(item => {
            const itemData = `${item.name.toLowerCase()}`
            const textData = text.toLowerCase()
            return itemData.indexOf(textData) > -1
        })
        if (newData.length == 0) {
            this.setState({ empty: true })
        } else {
            this.setState({ empty: false })
        }
        this.setState({ searchTerm: text, profList: newData })
    }



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
                <HeaderMain title='Profissionais' backButton={true} pressBack={() => this.props.navigation.goBack()} />
                <Search searchTerm={this.state.searchTerm} placeholder='Pesquisa por nome' callParentSearch={this.searchFilter.bind()} />

                {(this.state.profList.length > 0 && this.state.isLoading == false) ? (
                    <FlatList
                        //style={{ marginTop: 20 }}
                        showsVerticalScrollIndicator={false}
                        data={this.state.profList}
                        keyExtractor={(x, i) => i.toString()}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1, flexBasis: 0, marginBottom: 20, marginTop: 15, marginLeft: 15, marginRight: 15, backgroundColor: '#fff', marginBottom: 20, borderRadius: 5, elevation: 5 }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => this.openDetails(item)}>
                                    <View style={{ padding: 8 }}>
                                        {item.photo ? (
                                            <Avatar rounded source={item.photo} size='large' />
                                        ) : (
                                                <Avatar rounded icon={{ name: 'user', type: 'font-awesome' }} size='large' />
                                            )}
                                    </View>
                                    <View style={{ alignItems: 'flex-start', marginLeft: 15, width: '70%' }}>
                                        <Text style={{ marginTop: 2, fontFamily: 'Roboto', fontSize: 16, fontWeight: 'bold', color: '#333', textAlign: 'left' }}>{item.name}</Text>
                                        <Text style={{ marginTop: 5, fontFamily: 'Roboto', color: '#d3d3d3' }}>{item.description}</Text>
                                        <AirbnbRating
                                            size={15}
                                            count={5}
                                            showRating={false}
                                            isDisabled
                                            ratingCount={5}
                                            defaultRating={item.rating}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                ) : (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={images.emptySearch} resizeMode='contain' />
                            <Text style={{ fontFamily: 'roboto', fontSize: 16, fontWeight: 'bold', color: projectColors.mainBlue, marginTop: 15 }}>Não foram encontrados resultados</Text>
                        </View>
                    )}
            </View>
        )
    }
}
