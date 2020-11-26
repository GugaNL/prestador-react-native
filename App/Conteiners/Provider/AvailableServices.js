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

//Actions
import { changeAvailableServices, changeDetailAvailableService } from '../../Store/Actions/ActionAvailableServices'

//Redux
import { connect } from "react-redux"

//Temporário
import { availableServices } from '../../Util/Mocks/MockAvailableServices'

class AvailableServices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            servicesList: {},
            servicesListBackup: {},
            isLoading: true,
            searchTerm: '',
        }
    }

    componentDidMount() {
        this.setState({ servicesList: availableServices, servicesListBackup: availableServices, isLoading: false })
    }


    openDetails(item) {
        this.props.changeDetailAvailableService(item)
        this.props.navigation.navigate('DetailAvailableService')
    }


    searchFilter = (text) => {
        let listSearch = this.state.servicesListBackup
        let newData = listSearch.filter(item => {
            const itemData = `${item.title.toLowerCase()}`
            const textData = text.toLowerCase()
            return itemData.indexOf(textData) > -1
        })
        if (newData.length == 0) {
            this.setState({ empty: true })
        } else {
            this.setState({ empty: false })
        }
        this.setState({ searchTerm: text, servicesList: newData })
    }



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
                <HeaderMain title='Profissionais' backButton={true} pressBack={() => this.props.navigation.goBack()} />
                <Search searchTerm={this.state.searchTerm} placeholder='Pesquisa por nome' callParentSearch={this.searchFilter.bind()} />

                {(this.state.servicesList.length > 0 && this.state.isLoading == false) ? (
                    <FlatList
                        //style={{ marginTop: 20 }}
                        showsVerticalScrollIndicator={false}
                        data={this.state.servicesList}
                        keyExtractor={(x, i) => i.toString()}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1, flexBasis: 0, marginBottom: 20, marginTop: 15, marginLeft: 15, marginRight: 15, backgroundColor: '#fff', marginBottom: 20, borderRadius: 5, elevation: 5 }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => this.openDetails(item)}>
                                    <View style={{ padding: 8 }}>
                                        {item.picture ? (
                                            <Avatar rounded source={item.picture} size='large' />
                                        ) : (
                                                <Avatar rounded icon={{ name: 'user', type: 'font-awesome' }} size='large' />
                                            )}
                                    </View>
                                    <View style={{ alignItems: 'flex-start', marginLeft: 15, width: '70%' }}>
                                        <Text style={{ marginTop: 2, fontFamily: 'Roboto', fontSize: 16, fontWeight: 'bold', color: '#333', textAlign: 'left' }}>{item.title}</Text>
                                        <Text style={{ marginTop: 5, fontFamily: 'Roboto', color: '#d3d3d3' }}>{item.address}</Text>
                                        <AirbnbRating
                                            size={10}
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


const mapStateToProps = state => (
    {
        availableServices: state.AvailableServiceReducer.availableServices
    }
)


const mapDispatchToProps = dispatch => (
    {
        changeAvailableServices: values => dispatch(changeAvailableServices(values)),
        changeDetailAvailableService: values => dispatch(changeDetailAvailableService(values))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(AvailableServices)