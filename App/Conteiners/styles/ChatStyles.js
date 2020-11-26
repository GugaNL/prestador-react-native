import { StyleSheet } from "react-native"
import { projectColors } from '../../Util/Constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: projectColors.whiteSec
    },
    messageText: {
        fontFamily: 'Roboto', 
        color: '#211F1F'
    },
    time: {
        color: '#9aa2ab'
    },
    leftBubble: {
        backgroundColor: '#FBFBFB',
        marginTop: 10
    },
    rightBubble: {
        backgroundColor: '#E9E9E9',
        elevation: 5,
        shadowColor: '#000', 
        shadowOpacity: 0.1, 
        shadowOffset: { x: 0, y: 0 }, 
        shadowRadius: 15,
        marginTop: 10
    },
    contImg: {
        marginRight: 10,
        marginBottom: 8
    }
})