import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const IconName = ({title,iconName,onPress}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity className="flex flex-row items-center ml-5 my-2" onPress={onPress}>
      <MaterialCommunityIcons name={iconName} size={30} color="white"/>
      <Text className="text-white ml-5 text-lg">{title}</Text>
    </TouchableOpacity>
  )
}

export default IconName

const styles = StyleSheet.create({})