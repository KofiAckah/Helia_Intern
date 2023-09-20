import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import HomeScreen from './Home/HomeScreen'
import Detail from './Detail'
import Settings from './Settings'

const Home = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="Detail" component={Detail}/>
      <Stack.Screen name="Settings" component={Settings}/>
    </Stack.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})