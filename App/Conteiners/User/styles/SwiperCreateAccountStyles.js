import { StyleSheet } from 'react-native'
import { projectColors } from '../../../Util/Constants'


export const styles = StyleSheet.create({
    nextButton: {
        backgroundColor: projectColors.mainBlue,
        width: '90%',
        height: 52,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        elevation: 5
    },
    wrapper: {
        flex: 1
    },
    slide: {
        flex: 1,
    },
    nextText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: projectColors.white,
        fontWeight: 'bold'
    },
    closeButton: {
        alignSelf: 'flex-start',
        marginBottom: 10,
        marginTop: 14,
        marginLeft: 24
    },
})