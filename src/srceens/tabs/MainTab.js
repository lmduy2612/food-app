import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStackScreen from '../stacks/MainStack';
import FooterElement from '../../layout/element/Footer';
import MessageStackScreen from '../stacks/MessageStack';

const MainTab = createBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <MainTab.Navigator
      initialRouteName="MainStack"
      tabBar={(props) => <FooterElement {...props} />}>
      <MainTab.Screen name="MainStack" component={MainStackScreen} />
      <MainTab.Screen name="MessageStack" component={MessageStackScreen} />
    </MainTab.Navigator>
  );
};

export default MainTabScreen;
