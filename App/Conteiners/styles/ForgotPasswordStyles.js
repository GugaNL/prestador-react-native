import { StyleSheet } from 'react-native'
import { projectColors } from '../../Util/Constants'


export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    nextButton: {
        backgroundColor: projectColors.mainBlue,
        width: '80%',
        height: 52,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 35,
        elevation: 5
    },
    nextText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: projectColors.white,
        fontWeight: 'bold'
    },
})