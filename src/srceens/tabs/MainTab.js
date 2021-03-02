import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStackScreen from '../stacks/MainStack';
import FooterElement from '../../layout/element/Footer';

const MainTab = createBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <MainTab.Navigator
      initialRouteName="MainStack"
      tabBar={(props) => <FooterElement {...props} />}>
      <MainTab.Screen name="MainStack" component={MainStackScreen} />
    </MainTab.Navigator>
  );
};

export default MainTabScreen;
