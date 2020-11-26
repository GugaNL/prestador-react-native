import React, { Component } from 'react'
import { View, Text } from 'react-native'

//Redux
import { connect } from "react-redux"


class AdvertiseService extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View>
        <Text> AdvertiseService </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdvertiseService)