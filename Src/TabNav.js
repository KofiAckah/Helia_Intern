import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from './Screen/Home'
import Search from './Screen/Search'
import Booking from './Screen/Booking'
import Profile from './Screen/Profile'


const Tab = createBottomTabNavigator()

// const TabNav = () => {
function TabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={Home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            return <Ionicons name={iconName} size={32} color={color} />
          } else if (route.name === 'Booking') {
              iconName = focused ? 'text-box' : 'text-box-outline';
          } else if (route.name === 'Profile') {
              iconName = focused ? 'account' : 'account-outline';
          }
          return <MaterialCommunityIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1AB65C',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 12,
        },
        activeBackgroundColor: '#181A20',
        inactiveBackgroundColor: '#181A20',
        height: 100,
      }}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Booking" component={Booking}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNav

// const styles = StyleSheet.create({})