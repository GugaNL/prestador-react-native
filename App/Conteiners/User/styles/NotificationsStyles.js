import { StyleSheet } from 'react-native'
import { projectColors } from '../../../Util/Constants'


export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contFlat: {
        flex: 1,
        flexBasis: 0,
        marginBottom: 20,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 5,
        elevation: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderLeftWidth: 4
    },
    btnFlat: {
        //flexDirection: 'row',
        //alignItems: 'center'
    },
    txtDesc: {
        marginTop: 5,
        fontFamily: 'Roboto'
    },
    txtDate: {
        marginTop: 5,
        fontFamily: 'Roboto',
        fontSize: 10,
        color: projectColors.gray
    }
})