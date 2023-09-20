import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Detail from './Detail'
const Tab = createBottomTabNavigator()

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})