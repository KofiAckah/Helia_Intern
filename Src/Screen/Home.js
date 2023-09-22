import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import HomeScreen from './Home/HomeScreen'

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    </Stack.Navigator>
  )
}

export default Home
