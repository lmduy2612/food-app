import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Icon, Button, FooterTab, Text, Badge, Footer} from 'native-base';
const FooterElement = (props) => {
  const {navigation} = props;

  const navigationBottom = [
    {
      title: 'Home',
      icon: 'home',
      navigate: 'MainStack',
    },
    {
      title: 'Message',
      icon: 'chatbox-outline',
      navigate: 'MessageStack',
      badge: 10,
    },
    {
      title: 'Navigate',
      icon: 'navigate',
      navigate: 'Navigate',
    },
    {
      title: 'Contact',
      icon: 'person',
      navigate: 'Contact',
    },
  ];

  const state = navigation.dangerouslyGetState();
  let actualRoute = state.routes[state.index];

  while (actualRoute.state) {
    actualRoute = actualRoute.state.routes[actualRoute.state.index];
  }

  if (['MessageDetail'].includes(actualRoute.name)) {
    return null;
  }

  return (
    <Footer>
      <FooterTab>
        {navigationBottom.map((item, idx) => (
          <Button
            vertical
            badge={!!item?.badge}
            onPress={() => navigation.navigate(item.navigate)}
            active={actualRoute.name === item.navigate}
            key={idx.toString()}>
            {item?.badge && (
              <Badge>
                <Text>{item.badge}</Text>
              </Badge>
            )}
            <Icon name={item.icon} />
            <Text>{item.title}</Text>
          </Button>
        ))}
      </FooterTab>
    </Footer>
  );
};

export default FooterElement;
