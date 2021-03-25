import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from './src/firebase';

LogBox.ignoreAllLogs();

import OnboardingScreen from './src/srceens/OnboaringScreen';
import MainTabScreen from './src/srceens/tabs/MainTab';
import AuthStackScreen from './src/srceens/stacks/AuthStack';

const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
  const storeUser = async (user) => {
    await AsyncStorage.setItem('userAuth', JSON.stringify(user));
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        storeUser(user);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Onboarding" component={OnboardingScreen} />
        <Drawer.Screen name="Login" component={AuthStackScreen} />
        <Drawer.Screen name="MainTab" component={MainTabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
