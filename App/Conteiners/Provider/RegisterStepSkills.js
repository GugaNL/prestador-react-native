import React, { Component } from 'react'
import { View, Text, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { CheckBox } from 'react-native-elements'

//Theme
import { projectColors } from '../../Util/Constants'

//Styles
import { styles } from './styles/RegisterStepSkillsStyles'

//Temporário
import { typeServicesList } from '../../Util/Mocks/MockTypeServices'

//Actions
import { changeArrayCategories } from '../../Store/Actions/ActionRegister'

//Redux
import { connect } from "react-redux"


class RegisterStepSkills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoriesService: [],
            isLoading: false,
            otherDescription: '',
            errorEmptyCategories: false,
            errorEmptyDesc: false
        }
    }


    componentDidMount() {
        let categoriesService = this.state.categoriesService
        for (let i = 0; i < typeServicesList.length; i++) {
            categoriesService.push({
                id: typeServicesList[i].id,
                label: typeServicesList[i].label,
                value: typeServicesList[i].value,
                selected: false
            })
        }
        this.setState({ categoriesService, isLoading: false })
    }



    selectedCategorie(categorieItem) {
        let categoriesService = this.state.categoriesService.map(el => (
            el.id === categorieItem.id ? { ...el, selected: !el.selected } : el
        ))
        this.setState({ categoriesService })
    }


    saveSkillReducer() {
        let filledCategory = this.checkSelectedCategories()
        if (filledCategory) {
            this.setState({ errorEmptyCategories: false })
            if (this.state.categoriesService[this.state.categoriesService.length - 1].selected == true &&
                this.state.otherDescription == '') {
                this.setState({ errorEmptyDesc: true })
            } else {
                this.setState({ errorEmptyDesc: false })
                this.props.changeArrayCategories(this.state.categoriesService)
                this.props.nextSlider()
            }
        } else {
            this.setState({ errorEmptyCategories: true })
        }
    }


    checkSelectedCategories() {
        for (let i = 0; i < this.state.categoriesService.length; i++) {
            if (this.state.categoriesService[i].selected == true) {
                return true
            }
        }
        return false
    }



    render() {
        //console.log('this.state.categoriesService: ', this.state.categoriesService)
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '90%', alignSelf: 'center', marginBottom: 15 }}>
                    <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: projectColors.gray, fontWeight: 'bold', marginTop: 5, marginBottom: 20 }}>Categoria que você prestará serviços</Text>
                        <FlatList
                            data={this.state.categoriesService}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(x, i) => i.toString()}
                            renderItem={({ item, index }) => (
                                < View>
                                    <CheckBox key={item.id}
                                        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                                        textStyle={{ marginBottom: 2, color: item.selected ? projectColors.lightBlack : projectColors.gray }}
                                        title={item.label}
                                        checked={item.selected}
                                        checkedColor={projectColors.mainBlue}
                                        onPress={() => this.selectedCategorie(item)}
                                    />
                                </View>
                            )}>
                        </FlatList>
                        {this.state.categoriesService.length > 0 && this.state.categoriesService[this.state.categoriesService.length - 1].selected == true ? (
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: projectColors.gray, fontWeight: 'bold' }}>Descreva</Text>
                                <TextInput style={{ backgroundColor: projectColors.white, borderRadius: 5, width: '90%' }}
                                    value={this.state.otherDescription}
                                    onChangeText={(text) => this.setState({ otherDescription: text })}
                                />
                                {this.state.errorEmptyDesc ? (
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto', fontSize: 13, color: projectColors.tomato, fontWeight: 'bold', marginTop: 5 }}>Insira uma descrição </Text>
                                    </View>
                                ) : null}
                            </View>
                        ) : null}
                    </ScrollView>
                </View>
                {this.state.errorEmptyCategories ? (
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 13, color: projectColors.tomato, fontWeight: 'bold', marginTop: 5 }}>Selecione ao menos 1 categoria</Text>
                    </View>
                ) : null}
                <TouchableOpacity style={styles.nextButton}
                    onPress={() => this.saveSkillReducer()}>
                    <Text style={styles.nextText}>Próximo</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        categoriesRegister: state.RegisterReducer.categoriesRegister
    }
}


const mapDispatchToProps = dispatch => (
    {
        changeArrayCategories: values => dispatch(changeArrayCategories(values))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStepSkills)