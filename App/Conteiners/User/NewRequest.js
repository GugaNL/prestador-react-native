import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, TextInput, Picker, Alert } from 'react-native'
import { Icon } from 'react-native-elements'

import CalendarPicker from 'react-native-calendar-picker'
import DateTimePicker from '@react-native-community/datetimepicker'

import moment from 'moment'

//Custom components
import HeaderMain from '../../Components/HeaderMain'

//Mask
import { TextInputMask } from 'react-native-masked-text'

//Theme
import { projectColors } from '../../Util/Constants'

//Temporário
import { typeServicesList } from '../../Util/Mocks/MockTypeServices'


export default class NewRequest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoriesService: [],
      selectedCategory: '',
      isLoading: '',
      time: new Date(),
      timeBegin: '',
      timeEnd: '',
      valueMoney: '',
      showTimePickerBegin: false,
      showTimePickerEnd: false
    }
  }


  componentDidMount() {
    let arrayServiceAux = typeServicesList
    this.setState({ categoriesService: typeServicesList, isLoading: false })
  }


  changeCategory(value) {
    this.setState({ selectedCategory: value })
  }


  onDateChange(date, type) {
    console.log('Data inicial: ', date._i)
    /*if (type === 'END_DATE') {
        this.setState({
            selectedEndDate: date,
        })
    } else {
        this.setState({
            selectedStartDate: date,
            selectedEndDate: null,
        })
    }*/
  }


  toggleTimePickerBegin() {
    this.setState({ showTimePickerBegin: !this.state.showTimePickerBegin })
  }


  toggleTimePickerEnd() {
    this.setState({ showTimePickerEnd: !this.state.showTimePickerEnd })
  }


  setTimeBegin(selectedDate) {
    this.setState({ timeBegin: moment(selectedDate).format('HH:mm'), showTimePickerBegin: false })
  }


  setTimeEnd(selectedDate) {
    this.setState({ timeEnd: moment(selectedDate).format('HH:mm'), showTimePickerEnd: false })
  }


  publishRequest() {
    Alert.alert(
      'Aviso',
      'Confirma todas as informações para publicar o serviço?',
      [
        {
          text: 'Cancelar',
          onPress: () => { },
          style: 'cancel',
        },
        { text: 'Ok', onPress: () => this.confirmPublish() },
      ],
      { cancelable: false },
    )
  }


  confirmPublish() {
    Alert.alert(
      'Serviço publicado',
      'Sua solicitação agora está disponível para os profissionais',
      [
        { text: 'Ok', onPress: () => { } },
      ],
      { cancelable: false },
    )
  }


  render() {
    const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    const minDate = new Date()
    return (
      <View style={{ flex: 1, backgroundColor: projectColors.whiteSec }}>
        <HeaderMain title='Publicar serviço' backButton={true} pressBack={() => this.props.navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: '90%', alignSelf: 'center', marginTop: 15 }}>
            <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5 }}>Título</Text>
            <TextInput placeholder='    Texto breve' style={{ backgroundColor: projectColors.lightBlue, borderRadius: 5 }}></TextInput>
          </View>

          <View style={{ width: '90%', alignSelf: 'center', marginTop: 15 }}>
            <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5 }}>Descrição do serviço</Text>
            <TextInput multiline={true} numberOfLines={3} placeholder='    O que deve ser realizado' style={{ backgroundColor: projectColors.lightBlue, borderRadius: 5, textAlignVertical: 'top' }}></TextInput>
          </View>

          <View style={{ width: '90%', alignSelf: 'center', marginTop: 15 }}>
            <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5 }}>Categoria</Text>
            <Picker
              selectedValue={this.state.selectedCategory}
              style={{ height: 50, width: 260, backgroundColor: projectColors.lightBlue }}
              mode='dropdown'
              onValueChange={(itemValue, itemIndex) =>
                this.changeCategory(itemValue)
              }>

              {this.state.categoriesService.map((e, i) => {
                return <Picker.Item label={e.label} value={e.value} key={i} />
              })}
            </Picker>
          </View>

          <View style={{ width: '90%', alignSelf: 'center', marginTop: 15, marginBottom: 10 }}>
            <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5 }}>Valor</Text>
            <TextInputMask
              style={{ fontFamily: 'Roboto', fontWeight: 'bold', borderRadius: 5, width: 150, height: 30, paddingVertical: 2, textAlign: 'center', color: projectColors.mainBlue, backgroundColor: projectColors.lightBlue }}
              type={'money'}
              placeholder='Apenas números'
              options={{
                precision: 2,
                separator: ',',
                delimiter: '.',
                unit: '',
                suffixUnit: ''
              }}
              value={this.state.valueMoney}
              onChangeText={text => {
                this.setState({
                  valueMoney: text
                })
              }}
            />
          </View>

          <View style={{ width: '90%', alignSelf: 'center', marginTop: 15 }}>
            <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5 }}>Data</Text>
            <CalendarPicker weekdays={week} months={months} startFromMonday={false}
              nextTitle='Próximo' previousTitle='Anterior' minDate={minDate} //allowRangeSelection={true}
              selectedDayColor={projectColors.mainBlue}
              selectedDayTextColor={projectColors.white}
              onDateChange={(date, type) => this.onDateChange(date, type)}
              scaleFactor={400}
              dayLabelsWrapper={{ borderBottomWidth: 0, borderTopWidth: 0.5 }}
              nextTitleStyle={{ color: projectColors.mainBlue, fontWeight: 'bold' }}
              previousTitleStyle={{ color: projectColors.mainBlue, fontWeight: 'bold' }}
            //selectedRangeStartStyle={{ borderBottomRightRadius: borderSelectedDay, borderTopRightRadius: borderSelectedDay }}
            />
          </View>

          <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>
            <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5 }}>Endereço</Text>
            <TextInput placeholder='    Rua/Av' style={{ backgroundColor: projectColors.lightBlue, borderRadius: 5 }}></TextInput>
          </View>

          <View style={{ width: '90%', alignSelf: 'center', marginTop: 15 }}>
            <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 5 }}>Horário de chegada</Text>
          </View>

          <View style={{ width: '90%', alignSelf: 'center', marginTop: 5, marginBottom: 20, flexDirection: 'row' }}>
            <View style={{ width: '30%' }}>
              {this.state.timeBegin ? (
                <TouchableOpacity style={{ backgroundColor: projectColors.lightBlue, flexDirection: 'row', borderWidth: 0.5, borderRadius: 2, borderColor: projectColors.mainBlue, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.toggleTimePickerBegin()}>
                  <Text style={{ fontFamily: 'Roboto', fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: projectColors.mainBlue }}>{this.state.timeBegin}</Text>
                </TouchableOpacity>
              ) : (
                  <TouchableOpacity onPress={() => this.toggleTimePickerBegin()}>
                    <Icon type='font-awesome' name='clock-o' color={projectColors.mainBlue} size={20} containerStyle={{ marginLeft: 5, marginRight: 10 }} />
                  </TouchableOpacity>
                )}
              {this.state.showTimePickerBegin ? (
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={this.state.time}
                  mode='time'
                  is24Hour={true}
                  display='spinner'
                  onChange={(event, selectedDate) => this.setTimeBegin(selectedDate)}
                />
              ) : null}
            </View>
            <View style={{ width: '10%', alignItems: 'center' }}><Text style={{ fontFamily: 'Roboto', fontSize: 15 }}>até</Text></View>
            <View style={{ width: '30%' }}>
              {this.state.timeEnd ? (
                <TouchableOpacity style={{ backgroundColor: projectColors.lightBlue, borderWidth: 0.5, borderRadius: 2, borderColor: projectColors.mainBlue, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}
                  onPress={() => this.toggleTimePickerEnd()}>
                  <Text style={{ fontFamily: 'Roboto', fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: projectColors.mainBlue }}>{this.state.timeEnd}</Text>
                </TouchableOpacity>
              ) : (
                  <TouchableOpacity onPress={() => this.toggleTimePickerEnd()}>
                    <Icon type='font-awesome' name='clock-o' color={projectColors.mainBlue} size={20} containerStyle={{ marginLeft: 5, marginRight: 10 }} />
                  </TouchableOpacity>
                )}
              {this.state.showTimePickerEnd ? (
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={this.state.time}
                  mode='time'
                  is24Hour={true}
                  display='spinner'
                  onChange={(event, selectedDate) => this.setTimeEnd(selectedDate)}
                />
              ) : null}
            </View>

          </View>

          <TouchableOpacity style={{ width: '80%', height: 40, alignSelf: 'center', backgroundColor: projectColors.mainBlue, borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}
            onPress={() => this.publishRequest()}>
            <Text style={{ fontFamily: 'Roboto', fontSize: 15, fontWeight: 'bold', color: projectColors.white }}>Publicar</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    )
  }
}
