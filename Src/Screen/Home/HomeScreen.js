import { Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// Components
import HomeSearch from './HomeSearch'
import Menu from './Menu'
import BigCard from './BigCard';
import SmallCard from './SmallCard';

// Database
import { BigCardInfo } from '../../Details/BigCardInfo';

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-primary-200">
      <ScrollView>
        <View className="flex-row items-center justify-between mt-5">
          <View className="items-center flex-row ml-5">
            <Image source={require('../../../assets/logo.png')} className="w-10 h-10 rounded-xl"/>
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
          <BigCard imageSource={BigCardInfo[0].imageSource} rating={BigCardInfo[0].rating} name={BigCardInfo[0].name} location={BigCardInfo[0].location} price={BigCardInfo[0].price}/>
          <BigCard imageSource={BigCardInfo[1].imageSource} rating={BigCardInfo[1].rating} name={BigCardInfo[1].name} location={BigCardInfo[1].location} price={BigCardInfo[1].price}/>
          <BigCard imageSource={BigCardInfo[2].imageSource} rating={BigCardInfo[2].rating} name={BigCardInfo[2].name} location={BigCardInfo[2].location} price={BigCardInfo[2].price}/>
          <BigCard imageSource={BigCardInfo[3].imageSource} rating={BigCardInfo[3].rating} name={BigCardInfo[3].name} location={BigCardInfo[3].location} price={BigCardInfo[3].price}/>
          <BigCard imageSource={BigCardInfo[4].imageSource} rating={BigCardInfo[4].rating} name={BigCardInfo[4].name} location={BigCardInfo[4].location} price={BigCardInfo[4].price}/>
        </ScrollView>
        <View className="flex-row justify-between mx-4">
          <Text className="text-white font-bold text-lg">Recently Booked</Text>
          <Text className="text-primary-100 font-bold text-lg">See All</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SmallCard imageSource={BigCardInfo[0].imageSource} rating={BigCardInfo[0].rating} name={BigCardInfo[0].name} location={BigCardInfo[0].location} price={BigCardInfo[0].price} reviews={BigCardInfo[0].reviews}/>
          <SmallCard imageSource={BigCardInfo[8].imageSource} rating={BigCardInfo[8].rating} name={BigCardInfo[8].name} location={BigCardInfo[8].location} price={BigCardInfo[8].price} reviews={BigCardInfo[8].reviews}/>
          <SmallCard imageSource={BigCardInfo[7].imageSource} rating={BigCardInfo[7].rating} name={BigCardInfo[7].name} location={BigCardInfo[7].location} price={BigCardInfo[7].price} reviews={BigCardInfo[7].reviews}/>
          <SmallCard imageSource={BigCardInfo[6].imageSource} rating={BigCardInfo[6].rating} name={BigCardInfo[6].name} location={BigCardInfo[6].location} price={BigCardInfo[6].price} reviews={BigCardInfo[6].reviews}/>
          <SmallCard imageSource={BigCardInfo[5].imageSource} rating={BigCardInfo[5].rating} name={BigCardInfo[5].name} location={BigCardInfo[5].location} price={BigCardInfo[5].price} reviews={BigCardInfo[5].reviews}/>
          <SmallCard imageSource={BigCardInfo[4].imageSource} rating={BigCardInfo[4].rating} name={BigCardInfo[4].name} location={BigCardInfo[4].location} price={BigCardInfo[4].price} reviews={BigCardInfo[4].reviews}/>
          <SmallCard imageSource={BigCardInfo[6].imageSource} rating={BigCardInfo[6].rating} name={BigCardInfo[6].name} location={BigCardInfo[6].location} price={BigCardInfo[6].price} reviews={BigCardInfo[6].reviews}/>
        </ScrollView>
      </ScrollView>
    </View>
  )
}

export default HomeScreen