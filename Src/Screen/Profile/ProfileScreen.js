import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


// Components
import IconName from './IconName';
import Bar from './Bar';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-primary-200">
        <View className="flex-row items-center justify-between mt-5">
          <View className="items-center flex-row ml-5">
            <Image source={require('../../../assets/logo.png')} className="w-10 h-10 rounded-xl"/>
            <Text className="text-2xl font-bold text-white ml-3">Profile</Text>
          </View>
          <View className="flex-row items-center mr-5">
            <MaterialCommunityIcons name="bookmark-minus-outline" size={30} color="white"/>
          </View>
        </View>
        <View>
          <View className="border-2 border-primary-100 w-32 h-32 rounded-full mt-10 mx-auto overflow-hidden">
            <Image source={require('../../../assets/Images/profile.png')} className="w-32 h-32 rounded-full"/>
          </View>
          <TouchableOpacity className="bg-primary-100 w-7 h-7 rounded items-center justify-center absolute top-32 left-60" onPress={() => alert('Picture Change')}>
            <MaterialCommunityIcons name="pencil" size={25} color="#181A20"/>
          </TouchableOpacity>
          <Text className="text-white text-2xl font-bold text-center mt-5">Daniel Doe</Text>
          <Text className="text-white text-sm font-semibold text-center mt-2">daniel_doe@yourdomain.com</Text>
        </View>
        <View>  
          <View className="border-t border-gray-600 mx-6 my-4"></View>
          <IconName title="Edit Profile" iconName="account-outline" onPress={() => navigation.navigate('EditProfile')}/>
          <IconName title="Payment" iconName="credit-card-outline"/>
          <IconName title="Notifications" iconName="bell-outline" onPress={() => navigation.navigate('Notifications')}/>
          <IconName title="Security" iconName="shield-check-outline" onPress={() => navigation.navigate('Security')}/>
          <IconName title="Help" iconName="information-outline"/>
          <View className="flex-row items-center justify-between">
            <IconName title="Dark Mode" iconName="weather-night"/>
            <View className="mr-8">
              <Bar/>
            </View>
          </View>
          <IconName title="Logout" iconName="logout"/>
        </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})