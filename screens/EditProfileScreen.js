import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'

const EditProfileScreen = () => {
  return (
    <View>
      <HeaderComponent screenName={"Edit Profile"} />
      <Text>EditProfileScreen</Text>
    </View>
  )
}

export default EditProfileScreen