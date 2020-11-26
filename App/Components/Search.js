import React, { Component } from 'react'
import { View } from 'react-native'
import { SearchBar, Icon } from 'react-native-elements'
import { SearchStyles } from './styles/SearchStyles'


export default class Search extends Component {

    render() {
        const { searchTerm, placeholder } = this.props
        return (
            <View style={SearchStyles.container}>
                <SearchBar containerStyle={SearchStyles.search} inputContainerStyle={SearchStyles.inputSearch}
                    lightTheme round placeholder={placeholder}
                    value={searchTerm}
                    //clearIcon={<Icon type='font-awesome' name='star' color='#FFD700' size={20} />}
                    onChangeText={(text) => this.props.callParentSearch(text)} autoCorrect={false} />
            </View>
        )
    }
}