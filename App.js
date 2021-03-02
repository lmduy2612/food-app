import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainTabScreen from './src/srceens/tabs/MainTab';

const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="MainTab" component={MainTabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
