import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SmallCard = ({imageSource,rating,name,location,price,reviews}) => {
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
  }
  return (
    <View className="bg-primary-300 w-11/12 h-40 mx-4 my-3 rounded-3xl flex-row items-center">
      <Image source={imageSource} className="h-32 w-28 rounded-3xl ml-3"/>
      <View className="ml-4 self-start flex-row mt-5">
        <View className="gap-4">
          <Text className="text-white text-xl font-bold">{name}</Text>
          <Text className="text-white">{location}</Text>
          <View className="flex-row items-center">
            <MaterialCommunityIcons name="star" size={20} color="gold"/>
            <Text className="text-primary-100"> {rating}</Text>
            <Text className="text-white"> ({reviews} reviews)</Text>
          </View>
        </View>
        <View className="ml-2">
          <Text className="text-primary-100 text-2xl">{price}</Text>
          <Text className="text-white">/night</Text>
          <Text onPress={handleButtonPress} className="mt-7">
            <MaterialCommunityIcons name={icon} size={30} color={color}/>
          </Text>
        </View>
      </View>
    </View>
  )
}

export default SmallCard

const styles = StyleSheet.create({})