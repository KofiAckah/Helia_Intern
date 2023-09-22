import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


// Components
import IconName from './IconName';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-primary-200">
      <ScrollView>
        <View className="flex-row items-center justify-between mt-5">
          <View className="items-center flex-row ml-5">
            <Image source={require('../../../assets/logo.png')} className="w-10 h-10 rounded-xl"/>
            <Text className="text-2xl font-bold text-white ml-3">Profile</Text>
          </View>
          <View className="flex-row items-center mr-5">
            <MaterialCommunityIcons name="bookmark-minus-outline" size={30} color="white"/>
          </View>
        </View>
        <IconName title="Edit Profile" iconName="account" onPress={() => navigation.navigate('EditProfile')}/>
        <IconName title="Payment" iconName="credit-card-outline"/>
        <IconName title="Notifications" iconName="bell-outline" onPress={() => navigation.navigate('Notifications')}/>
        <IconName title="Security" iconName="shield-check-outline"/>
        <IconName title="Help" iconName="information-outline"/>
        <IconName title="Dark Mode" iconName="weather-night"/>
        <IconName title="Logout" iconName="logout"/>
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})