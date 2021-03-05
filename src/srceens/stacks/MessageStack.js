import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MessageScreen from '../MessageScreen';
import MessageDetailScreen from '../MessageDetailScreen';

const MessageStack = createStackNavigator();

const MessageStackScreen = () => {
  return (
    <MessageStack.Navigator
      initialRouteName="Message"
      screenOptions={{
        headerShown: false,
      }}>
      <MessageStack.Screen name="Message" component={MessageScreen} />
      <MessageStack.Screen
        name="MessageDetail"
        component={MessageDetailScreen}
      />
    </MessageStack.Navigator>
  );
};

export default MessageStackScreen;
