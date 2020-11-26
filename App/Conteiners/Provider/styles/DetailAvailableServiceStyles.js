import { StyleSheet } from 'react-native'
import { projectColors, appTheme } from '../../../Util/Constants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: projectColors.whiteSec
    },
    card: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 15,
        backgroundColor: projectColors.white,
        elevation: 5,
        borderRadius: 5,
        padding: 8
    },
    textTitleService: {
        fontFamily: 'roboto',
        fontSize: 22,
        color: projectColors.lightBlack,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginLeft: 15
    },
    labelDescription: {
        marginTop: 25,
        color: projectColors.gray
    },
    textDescription: {
        fontFamily: 'roboto',
        fontWeight: 'bold',
        color: projectColors.gray
    },
    textValue: {
        fontFamily: 'roboto',
        color: appTheme.priceService,
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 18
    },
    labelNegociable: {
        fontFamily: 'roboto',
        fontWeight: 'bold',
        color: projectColors.white
    },
    buttonAccept: {
        width: '70%',
        height: 45,
        alignSelf: 'center',
        backgroundColor: projectColors.mainBlue,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 15
    },
    textBtnAccept: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: 'bold',
        color: projectColors.white
    },
    labelAddress: {
        fontFamily: 'roboto',
        color: projectColors.lightGray
    },
    infoCustomerCont: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 15,
        width: '100%'
    },
    avatarCont: {
        flexDirection: 'row'
    },
    ratingCont: {
        justifyContent: 'center',
        marginLeft: 10
    },
    avatar: {
        alignSelf: 'flex-start'
    },
    btnNegotiation: {
        backgroundColor: projectColors.mainBlue,
        borderRadius: 10,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10
    }
})