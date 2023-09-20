import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeSearch = () => {
  return (
    <View className="flex-row">
      <TextInput className="bg-primary-300 border mx-4 py-3 pl-14 rounded-xl w-11/12" placeholder='Search' placeholderTextColor='gray'/>
      <View className="absolute top-3 left-8">
        <Ionicons name="search" size={30} color="gray"/>
      </View>
      <View className="absolute top-3 right-10">
        <MaterialCommunityIcons name="filter-variant" size={30} color="#1AB65C"/>
      </View>
    </View>
  )
}

export default HomeSearch

const styles = StyleSheet.create({})