import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Screen
import ProfileScreen from './Profile/ProfileScreen'
import EditProfile from './Profile/EditProfile'
import Notifications from './Profile/Notifications'
import Help from './Profile/Help'

const Profile = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
      <Stack.Screen name="EditProfile" component={EditProfile}/>
      <Stack.Screen name="Notifications" component={Notifications}/>
      <Stack.Screen name="Help" component={Help}/>
    </Stack.Navigator>
  )
}

export default Profile

const styles = StyleSheet.create({})