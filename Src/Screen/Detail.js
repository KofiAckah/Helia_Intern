import { StyleSheet, Text, View,Button, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Detail = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-primary-200">
      <Text>Detail</Text>
      <Button title="Good one" onPress={() => navigation.navigate('Settings')}></Button>
      {/* <FontAwesomeIcon icon="square-check" /> */}
      {/* <Icon name="rocket" size={30} color="#900"/> */}
      <MaterialCommunityIcons name="account" marginLeft={10} size={25} color="#000"/>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})