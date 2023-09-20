import { StyleSheet, Text, View,Image,ScrollView,TextInput } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// Components
import HomeSearch from './HomeSearch'
import Menu from './Menu'
import BigCard from './BigCard';
import SmallCard from './SmallCard';

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-primary-200">
      <ScrollView>
        <View className="flex-row items-center justify-between mt-5">
          <View className="items-center flex-row ml-5">
            <Image source={require('../../../assets/icon.png')} className="w-10 h-10"/>
            <Text className="text-2xl font-bold text-white ml-3">Helia</Text>
          </View>
          <View className="flex-row items-center mr-5">
            <MaterialCommunityIcons marginRight={15} name="bell-outline" size={30} color="white"/>
            <MaterialCommunityIcons name="bookmark-minus-outline" size={30} color="white"/>
          </View>
        </View>
        <Text className="text-white m-4 text-3xl font-bold">Hello, Daniel 👋</Text>
        <HomeSearch/>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Menu title="Recommended"/>
          <Menu title="Popular"/>
          <Menu title="Trending"/>
          <Menu title="Newest"/>
          <Menu title="All"/>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <BigCard/>
          <BigCard/>
          <BigCard/>
        </ScrollView>
        <View className="flex-row justify-between mx-4">
          <Text className="text-white font-bold text-lg">Recently Booked</Text>
          <Text className="text-primary-100 font-bold text-lg">See All</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SmallCard/>
          <SmallCard/>
          <SmallCard/>
        </ScrollView>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})