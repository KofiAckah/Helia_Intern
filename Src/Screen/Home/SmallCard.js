import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SmallCard = () => {
  return (
    <View className="bg-primary-300 w-11/12 h-40 mx-4 my-3 rounded-3xl flex-row items-center">
      <Image source={require('../../../assets/icon.png')} className="h-32 w-28 rounded-3xl ml-3"/>
      <View className="ml-4 self-start flex-row mt-5">
        <View className="gap-4">
          <Text className="text-white text-xl font-bold">President Hotel</Text>
          <Text className="text-white">Paris, France</Text>
          <View className="flex-row items-center">
            <MaterialCommunityIcons name="star" size={20} color="gold"/>
            <Text className="text-primary-100"> 4.8</Text>
            <Text className="text-white"> (4,3562 reviews)</Text>
          </View>
        </View>
        <View className="ml-2">
          <Text className="text-primary-100 text-2xl">$35</Text>
          <Text className="text-white">/night</Text>
          <MaterialCommunityIcons name="bookmark-minus-outline" size={30} color="white" marginTop={30}/>
        </View>
      </View>
    </View>
  )
}

export default SmallCard

const styles = StyleSheet.create({})