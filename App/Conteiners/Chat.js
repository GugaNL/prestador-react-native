import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

//Styles
import styles from './styles/ChatStyles'

//Custom Components
import HeaderMain from '../Components/HeaderMain'

//Toast message
import Toast, { DURATION } from 'react-native-easy-toast'

//Images
import { images } from "../Util/ImagesTheme"

//ChatBot
import { GiftedChat, Send, Bubble, MessageText, Time, Composer, Day } from 'react-native-gifted-chat'

//Util


//Redux
import { connect } from "react-redux"

//Actions




class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            idBotMessage: 1,
            //valueMessage: false,
            isMessageValue: false,
            //idConversation: this.props.navigation.state.params.idConversation ? this.props.navigation.state.params.idConversation : null,
            //userLedgeId: '',
            //requestId: this.props.navigation.state.params.requestId ? this.props.navigation.state.params.requestId : '',
            //isLoading: '',
            //lastIdMessage: ''
        }
    }




    getConversation() {
            console.log('Nao tem conversa salva')
            this.setState({
                messages: [
                    {
                        _id: 1,
                        //idFreight: this.props.detailFreight.request_id,
                        text: 'Esse chat é apenas para negociações! Coloque o valor que o embarcador vai responder se aceita ou não',
                        createdAt: new Date(),
                        user: {
                            _id: 1,
                            name: 'Robot',
                            avatar: images.chat_bot,
                        },
                    },
                ],
            })
    }


    changeChatMode = () => {
        this.setState({ isMessageValue: !this.state.isMessageValue })
    }


    /**
     * set messages array with the new message
     * @param {any} messages 
     */
    onSend(messages = []) {
        console.log('onSend messages: ', messages)

        let formatted = messages[0].text
        let checkValue = true
        let type = this.state.isMessageValue ? 'bid' : 'text'

        if (type == 'bid') {
            var regex = /^(?:[1-9](?:[\d]{0,2}(?:\.[\d]{3})*|[\d]+)|0)(?:,[\d]{0,2})?$/
            if (regex.test(formatted) && formatted.slice(-1) !== ',' && formatted.slice(-1) !== '.' &&
                formatted.charAt(formatted.length - 2) !== ',' && formatted.charAt(formatted.length - 2) !== '.') {
                //console.log("Número válido")
                formatted = formatted.replace('.', '')
            } else {
                console.log("Número inválido")
                checkValue = false
                parse.showToast('Valor inválido', Toast.durations.LONG)
            }
        }

        if (checkValue) {
            if (type == 'bid') {
                let valueString = 'Proponho o valor de R$ '
                let addComment = valueString.concat(formatted)
                messages[0].text = addComment
            }
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, messages),
            }))
            if (type == 'bid') {
                this.botReply()
            }
        }
    }


    /**
     * Bot reply
     */
    botReply() {
        let countId = this.state.idBotMessage
        countId = countId + 1
        let replyMessage = [
            {
                _id: countId,
                text: 'Mensagem entregue, aguarde a resposta',
                createdAt: new Date(),
                user: { _id: 1, name: 'Robot', avatar: images.chat_bot }
            }
        ]
        setTimeout(() => {
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, replyMessage),
            }))
        }, 2000)
        this.setState({ idBotMessage: countId })
    }


    /**
     * Render custom footer
     * @param {any} props 
     */
    renderSend = props => {
        if (props.text.trim()) { // text box filled
            return <Send {...props}>
                <View style={styles.contImg}>
                    <Image source={images.arrow_chat} resizeMode={'contain'} />
                </View>
            </Send>
        }
        return <TouchableOpacity onPress={this.changeChatMode} style={{ marginRight: 10 }} >
            {this.state.isMessageValue ? (
                <Image source={images.monetization} style={{ width: 25, height: 25, marginBottom: 10 }} />
            ) : (
                    <Image source={images.chat_mode} style={{ width: 25, height: 25, marginBottom: 10 }} />
                )}
        </TouchableOpacity>
    }


    /**
     * Render day
     */
    renderDay(props) {
        return (
            <Day containerStyle={{ marginTop: 30, marginBottom: 0 }}
                {...props}
            />
        )
    }


    /**
     * render bubble
     * @param {any} props 
     */
    renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{ left: styles.leftBubble, right: styles.rightBubble }}
            />
        )
    }


    /**
     * render custom text message
     *  @param {any} props
     */
    renderMessageText(props) {
        return (
            <MessageText
                {...props}
                textStyle={{ right: styles.messageText, left: styles.messageText }}
            />
        )
    }


    /**
     * render custom time about message
     */
    renderTime(props) {
        return (
            <Time
                {...props}
                textStyle={{ right: styles.time }}
            />
        )
    }


    /**
     * Render custom buttom value
     */
    renderComposer = props => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Composer {...props} />
                <TouchableOpacity onPress={this.changeChatMode} style={{ position: 'absolute', right: 5, bottom: 0 }}>
                    <Icon name='md-cash' type='ionicon' color='green' />
                </TouchableOpacity>
            </View>
        )
    }


    render() {
        console.log('this.state.messages: ', this.state.messages)
        return (
            <View style={styles.container}>
                <HeaderMain title='Negociação' backButton={true} pressBack={() => this.props.navigation.goBack()} />
                <GiftedChat
                    messages={this.state.messages}
                    placeholder={ this.state.isMessageValue ? 'Insira o valor que deseja' : 'Digite aqui..'}
                    locale='pt'
                    dateFormat='L'
                    onSend={messages => this.onSend(messages)}
                    //messageIdGenerator=
                    user={{ _id: 100 }}
                    renderSend={this.renderSend}
                    renderDay={this.renderDay}
                    renderBubble={this.renderBubble}
                    renderMessageText={this.renderMessageText}
                    renderTime={this.renderTime}
                    //textInputProps={{ keyboardType: this.state.isMessageValue ? 'numeric' : 'default' }}
                //inverted={false}
                />
            </View>
        )
    }
}




const mapStateToProps = state => (
    { }
)


const mapDispatchToProps = dispatch => (
    { }
)


export default connect(mapStateToProps, mapDispatchToProps)(Chat)
