import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Menu = ({title}) => {
  return (
    <View className="ml-4 my-4 border-primary-100 border-2 px-5 py-3 rounded-full">
      <Text className="text-primary-100">{title}</Text>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({})