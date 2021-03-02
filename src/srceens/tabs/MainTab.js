import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../stacks/HomeStack';
import FooterElement from '../../layout/element/Footer';

const MainTab = createBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <MainTab.Navigator
      initialRouteName="HomeStack"
      tabBar={(props) => <FooterElement {...props} />}>
      <MainTab.Screen name="HomeStack" component={HomeStackScreen} />
    </MainTab.Navigator>
  );
};

export default MainTabScreen;
