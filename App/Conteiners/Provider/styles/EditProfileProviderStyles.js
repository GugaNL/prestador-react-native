import { StyleSheet } from 'react-native'
import { projectColors } from '../../../Util/Constants'


export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    labelField: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: projectColors.gray,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 8
    },
    inputField: {
        backgroundColor: projectColors.lightBlue,
        borderRadius: 5,
        color: projectColors.mainBlue,
        fontSize: 16,
        fontFamily: 'roboto'
    },
    inputFieldAge: {
        backgroundColor: projectColors.lightBlue,
        borderRadius: 5,
        color: projectColors.mainBlue,
        fontSize: 16,
        fontFamily: 'roboto',
        width: 50
    }
})