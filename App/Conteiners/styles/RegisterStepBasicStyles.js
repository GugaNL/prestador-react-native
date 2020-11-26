import { StyleSheet } from 'react-native'
import { projectColors } from '../../Util/Constants'


export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contImage: {
        marginTop: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 130,
        borderRadius: 80,
        backgroundColor: '#fff',
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 80
    },
    imgBackCont: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 105,
        width: '100%',
        alignSelf: 'center'
    },
    contIconCamera: {
        backgroundColor: '#fbfbfb',
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        paddingHorizontal: 7,
        paddingVertical: 10,
        borderRadius: 120,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        height: 30,
        width: 35
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
        marginTop: 15,
        elevation: 5
    },
    nextText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: projectColors.white,
        fontWeight: 'bold'
    },
})