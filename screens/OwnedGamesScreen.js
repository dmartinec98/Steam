import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'

const OwnedGamesScreen = () => {
  return (
    <View>
      <HeaderComponent screenName={"Owned Games"} />
      <Text>OwnedGamesScreen</Text>
    </View>
  )
}

export default OwnedGamesScreen