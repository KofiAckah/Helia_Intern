import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const Notifications = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-primary-200">
      <View className="flex flex-row mt-5 ml-5">
        <MaterialCommunityIcons name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>
        <Text className="text-white text-xl ml-5">Notifications</Text>
      </View>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})