import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BigCard = ({imageSource,rating,name,location,price}) => {
  const [color, setColor] = useState('white');
  const [icon, setIcon] = useState('bookmark-minus-outline');

  const handleButtonPress = () => {
    if (color === 'white') {
      setColor('#1AB65C');
      setIcon('bookmark-minus');
      alert('Added to your bookmark');
    } else {
      setColor('white');
      setIcon('bookmark-minus-outline');
      alert('Removed from your bookmark');
    }
  };

  return (
    <View className="m-4 rounded-3xl w-80 h-96 overflow-hidden bg-red-500">
      <Image source={imageSource} className="w-80 h-96 rounded-3xl"/>
      <View className="bg-primary-100 absolute right-10 top-8 flex-row items-center rounded-full px-1 py-2 justify-evenly w-20">
        <MaterialCommunityIcons name="star" size={20} color="white"/>
        <Text className="text-white font-bold">{rating}</Text>
      </View>
      <View className="absolute bottom-0 bg-gray-700 w-full pl-6 opacity-70">
        <Text className="text-white text-2xl font-bold mb-3">{name}</Text>
        <Text className="text-white mb-3">{location}</Text>
        <View className="flex justify-between flex-row">
          <View className="flex-row items-end mb-3">
            <Text className="text-white text-2xl font-bold">{price}</Text>
            <Text className="text-white mb-1" onPress={handleButtonPress}> / per night</Text>
          </View>
          <Text onPress={handleButtonPress} className="mr-5">
            <MaterialCommunityIcons name={icon} size={30} color={color} marginRight={35}/> 
          </Text>
        </View>
      </View>
    </View>
  )
}

export default BigCard

const styles = StyleSheet.create({})