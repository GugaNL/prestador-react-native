import { StyleSheet, Platform } from 'react-native'
import { projectColors } from '../../Util/Constants'


export const SearchStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        //top: Platform.select({ ios: 45, android: 25 })
    },
    search: {
        backgroundColor: 'transparent',
        width: '100%',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    inputSearch: {
        backgroundColor: projectColors.lightGray,
    },
})