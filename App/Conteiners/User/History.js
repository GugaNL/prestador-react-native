import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'

//Images
import { images } from '../../Util/ImagesTheme'

//Custom components
import HeaderMain from '../../Components/HeaderMain'
import Search from '../../Components/Search'

//Theme
import { projectColors } from '../../Util/Constants'

//Temporário
import { historyServices } from '../../Util/Mocks/MockHistory'



export default class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            historyList: {},
            historyListBackup: {},
            searchTerm: '',
            isLoading: true
        }
    }


    componentDidMount() {
        this.setState({ historyList: historyServices, historyListBackup: historyServices, isLoading: false })
    }


    openDetails(item) {

    }


    searchFilter = (text) => {
        let listSearch = this.state.historyListBackup
        let newData = listSearch.filter(item => {
            const itemData = `${item.descripton.toLowerCase()} ${item.professional.toLowerCase()}`
            const textData = text.toLowerCase()
            return itemData.indexOf(textData) > -1
        })
        if (newData.length == 0) {
            this.setState({ empty: true })
        } else {
            this.setState({ empty: false })
        }
        this.setState({ searchTerm: text, historyList: newData })
    }


    render() {
        let imageTypeService = ''

        return (
            <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
                <HeaderMain title='Histórico dos serviços' backButton={true} pressBack={() => this.props.navigation.goBack()} />
                <Search searchTerm={this.state.searchTerm} placeholder='Serviço ou profissional' callParentSearch={this.searchFilter.bind()} />

                {(this.state.historyList.length > 0 && this.state.isLoading == false) ? (
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.historyList}
                        keyExtractor={(x, i) => i.toString()}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1, flexBasis: 0, marginBottom: 20, marginTop: 15, marginLeft: 15, marginRight: 15, backgroundColor: projectColors.white, marginBottom: 20, borderRadius: 5, paddingTop: 10, paddingBottom: 10, elevation: 5, borderTopWidth: 2, borderTopColor: item.status == 'finalizado' ? projectColors.mainGreen : projectColors.mainYellow }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => this.openDetails(item)}>
                                    <View style={{ width: '25%', padding: 8, backgroundColor: '#fbfbfb', borderRadius: 50, alignItems: 'center' }}>
                                        {(() => {
                                            switch (item.type) {
                                                case 'manutencao':
                                                    imageTypeService = images.hammer
                                                    break
                                                case 'limpeza':
                                                    imageTypeService = images.houseKeeper
                                                    break
                                                case 'instalacao':
                                                    imageTypeService = images.drill
                                                default:
                                                    break
                                            }
                                        })()}
                                        <Image source={imageTypeService} resizeMode='contain' />
                                    </View>
                                    <View style={{ alignItems: 'flex-start', width: '75%' }}>
                                        <Text style={{ marginTop: 2, marginLeft: 5, fontFamily: 'Roboto', fontSize: 16, fontWeight: 'bold', color: projectColors.lightBlack }}>{item.descripton}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ width: '80%' }}>
                                                <Text style={{ marginTop: 5, marginLeft: 5, fontFamily: 'Roboto', color: '#d3d3d3' }}>{item.professional}</Text>
                                                <Text style={{ marginTop: 5, marginLeft: 5, fontFamily: 'Roboto', color: '#d3d3d3' }}>{item.date}</Text>
                                            </View>
                                            <View style={{ width: '20%', justifyContent: 'flex-end' }}>
                                                <View style={{ backgroundColor: item.status == 'finalizado' ? projectColors.mainGreen : projectColors.mainYellow, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                                                    <Text style={{ fontFamily: 'roboto', fontSize: 14, fontWeight: 'bold', color: projectColors.white }}>{item.value}</Text>
                                                </View>
                                            </View>
                                        </View>
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
