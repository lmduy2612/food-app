import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../HomeScreen';
import CategoryScreen from '../CategoryScreen';
import FoodDetailScreen from '../FoodDetailScreen';

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Category" component={CategoryScreen} />
      <MainStack.Screen name="FoodDetail" component={FoodDetailScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
