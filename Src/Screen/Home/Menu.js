import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

const Menu = ({title}) => {
  const [backgroundColor, setBackgroundColor] = useState('#181A20');
  const [color, setColor] = useState('#1AB65C');
  const [defaultBackgroundColor, setDefaultBackgroundColor] = useState('#181A20');
  const handleButtonPress = () => {
    if (backgroundColor === defaultBackgroundColor) {
      setBackgroundColor('#1AB65C');
      setColor('white');
    } else {
      setBackgroundColor(defaultBackgroundColor);
      setColor('#1AB65C');
    }
  };
  return (
    <View className="ml-4 my-4 border-primary-100 border-2 px-5 py-3 rounded-full" style={{ flex: 1, backgroundColor }}>
      <Text className="text-primary-100" onPress={handleButtonPress} style={{color}}>{title}</Text>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({})