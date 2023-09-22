import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import IconName from './IconName';

const EditProfile = () => {
  const navigation = useNavigation();

  const [gender, setGender] = useState('');

  const handleGenderPress = (selectedGender) => {
    setGender(selectedGender);
  };

  return (
    <View className="flex-1 bg-primary-200">
      <View className="flex flex-row mt-5 ml-5">
        <MaterialCommunityIcons name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>
        <Text className="text-white text-2xl font-bold ml-5">Edit Profile</Text>
      </View>
      <TextInput placeholder="First" className="bg-primary-300 rounded-xl mt-5 ml-5 mr-5 p-3 pl-4" placeholderTextColor="white"/>
      <TextInput placeholder="Last" className="bg-primary-300 rounded-xl mt-5 ml-5 mr-5 p-3 pl-4" placeholderTextColor="white"/>
      <TextInput placeholder="Date of Birth" className="bg-primary-300 rounded-xl mt-5 ml-5 mr-5 p-3 pl-4" placeholderTextColor="white"/>
      <TextInput placeholder="Email" className="bg-primary-300 rounded-xl mt-5 ml-5 mr-5 p-3 pl-4" placeholderTextColor="white"/>
      <TextInput placeholder="Country" className="bg-primary-300 rounded-xl mt-5 ml-5 mr-5 p-3 pl-4" placeholderTextColor="white"/>
      <TextInput placeholder="Phone" className="bg-primary-300 rounded-xl mt-5 ml-5 mr-5 p-3 pl-4" placeholderTextColor="white"/>
      <TextInput placeholder='Gender' className="bg-primary-300 rounded-xl mt-5 ml-5 mr-5 p-3 pl-4" placeholderTextColor="white"/>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({})