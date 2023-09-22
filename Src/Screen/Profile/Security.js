import { Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

// Components
import Bar from './Bar';

const Security = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-primary-200">
      <View className="flex flex-row my-6 ml-5">
        <MaterialCommunityIcons name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>
        <Text className="text-white text-2xl font-bold ml-5">Security</Text>
      </View>
      <View className="flex-row items-center justify-between mx-5 my-4">
        <Text className="text-white text-lg">Face ID</Text>
        <Bar/>
      </View>
      <View className="flex-row items-center justify-between mx-5 my-4">
        <Text className="text-white text-lg">Remember Me</Text>
        <Bar/>
      </View>
      <View className="flex-row items-center justify-between mx-5 my-4">
        <Text className="text-white text-lg">Touch ID</Text>
        <Bar/>
      </View>
      <View className="flex-row items-center justify-between mx-5 my-4">
        <Text className="text-white text-lg">Google Authenticator</Text>
        <MaterialCommunityIcons name="chevron-right" size={30} color="#1AB65C"/>
      </View>
      <TouchableOpacity>
        <Text className="text-white bg-primary-300 m-5 py-4 text-center font-bold text-lg rounded-full">Change Password</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Security