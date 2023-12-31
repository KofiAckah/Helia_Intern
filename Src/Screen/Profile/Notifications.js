import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

// Components
import Bar from './Bar';


const Notifications = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-primary-200">
      <View className="flex flex-row my-6 ml-5">
        <MaterialCommunityIcons name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>
        <Text className="text-white text-2xl font-bold ml-5">Notifications</Text>
      </View>
      <View className="flex-row items-center justify-between mx-5 my-4">
        <Text className="text-white text-lg">General Notifications</Text>
        <Bar/>
      </View>
      <View className="flex-row items-center justify-between mx-5 my-4">
        <Text className="text-white text-lg">Sound</Text>
        <Bar/>
      </View>
      <View className="flex-row items-center justify-between mx-5 my-4">
        <Text className="text-white text-lg">Vibrate</Text>
        <Bar/>
      </View>
      <View className="flex-row items-center justify-between mx-5 my-4">
        <Text className="text-white text-lg">App Updates</Text>
        <Bar/>
      </View>
      <View className="flex-row items-center justify-between mx-5 my-4">
        <Text className="text-white text-lg">New Service Availabe</Text>
        <Bar/>
      </View>
      <View className="flex-row items-center justify-between mx-5 my-4">
        <Text className="text-white text-lg">New Tips Availabe</Text>
        <Bar/>
      </View>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})