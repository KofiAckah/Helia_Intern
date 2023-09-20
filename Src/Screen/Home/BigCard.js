import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BigCard = () => {
  return (
    <View className="m-4 rounded-3xl w-80 h-96 overflow-hidden bg-red-500">
      <Image source={require('../../../assets/icon.png')} className="w-80 h-96 rounded-3xl"/>
      <View className="bg-primary-100 absolute right-10 top-8 flex-row items-center rounded-full px-1 py-2 justify-evenly w-20">
        <MaterialCommunityIcons name="star" size={20} color="white"/>
        <Text className="text-white font-bold">4.8</Text>
      </View>
      <View className="absolute bottom-0 bg-gray-700 w-full pl-6 opacity-70">
        <Text className="text-white text-2xl font-bold mb-3">Emeralda De Hotel</Text>
        <Text className="text-white mb-3">Paris, France</Text>
        <View className="flex justify-between flex-row">
          <View className="flex-row items-end mb-3">
            <Text className="text-white text-2xl font-bold">$29</Text>
            <Text className="text-white mb-1"> / per night</Text>
          </View>
          <MaterialCommunityIcons name="bookmark-minus-outline" size={30} color="white" marginRight={35}/> 
        </View>
      </View>
    </View>
  )
}

export default BigCard

const styles = StyleSheet.create({})