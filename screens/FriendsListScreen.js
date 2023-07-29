import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'

const FriendsListScreen = () => {
  return (
    <View>
      <HeaderComponent screenName={"Friends"} />
      <Text>FriendsListScreen</Text>
    </View>
  )
}

export default FriendsListScreen